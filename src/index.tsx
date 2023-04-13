import { get, set } from "enmity/api/settings";
import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { getByName, getByProps } from "enmity/metro";
import { React, Toasts, Users } from "enmity/metro/common";
import { create } from "enmity/patcher";
import { findInReactTree } from "enmity/utilities";
import manifest from "../manifest.json";
import { Icons } from "./common";
import { Badge as BadgeType, PossibleBadgeProps, User } from "./def";
import { Badge } from "./components/Dependent/Badge";
import Reviews from "./components/Reviews/Reviews";
import { showOAuth2Modal } from "./common/RDBAPI";
import Settings from "./components/Settings/Settings";
import { build } from "enmity/api/native";

const Patcher = create(manifest.name);
const UserProfile = getByProps("PRIMARY_INFO_TOP_OFFSET", "SECONDARY_INFO_TOP_MARGIN", "SIDE_PADDING");
const OldBadges = getByName('ProfileBadges', { all: true, default: false });
const NewBadges = getByProps("ProfileBadgesOld");

let currentUserID = get(manifest.name, "currentUser", undefined) as string | undefined;
let currentUserAttempts = 0;

const ensureCurrentUserInitialized = () => {
  if (currentUserID || currentUserAttempts >= 20) return;
  currentUserAttempts++;

  setTimeout(() => {
    currentUserID = Users.getCurrentUser().id;
    if (!currentUserID) return ensureCurrentUserInitialized();

    set(manifest.name, "currentUser", currentUserID);
  }, 25);
}

type ReviewDBPlugin = {
  renderPage: (navigation: any, { pageName, pagePanel }: { pageName: string, pagePanel: any }) => any;
} & Plugin

const ReviewDB: ReviewDBPlugin = {
  ...manifest,

  renderPage(_, { pageName, pagePanel }) {
    return showOAuth2Modal({
      pageName,
      pagePanel
    })
  },

  async onStart() {
    ensureCurrentUserInitialized();

    const admins: string[] = await fetch(manifest.links.api + "/admins")
      .then(res => res.json());

    const badges: BadgeType[] = await fetch(manifest.links.api + "/api/reviewdb/badges")
      .then(res => res.json());

    // fetches current user with toast from db and opens a toast if you have new reviews
    if (get(manifest.name, "rdbToken", "")) {
      const currentReviewDBUser: Response = await fetch(manifest.links.api + "/api/reviewdb/users", {
        method: "POST",
        body: JSON.stringify({
          token: get(manifest.name, "rdbToken", "")
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      const res: User = await currentReviewDBUser.json();

      if (res["lastReviewID"] > (get(manifest.name, "lastReviewID", 0) as number)) {
        Toasts.open({
          source: Icons.Pencil,
          content: "You have new reviews on your profile!"
        });
        set(manifest.name, "lastReviewID", res["lastReviewID"]);
      };
    };
 
    const patchBadges = ({ id, style, res}) => {
      const pushBadge = ({ name, image, ensure }: PossibleBadgeProps) => {
        if (ensure) {
          const RenderableBadge = () => <Badge 
            name={name} 
            image={image} 
            size={Array.isArray(style) 
              ? style.find(r => r.paddingVertical && r.paddingHorizontal)
                ? 16
                : 22
              : 16}
            margin={Array.isArray(style)
              ? 4
              : 8}
          />;

          if (res.props.badges) res.props.badges.push(<RenderableBadge />);
          else res.props.children.push(<RenderableBadge />);
        };
      };

      badges.forEach(badgeObject => {
        pushBadge({
          ensure: badgeObject.discordID === id,
          name: badgeObject?.name,
          image: badgeObject?.icon
        });
      });

      const possibleAuthor = manifest.authors.find(author => author.id === id);
      pushBadge({
        ensure: Boolean(possibleAuthor),
        name: "Enmity ReviewDB Developer",
        image: possibleAuthor?.icon
      });
    }

    if (build >= "42235") {
      Patcher.after(NewBadges, 'default', (_, [{ user: { id }, style }], res) => {
        patchBadges({ id, style, res })
      });
  
      return Patcher.unpatchAll;
    }
  
    for (const ProfileBadges of OldBadges) {
      Patcher.after(ProfileBadges, "default", (_, [{ user: { id }, isEnmity, style, ...rest }], res) => {
        patchBadges({ id, style, res })
      })
    };
  
    return Patcher.unpatchAll;

    // patches profile section to add reviews section to the bottom
    Patcher.after(UserProfile.default, "type", (_, __, res) => {
      const profileCardSection = findInReactTree(res, r =>
        r?.props?.children.find((res: any) => typeof res?.props?.displayProfile?.userId === "string")
        && r?.type?.displayName === "View"
        && Array?.isArray(r?.props?.style)
      )?.props?.children;

      if (!profileCardSection) return res;

      const { userId } = profileCardSection?.find((r: any) => typeof r?.props?.displayProfile?.userId === "string")
        ?.props?.displayProfile ?? {};

      if (!userId) return res;

      profileCardSection?.push(<Reviews userID={userId} currentUserID={currentUserID as string} admins={admins} />);
    });
  },

  onStop() {
    Patcher.unpatchAll();
  },

  getSettingsPanel({ settings }): any {
    return <Settings manifest={manifest} settings={settings} renderPage={ReviewDB.renderPage} />;
  },
};

registerPlugin(ReviewDB);
