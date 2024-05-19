import { colors } from "./colors";
import { fetchRepositories } from '../services/githubService';

export interface Repository {
    id: string;
    name: string;
    url: string;
    color: (typeof colors)[keyof typeof colors];
    description: string;
    owner: string;
    languages: string[];
    topics: string[];
    stars: number;
    forks: number;
    watchers: number;
    issues: number;
    pull_requests: number;
    license: string;
    created_at: string;
    updated_at: string;
    size: number;
    default_branch: string;
    contributors: string[];
    commits: number;
    branches: number;
}

export let repositories: Repository[] = [];

export async function initializeRepositories(): Promise<void> {
    repositories = await fetchRepositories();
}

export const moreRepositories = [
    ...repositories.map((item) => ({
        ...item,
        id: item.id + "a",
    })),
];

export const sidebarRepositories = [
    ...repositories.map((item) => ({
        ...item,
        id: item.id + "_side",
    })),
];

export const starredRepositories = [
    ...repositories.map((item) => ({
        ...item,
        id: item.id + "_starred",
    })),
];

export const allRepositories = [
    ...repositories,
    ...moreRepositories,
    ...sidebarRepositories,
    ...starredRepositories,
];

