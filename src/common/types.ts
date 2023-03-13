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