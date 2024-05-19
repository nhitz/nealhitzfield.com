import { colors } from "./colors";
import { fetchRepositories } from '../services/githubService';

// data from a public github repositories:
// name: The name of the repositories.
// url: The URL of the repositories.
// description: A short description of the repositories.
// owner: The username of the repositories owner.
// languages: The programming languages used in the repositories.
// topics: The topics or tags associated with the repositories.
// stars: The number of stars the repositories has received.
// forks: The number of times the repositories has been forked.
// watchers: The number of users watching the repositories.
// issues: The number of open issues.
// pull_requests: The number of open pull requests.
// license: The license under which the repositories is released.
// created_at: The date and time when the repositories was created.
// updated_at: The date and time when the repositories was last updated.
// size: The size of the repositories in kilobytes.
// default_branch: The default branch of the repositories.
// contributors: The list of contributors to the repositories.
// commits: The number of commits made in the repositories.
// branches: The number of branches in the repositories.
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

let cachedRepositories: Repository[] | null = null

export async function getRepositories() {
    if (!cachedRepositories) {
        console.log('getting repositories')
        cachedRepositories = await fetchRepositories();
    }
    console.log('returning cached repositories')
    return cachedRepositories;
}

export const repositories: Repository[] = [
    {
        id: "1",
        name: "An Example Public Repository",
        url: "www.github.com/nhitz/example-repo",
        color: colors.teal,
        description: "This is an example public repositories.",
        owner: "nhitz",
        languages: ["JavaScript", "TypeScript"],
        topics: ["example", "public", "repository"],
        stars: 0,
        forks: 0,
        watchers: 0,
        issues: 0,
        pull_requests: 0,
        license: "MIT",
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
        size: 0,
        default_branch: "main",
        contributors: ["nhitz"],
        commits: 0,
        branches: 0,
    },
];

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

