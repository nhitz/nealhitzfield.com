import axios from 'axios';
import {colors} from '../lib/colors';
import type {Repository} from "../lib/githubData.ts";
import * as fs from "fs";

let cachedRepositories: Repository[] = []

async function getReposFromGithub() {
    console.log('GET api request for repositories from github...OK');
    const response = await axios.get('https://api.github.com/users/nhitz/repos');
    cachedRepositories = response.data.map((repo: any) => ({
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
    // Write the repositories to a json file
    await writeRepositoriesToFile();
    return cachedRepositories;
}

export async function fetchRepositories(): Promise<Repository[]> {
    if (cachedRepositories.length > 0) {
        console.log('Returning cached repositories...');
        return cachedRepositories;
    }
    // else get from repositories.json
    try {
        const data = fs.readFileSync('repositories.json', 'utf8');
        cachedRepositories = JSON.parse(data);
        console.log('Returning repositories from file...');
        return cachedRepositories;
    } catch (err) {
        console.error('Error reading repositories from file:', err);
    }
    return await getReposFromGithub();
}

// Function to write the repositories to a cached local json file
async function writeRepositoriesToFile() {
    // Write the repositories to a json file
    fs.writeFile('repositories.json', JSON.stringify(cachedRepositories), (err) => {
        if (err) {
            console.error('Error writing repositories to file:', err);
        }
        console.log('Repositories written to file.');
    });
}
