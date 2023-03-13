import { SettingsStore } from "enmity/api/settings";
import manifest from "../../manifest.json";

export interface Review {
    id: number,
    sender: { 
        id: number,
        discordID: string,
        username: string,
        profilePhoto: string,
        badges: Array<{ 
            name: string;
            icon: string;
        }> | [];
    },
    star: number,
    comment: string,
    type: 0 | 1 | 2 | 3,
    timestamp: number
}

export interface Endpoint {
    success: boolean;
    message: string;
    reviews?: Review[];
    token?: string;
}

export interface ShowAlert {
    title: string;
    userID: string;
    confirmText?: string;
    onConfirm: Function;
    existing?: string;
    placeholder?: string;
}

export interface ButtonProps {
    text: string;
    image?: string;
    dangerous?: boolean;
    onPress?: Function;
    style?: { [key: string]: any }
}

export interface CreditsProps {
    manifest: typeof manifest;
}

export interface ReviewProps {
    review: Review;
    onSubmit: Function;
}

export interface ReviewActionSheetProps {
    onConfirm: Function;
    review: Review;
    currentUserID: string;
    admins: string[]
}

export interface ReviewsSectionProps {
    userID: string;
    currentUserID: string;
    admins: string[]
}

export interface SettingsProps {
    settings: SettingsStore;
    manifest: typeof manifest;
};

export interface SectionWrapperProps {
    label: string, 
    children?: any, 
    style?: { [key: string]: any }
}
