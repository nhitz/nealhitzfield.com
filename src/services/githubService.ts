import axios from "axios";
import { colors } from "../lib/colors";
import type { Repository } from "../lib/githubData";
import * as fs from "fs/promises";

let cachedRepositories: Repository[] = [];

export async function invalidateCacheAndFetch(): Promise<Repository[]> {
  console.log("Invalidating cache and fetching repositories...");
  cachedRepositories = [];
  return await getReposFromGithub();
}

async function getReposFromGithub(): Promise<Repository[]> {
  try {
    console.log("GET api request for repositories from github...");
    const response = await axios.get(
      "https://api.github.com/users/nhitz/repos",
    );
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
    console.log("OK, cached repositories: ", cachedRepositories);
    await writeRepositoriesToFile();
    return cachedRepositories;
  } catch (error) {
    console.error("Error fetching repositories from GitHub:", error);
    return [];
  }
}

export async function fetchRepositories(): Promise<Repository[]> {
  if (cachedRepositories.length > 0) {
    return cachedRepositories;
  }
  try {
    console.log("No cached repositories, trying to read from file...");
    return await readRepositoriesFromFile();
  } catch (err) {
    console.error("Error reading repositories from file:", err);
    return await getReposFromGithub();
  }
}

async function readRepositoriesFromFile(): Promise<Repository[]> {
  try {
    const data = await fs.readFile("repositories.json", "utf8");
    let repositoriesFromFile = JSON.parse(data);
    cachedRepositories = repositoriesFromFile;
    console.log("Returning repositories from file.");
    return repositoriesFromFile;
  } catch (err) {
    if (err instanceof Error) {
      if ((err as any).code === "ENOENT") {
        console.log("File not found, returning empty array");
        throw new Error("File not found");
      } else {
        console.error("Error reading repositories from file:", err.message);
        throw err;
      }
    }
    throw err;
  }
}

async function writeRepositoriesToFile() {
  console.log("Writing repositories to file...");
  try {
    await fs.writeFile("repositories.json", JSON.stringify(cachedRepositories));
    console.log("Repositories written to file.");
  } catch (err) {
    console.error("Error writing repositories to file:", err);
  }
}
