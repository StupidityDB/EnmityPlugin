import { SettingsStore } from "enmity/api/settings";
import manifest from "../manifest.json";

export interface Review {
    id: number;
    sender: Omit<User, "ID" | "clientMod" | "warningCount" | "banEndDate" | "lastReviewID"> | {
        id: number;
    };
    star: number;
    comment: string;
    type: 0 | 1 | 2 | 3;
    timestamp: number
}

export interface Endpoint {
    success: boolean;
    message: string;
    reviews?: Review[];
    reviewCount?: number;
    token?: string;
}

export interface Badge {
    name: string;
    icon: string;
    redirectURL: string;
    type: number;
    description: string;
    discordID: string;
}

export interface User {
    ID: number;
    discordID: string;
    username: string;
    profilePhoto: string;
    clientMod: string;
    warningCount: number;
    banEndDate: string;
    badges: Badge[]
    lastReviewID: number;
}

export interface ShowAlert {
    title: string;
    userID: string;
    confirmText?: string;
    onConfirm: Function;
    onAny?: Function;
    existing?: string;
    placeholder?: string;
}

export interface PossibleBadgeProps {
    name: string;
    image?: string;
    ensure: boolean;
}

export interface ButtonProps {
    text?: string | React.FunctionComponent;
    image?: string;
    dangerous?: boolean;
    onPress?: Function;
    style?: Record<string, any>
    innerStyle?: Record<string, any>
    textStyle?: Record<string, any>
    useGradient?: boolean,
    useText?: boolean;
    useImage?: boolean,
    disabled?: boolean,
    textDirection?: "left" | "right"
}

export interface CreditsProps {
    manifest: typeof manifest;
}

export interface ReviewProps {
    review: Review;
    onSubmit: Function;
    contextStyles: Record<string, any>
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
    label: string;
    children?: any;
    style?: { [key: string]: any };
}