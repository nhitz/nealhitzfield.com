import {colors} from "./colors";
import {fetchRepositories} from '../services/githubService';

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
}

export let repositories: Repository[] = [];

export async function initializeRepositories(): Promise<void> {
    if (repositories.length > 0) {
        console.log("Repositories already initialized.");
        return;
    }
    console.log("Initializing repositories...");
    repositories = await fetchRepositories();
}