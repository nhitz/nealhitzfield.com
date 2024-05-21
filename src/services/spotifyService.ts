import axios from 'axios';
import type {SpotifyUser} from "../lib/spotifyData.ts";
import * as fs from "fs";

let user: SpotifyUser;

async function getUserFromSpotify() {
    console.log('GET api request for user from spotify...OK');
    const response = await axios.get('https://api.spotify.com/users/{user_id}');
    user = response.data.map((user: any) => ({
        user_id: user.id,
        display_name: user.display_name,
        external_urls: user.external_urls,
        followers: user.followers,
        href: user.href,
        id: user.id,
        images: user.images,
        type: user.type,
        uri: user.uri,
    }));
    await writeSpotifyUserToFile();
    return user;
}

export async function fetchSpotifyUser(): Promise<SpotifyUser> {
    if (user) {
        return user;
    }
    try {
        const data = fs.readFileSync('spotifyUser.json', 'utf8');
        user = JSON.parse(data);
        console.log('Returning spotify user from file...');
        return user;
    } catch (err) {
        console.error('Error reading spotify user from file:', err);
    }
    return await getUserFromSpotify();
}

async function writeSpotifyUserToFile() {
    fs.writeFile('repositories.json', JSON.stringify(user), (err) => {
        if (err) {
            console.error('Error writing spotify user to file:', err);
        }
        console.log('Spotify user written to file.');
    });
}
