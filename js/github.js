import { fallbackStats, githubUser, links, repoConfig } from "./config.js";
import { repoGrid, statFollowers, statRepos, statUpdated } from "./dom.js";
import { formatDate, sanitize, truncateText } from "./utils.js";

const pickFeaturedRepos = (repos) => {
  return repos
    .filter((repo) => !repo.fork && repo.name !== githubUser)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, repoConfig.maxItems);
};

const renderRepoCard = (repo) => {
  const description = repo.description || "Projeto publico no GitHub.";
  const shortDescription = truncateText(description, repoConfig.descriptionLimit);
  const deployLink = repo.homepage
    ? `<a href="${sanitize(repo.homepage)}" target="_blank" rel="noreferrer">Ver deploy</a>`
    : "";

  return `
    <article class="repo-card">
      <div class="repo-header">
        <div>
          <p class="repo-meta">Atualizado em ${formatDate(repo.updated_at)}</p>
          <h3>${sanitize(repo.name)}</h3>
        </div>
        <span class="repo-badge">${sanitize(repo.language || "Codigo")}</span>
      </div>

      <p class="repo-description">${sanitize(shortDescription)}</p>

      <div class="repo-links">
        <a href="${sanitize(repo.html_url)}" target="_blank" rel="noreferrer">Abrir repositorio</a>
        ${deployLink}
      </div>
    </article>
  `;
};

const renderRepoFallback = () => {
  if (!repoGrid) return;

  repoGrid.innerHTML = `
    <article class="repo-card">
      <div class="repo-header">
        <div>
          <p class="repo-meta">Fallback local</p>
          <h3>GitHub temporariamente indisponivel</h3>
        </div>
        <span class="repo-badge">Ao vivo</span>
      </div>
      <p class="repo-description">
        Nao consegui carregar automaticamente os repositorios agora, mas seu perfil segue acessivel pelo link direto abaixo.
      </p>
      <div class="repo-links">
        <a href="${links.githubProfile}" target="_blank" rel="noreferrer">Abrir GitHub</a>
      </div>
    </article>
  `;
};

const applyFallbackStats = () => {
  if (statRepos) statRepos.textContent = fallbackStats.repos;
  if (statFollowers) statFollowers.textContent = fallbackStats.followers;
  if (statUpdated) statUpdated.textContent = fallbackStats.updated;
};

const applyProfileStats = (profile, featuredRepos) => {
  if (statRepos) statRepos.textContent = profile.public_repos ?? "--";
  if (statFollowers) statFollowers.textContent = profile.followers ?? "--";
  if (statUpdated) statUpdated.textContent = formatDate(featuredRepos[0]?.updated_at);
};

const fetchGitHubData = async () => {
  const [profileResponse, reposResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${githubUser}`),
    fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`),
  ]);

  if (!profileResponse.ok || !reposResponse.ok) {
    throw new Error("Falha ao carregar dados do GitHub.");
  }

  const profile = await profileResponse.json();
  const repos = await reposResponse.json();

  return { profile, repos };
};

export const populateGitHubSection = async () => {
  if (!repoGrid) return;

  try {
    const { profile, repos } = await fetchGitHubData();
    const featuredRepos = pickFeaturedRepos(repos);

    applyProfileStats(profile, featuredRepos);
    repoGrid.innerHTML = featuredRepos.map(renderRepoCard).join("");
  } catch (error) {
    applyFallbackStats();
    renderRepoFallback();
    console.error(error);
  }
};
