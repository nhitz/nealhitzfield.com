import { colors } from "./colors";

export interface Repository {
  id: number;
  name: string;
  url: string;
  color: (typeof colors)[keyof typeof colors];
  description: string;
  owner: string;
  topics: string[];
  stars: number;
  forks: number;
  watchers: number;
  issues: number;
  license?: string;
  created_at: string;
  updated_at: string;
  size: number;
  default_branch: string;
  image: string;
}

export let repositories: Repository[] = [
  {
    "id": 802222597,
    "name": "nealhitzfield.com",
    "url": "https://github.com/nhitz/nealhitzfield.com",
    "color": { "accent": "#555555", "dark": "#27272a" },
    "description": "Personal website.",
    "owner": "nhitz",
    "topics": [],
    "stars": 0,
    "forks": 0,
    "watchers": 0,
    "issues": 1,
    "created_at": "2024-05-17T19:04:43Z",
    "updated_at": "2024-05-25T19:42:01Z",
    "size": 611,
    "default_branch": "main",
    "image": "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
  },
  {
    "id": 736783159,
    "name": "caddy-cloudflare",
    "url": "https://github.com/nhitz/caddy-cloudflare",
      "color": { "accent": "#555555", "dark": "#27272a" },
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
      "default_branch": "master",
      "image": "https://caddyserver.com/resources/images/open-graph-square.png?v=1a82466"
    },
    {
      "id": 599826625,
      "name": "dotfiles",
      "url": "https://github.com/nhitz/dotfiles",
      "color": { "accent": "#555555", "dark": "#27272a" },
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
      "default_branch": "main",
      "image": "https://pbs.twimg.com/profile_images/1668661956805373957/tmhAvNN9_400x400.jpg"
    },
    {
      "id": 668034939,
      "name": "goatflix-requests",
      "url": "https://github.com/nhitz/goatflix-requests",
      "color": { "accent": "#555555", "dark": "#27272a" },
      "description": "GoatFlix fork of Overseerr",
      "owner": "nhitz",
      "topics": ["plex", "radarr", "sonarr"],
      "stars": 0,
      "forks": 0,
      "watchers": 0,
      "issues": 0,
      "license": "MIT License",
      "created_at": "2023-07-18T21:43:04Z",
      "updated_at": "2024-05-03T04:05:49Z",
      "size": 30636,
      "default_branch": "master",
      "image": "https://static-00.iconduck.com/assets.00/overseerr-icon-2048x2048-5ncr26li.png"
    },
    {
      "id": 720284719,
      "name": "ngrok-cloudflare-updater",
      "url": "https://github.com/nhitz/ngrok-cloudflare-updater",
      "color": { "accent": "#555555", "dark": "#27272a" },
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
      "default_branch": "main",
      "image": "https://avatars.githubusercontent.com/u/10625446?s=280&v=4"
    },
    {
      "id": 131326739,
      "name": "MASM3",
      "url": "https://github.com/nhitz/MASM3",
      "color": { "accent": "#555555", "dark": "#27272a" },
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
      "default_branch": "master",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Intel_A80486-25.jpg/1200px-Intel_A80486-25.jpg"
    },
    {
      "id": 132701216,
      "name": "MASM4",
      "url": "https://github.com/nhitz/MASM4",
      "color": { "accent": "#555555", "dark": "#27272a" },
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
      "default_branch": "master",
      "image": "https://user-images.githubusercontent.com/5421823/62779159-4cf76880-baaa-11e9-8318-e20a1aaa913a.png"
    },
    {
      "id": 607820795,
      "name": "sakai",
      "url": "https://github.com/nhitz/sakai",
      "color": { "accent": "#555555", "dark": "#27272a" },
      "description": "Testing out PrimeVue theming with Vue 3 and Vite. Demo deployed to Azure free tier with GitHub Actions.",
      "owner": "nhitz",
      "topics": ["primefaces", "primevue", "vite", "vue"],
      "stars": 0,
      "forks": 0,
      "watchers": 0,
      "issues": 0,
      "license": "MIT License",
      "created_at": "2023-02-28T18:40:04Z",
      "updated_at": "2023-02-28T23:44:57Z",
      "size": 10220,
      "default_branch": "master",
      "image": "https://res.cloudinary.com/ddxwdqwkr/image/upload/f_auto/v1689120136/patterns.dev/Images/vue/og-images/introduction.png"
    }, 
];

export const allRepositories = [...repositories];

export function getAllRepositories() {
  return [...repositories];
}