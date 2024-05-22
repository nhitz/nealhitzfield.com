import { fetchSpotifyUser } from "../services/spotifyService";

export interface SpotifyUser {
    user_id: string; // The user's Spotify user ID
    display_name: string; // The name displayed on the user's profile. null if not available.
    external_urls: { // Known public external URLs for this user.
        spotify: string;
    };
    followers: { // followers
        href: string;
        total: number;
    };
    href: string; // A link to the Web API endpoint for this user.
    id: string; // The Spotify user ID for this user.
    images: { // The user's profile image.
        height: number;
        url: string;
        width: number;
    }[];
    type: string; // The object type: "user"
    uri: string; // The Spotify URI for this user.
}

export let spotifyUser: SpotifyUser;

export async function initializeSpotifyUser(): Promise<void> {
    // if the user is already initialized, return
    if (spotifyUser) {
        return;
    }
    spotifyUser = await fetchSpotifyUser();
}