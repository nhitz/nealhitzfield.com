import axios from 'axios';
import { colors } from '../lib/colors';
import type {Repository} from "../lib/githubData.ts";

export async function fetchRepositories(): Promise<Repository[]> {
    console.log('fetching repositories')
    const response = await axios.get('https://api.github.com/users/nhitz/repos');
    console.log('fetched repositories:', response.data);
    return response.data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        color: colors.gray, // You can replace this with a function to assign colors based on some repo properties
        description: repo.description,
        owner: repo.owner.login,
        languages: repo.languages,
        topics: repo.topics,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        issues: repo.open_issues_count,
        pull_requests: repo.open_pull_requests_count,
        license: repo.license?.name,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        size: repo.size,
        default_branch: repo.default_branch,
        contributors: repo.contributors,
        commits: repo.commits,
        branches: repo.branches,
    }));
}

// Fetch single repository by url
export async function fetchSingleRepository(url: string): Promise<Repository> {
    const response = await axios.get(url);
    const repo = response.data;
    return {
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        color: colors.gray, // You can replace this with a function to assign colors based on some repo properties
        description: repo.description,
        owner: repo.owner.login,
        languages: repo.languages,
        topics: repo.topics,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        issues: repo.open_issues_count,
        pull_requests: repo.open_pull_requests_count,
        license: repo.license?.name,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        size: repo.size,
        default_branch: repo.default_branch,
        contributors: repo.contributors,
        commits: repo.commits,
        branches: repo.branches,
    };
}
