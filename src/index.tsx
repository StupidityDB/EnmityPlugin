import { get, set } from "enmity/api/settings";
import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { getByName, getByProps } from "enmity/metro";
import { React, Users } from "enmity/metro/common";
import { create } from "enmity/patcher";
import { findInReactTree } from "enmity/utilities";
import manifest from "../manifest.json";
import { Badge } from "./components/Dependent/Badge";
import Reviews from "./components/Reviews/Reviews";
import Settings from "./components/Settings/Settings";

const Patcher = create(manifest.name);
const UserProfile = getByProps("PRIMARY_INFO_TOP_OFFSET", "SECONDARY_INFO_TOP_MARGIN", "SIDE_PADDING");
const ProfileBadges = getByName("ProfileBadges", { all: true, default: false });

const ReviewDB: Plugin = {
  ...manifest,
  async onStart() {
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

    ensureCurrentUserInitialized();

    const admins = await fetch(manifest.links.api + "/admins")
      .then(res => res.json())

    for (const profileBadge of ProfileBadges) {
      Patcher.after(profileBadge, "default", (_, [{ user: { id } }], res) => {
        const DeveloperBadge = () => <Badge 
          name={"Enmity ReviewDB Developer"} 
          image={"https://cdn.discordapp.com/emojis/998700668716073071.gif?size=128"}        
        />;

        const AdminBadge = () => <Badge 
          name={"ReviewDB Admin"} 
          image={"https://cdn.discordapp.com/emojis/1040004306100826122.gif?size=128"} 
        />;

        if (manifest.authors.find(author => author.id === id)) {
          if (res.props.badges) res.props.badges.push(<DeveloperBadge />);
          else res.props.children.push(<DeveloperBadge />);
        }

        if (admins.includes(id)) {
          if (res.props.badges) res.props.badges.push(<AdminBadge />);
          else res.props.children.push(<AdminBadge />);
        }
      });
    }

    Patcher.after(UserProfile.default, "type", (_, __, res) => {
      const profileCardSection = findInReactTree(res, r =>
        r?.props?.children.find((res: any) => typeof res?.props?.displayProfile?.userId === "string")
        && r?.type?.displayName === "View"
        && Array?.isArray(r?.props?.style)
      )?.props?.children

      if (!profileCardSection) return res;

      const { userId } = profileCardSection?.find((r: any) => typeof r?.props?.displayProfile?.userId === "string")?.props?.displayProfile ?? {};

      if (!userId) return res

      profileCardSection?.push(<Reviews userID={userId} currentUserID={currentUserID as string} admins={admins} />)
    });
  },
  onStop() {
    Patcher.unpatchAll();
  },
  getSettingsPanel({ settings }): any {
    return <Settings manifest={manifest} settings={settings} />
  },
};

registerPlugin(ReviewDB);
