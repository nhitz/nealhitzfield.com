import axios from 'axios';
import type { Playlist, Song } from '../lib/data';
import { colors } from '../lib/colors';

export async function fetchPlaylists(): Promise<Playlist[]> {
    const response = await axios.get('https://api.github.com/users/nhitz/repos');
    return response.data.map((repo: any) => ({
        id: repo.id,
        title: repo.name,
        color: colors.gray, // You can replace this with a function to assign colors based on some repo properties
        cover: 'https://via.placeholder.com/150', // Replace with actual cover image if available
        artists: [repo.owner.login],
    }));
}

export async function fetchSongs(playlistId: string): Promise<Song[]> {
    const response = await axios.get(`https://api.github.com/repos/nhitz/${playlistId}`);
    return response.data.map((repoDetail: any) => ({
        id: repoDetail.id,
        title: repoDetail.name,
        image: 'https://via.placeholder.com/150', // Replace with actual image if available
        artists: [repoDetail.owner.login],
        album: repoDetail.description,
        duration: 'N/A', // Replace with actual duration if available
    }));
}
