import { populateGitHubSection } from "./github.js";
import { populateLinkedInSection } from "./linkedin.js";

const initializeSite = async () => {
  await Promise.all([populateGitHubSection(), populateLinkedInSection()]);
};

initializeSite();
