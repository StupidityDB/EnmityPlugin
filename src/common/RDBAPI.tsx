import { get, set } from 'enmity/api/settings';
import { Dialog, Navigation, Toasts, React } from 'enmity/metro/common';
import manifest from "../../manifest.json";
import { Icons } from './';
import { Endpoint, Review } from '../def';
import Page from '../components/Dependent/Page';
import { getByName } from 'enmity/metro';

const getRdbToken = () => get(manifest.name, "rdbToken", "");
const OAuth2AuthorizeModal = getByName("OAuth2AuthorizeModal");

let isShowing = false;
const checkToken = (): boolean => {
  if (isShowing) return false;

  if (!getRdbToken()) {
    isShowing = true;
    Dialog.show({
      title: "Unauthorized",
      body: "You have not set your ReviewDB Auth Token. Please do so in the settings panel.",
      confirmText: "Get ReviewDB Token",
      cancelText: "Close",

      // run the install function
      onConfirm: () => {
        showOAuth2Modal({
          pagePanel: OAuth2Modal
        });
        isShowing = false;
      },

      onCancel: () => {
        isShowing = false
      }
    });
    return false;
  }

  return true;
}

export const OAuth2Modal = () => <OAuth2AuthorizeModal
  clientId="915703782174752809"
  redirectUri={manifest.links.api + "/api/reviewdb/auth"}
  scopes={["identify"]}
  responseType={"code"}
  permissions={0n}
  cancelCompletesFlow={false}
  callback={async function({ location }) {
    try {
      const authURL = new URL(location);
      authURL.searchParams.append("returnType", "json");
      authURL.searchParams.append("clientMod", "enmity");

      const res = await fetch(authURL, { headers: { accept: "application/json" } });
      const { token, success, message }: Endpoint = await res.json();

      if (success) {
        // success! we can set the token
        set(manifest.name, "rdbToken", token!)
      }

      // failure :c
      throw new Error(`Status returned by backend was not OK: ${message}`);
    } catch(e) {
      Navigation.pop();
      console.error(`[${manifest.name}] Error when authorizing account: ${e}`)
    }
  }}
  dismissOAuthModal={() => Navigation.pop()}
/>

export const showOAuth2Modal = ({ pagePanel }) => 
  get(manifest.name, "rdbToken", "") == ""
    ? Navigation.push(Page, {
      component: pagePanel
    })
    : Toasts.open({
      content: "You already have a token set!",
      source: Icons.Self
    })


export async function getReviews(userID: string, offset: number) {
  try {
    let flags = 0;
    if (!get(manifest.name, "showWarning", true)) flags |= 0b00000010;

    const res = await fetch(
      `${manifest.links.api}/api/reviewdb/users/${userID}/reviews?offset=${offset}&flags=${flags}`, 
      {
        method: "GET",
      }
    );

    const { reviews, reviewCount, message }: Endpoint = await res.json();

    if (res.ok) {
        return { reviews, reviewCount };
    }

    throw new Error("Error when getting reviews: " + message);
  } catch (err) {
    Toasts.open({
      content: "Error while fetching reviews. Check logs for more info.",
      source: Icons.Failed,
    });
    console.log("[ReviewDB] Error while fetching reviews:", err);
  }
}

export async function addReview(review: any, userID: string) {
  if (!checkToken()) return new Promise((_, reject) => reject("Invalid token!"));

  const r = await fetch(`${manifest.links.api}/api/reviewdb/users/${userID}/reviews`, {
    method: "PUT",
    body: JSON.stringify(review),
    headers: {
      "Content-Type": "application/json",
    }
  });

  const { message }: Endpoint = await r.json();

  message && Toasts.open({
    content: message + "!",
    source: Icons.Pencil,
  });

  return console.log("[ReviewDB]", Response[message] ?? Response.error);
}

export async function deleteReview(id: number, userID: string) {
  if (!checkToken()) return new Promise((_, reject) => reject("Invalid token!"));

  const r = await fetch(`${manifest.links.api}/api/reviewdb/users/${userID}/reviews`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify({
      reviewid: id,
      token: getRdbToken(),
    })
  });

  const { message }: Endpoint = await r.json().catch(console.log);

  Toasts.open({
    content: (message ?? "Response is empty") + "!",
    source: Icons.Success,
  });
}

export async function reportReview(id: number) {
  if (!checkToken()) return new Promise((_, reject) => reject("Invalid token!"));

  const res = await fetch(`${manifest.links.api}/api/reviewdb/reports`, {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify({
      reviewid: id,
      token: getRdbToken()
    })
  });

  const { message }: Endpoint = await res.json();

  Toasts.open({
    content: (message ?? "Response is empty") + "!",
    source: Icons.Success,
  });
}

export const canDeleteReview = (
  review: Review,
  currentUserID: string,
  admins: string[]
) => admins.includes(currentUserID) ?? review["sender"]["discordID"] == currentUserID;
