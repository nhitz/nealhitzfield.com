import {colors} from "./colors";
import {fetchRepositories} from '../services/githubService';

export interface Repository {
    id: number;
    name: string;
    url: string;
    color: (typeof colors)[keyof typeof colors];
    description: string;
    owner: string;
    // languages: string[];
    topics: string[];
    stars: number;
    forks: number;
    watchers: number;
    issues: number;
    // pull_requests: number;
    license?: string;
    created_at: string;
    updated_at: string;
    size: number;
    default_branch: string;
    // contributors: string[];
    // commits: number;
    // branches: number;
}

export let repositories: Repository[] = [
    {
        "id": 208883734,
        "name": "blank-audio",
        "url": "https://github.com/nhitz/blank-audio",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "Set of blank MP3 audio files",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "created_at": "2019-09-16T19:43:30Z",
        "updated_at": "2019-09-16T19:43:32Z",
        "size": 13924,
        "default_branch": "master"
    },
    {
        "id": 756493893,
        "name": "bruh",
        "url": "https://github.com/nhitz/bruh",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "playground for django + vue",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 1,
        "created_at": "2024-02-12T19:16:51Z",
        "updated_at": "2024-05-03T04:29:05Z",
        "size": 121,
        "default_branch": "main"
    },
    {
        "id": 122652976,
        "name": "Bulk-Club",
        "url": "https://github.com/nhitz/Bulk-Club",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "CS1C Project 1",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "created_at": "2018-02-23T17:38:18Z",
        "updated_at": "2023-07-07T16:44:22Z",
        "size": 11750,
        "default_branch": "master"
    },
    {
        "id": 736783159,
        "name": "caddy-cloudflare",
        "url": "https://github.com/nhitz/caddy-cloudflare",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "Caddy with integrated support for Cloudflare DNS-01 ACME verification challenges.",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "license": "MIT License",
        "created_at": "2023-12-28T21:36:17Z",
        "updated_at": "2023-12-30T16:39:02Z",
        "size": 37,
        "default_branch": "master"
    },
    {
        "id": 128841821,
        "name": "CS1CProject2",
        "url": "https://github.com/nhitz/CS1CProject2",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "Qt App in C++ for CS1C",
        "owner": "nhitz",
        "topics": [],
        "stars": 1,
        "forks": 1,
        "watchers": 1,
        "issues": 0,
        "created_at": "2018-04-09T22:37:16Z",
        "updated_at": "2023-01-28T19:02:16Z",
        "size": 3564,
        "default_branch": "master"
    },
    {
        "id": 599826625,
        "name": "dotfiles",
        "url": "https://github.com/nhitz/dotfiles",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "my dotfiles wow",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "created_at": "2023-02-10T00:43:33Z",
        "updated_at": "2024-05-03T05:30:51Z",
        "size": 4,
        "default_branch": "main"
    },
    {
        "id": 668034939,
        "name": "goatflix-requests",
        "url": "https://github.com/nhitz/goatflix-requests",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "GoatFlix fork of Overseerr",
        "owner": "nhitz",
        "topics": [
            "plex",
            "radarr",
            "sonarr"
        ],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "license": "MIT License",
        "created_at": "2023-07-18T21:43:04Z",
        "updated_at": "2024-05-03T04:05:49Z",
        "size": 30636,
        "default_branch": "master"
    },
    {
        "id": 131326739,
        "name": "MASM3",
        "url": "https://github.com/nhitz/MASM3",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "String manipulation project written in x86 assembly for the 80486 processor",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "created_at": "2018-04-27T17:34:48Z",
        "updated_at": "2023-07-07T17:14:07Z",
        "size": 90,
        "default_branch": "master"
    },
    {
        "id": 132701216,
        "name": "MASM4",
        "url": "https://github.com/nhitz/MASM4",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "Text editor implemented with a linked list, written in x86 assembly",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "created_at": "2018-05-09T04:23:08Z",
        "updated_at": "2023-07-07T17:14:41Z",
        "size": 119,
        "default_branch": "master"
    },
    {
        "id": 720284719,
        "name": "ngrok-cloudflare-updater",
        "url": "https://github.com/nhitz/ngrok-cloudflare-updater",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "Python script to update a Cloudflare SRV record with new ngrok tunnel information.",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "license": "MIT License",
        "created_at": "2023-11-18T02:34:00Z",
        "updated_at": "2023-11-18T02:53:15Z",
        "size": 5,
        "default_branch": "main"
    },
    {
        "id": 129854226,
        "name": "nocode",
        "url": "https://github.com/nhitz/nocode",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "The best way to write secure and reliable applications. Write nothing; deploy nowhere.",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "license": "Apache License 2.0",
        "created_at": "2018-04-17T06:04:08Z",
        "updated_at": "2023-07-12T17:54:54Z",
        "size": 5,
        "default_branch": "master"
    },
    {
        "id": 607820795,
        "name": "sakai",
        "url": "https://github.com/nhitz/sakai",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "Testing out PrimeVue theming with Vue 3 and Vite. Demo deployed to Azure free tier with GitHub Actions.",
        "owner": "nhitz",
        "topics": [
            "primefaces",
            "primevue",
            "vite",
            "vue"
        ],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "license": "MIT License",
        "created_at": "2023-02-28T18:40:04Z",
        "updated_at": "2023-02-28T23:44:57Z",
        "size": 10220,
        "default_branch": "master"
    },
    {
        "id": 595249212,
        "name": "the-holy-hand-grenade-of-antioch",
        "url": "https://github.com/nhitz/the-holy-hand-grenade-of-antioch",
        "color": {
            "accent": "#555555",
            "dark": "#27272a"
        },
        "description": "A full-stack Python web application, IaC with Terraform, CI/CD with GitHub Actions, deployable to AWS ",
        "owner": "nhitz",
        "topics": [],
        "stars": 0,
        "forks": 0,
        "watchers": 0,
        "issues": 0,
        "created_at": "2023-01-30T17:46:56Z",
        "updated_at": "2023-02-01T04:41:51Z",
        "size": 7912,
        "default_branch": "main"
    },
];

export async function initializeRepositories(): Promise<void> {
    if (repositories.length > 0) {
        return;
    }
    repositories = await fetchRepositories();
}

export const allRepositories = [
    ...repositories,
];