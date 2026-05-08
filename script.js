const githubUser = "paulohenriquemendes";
const repoGrid = document.querySelector("#repo-grid");
const statRepos = document.querySelector('[data-stat="repos"]');
const statFollowers = document.querySelector('[data-stat="followers"]');
const statUpdated = document.querySelector('[data-stat="updated"]');
const linkedinPostsSection = document.querySelector("#linkedin-posts");
const linkedinPostsGrid = document.querySelector("#linkedin-posts-grid");

const formatDate = (value) => {
  if (!value) return "--";

  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
};

const formatLiteralDate = (value) => {
  if (!value) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
};

const sanitize = (value) => {
  if (!value) return "";

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};

const pickFeaturedRepos = (repos) => {
  return repos
    .filter((repo) => !repo.fork && repo.name !== githubUser)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 6);
};

const renderRepoCard = (repo) => {
  const description = repo.description || "Projeto publico no GitHub.";
  const shortDescription =
    description.length > 150 ? `${description.slice(0, 147).trim()}...` : description;
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
        <a href="https://github.com/${githubUser}" target="_blank" rel="noreferrer">Abrir GitHub</a>
      </div>
    </article>
  `;
};

const renderLinkedInPost = (post) => {
  const publishedAt = formatLiteralDate(post.publishedAt);

  return `
    <article class="linkedin-post">
      <p class="repo-meta">${publishedAt || "LinkedIn"}</p>
      <h3>${sanitize(post.title || "Postagem publica")}</h3>
      <p class="repo-description">${sanitize(post.excerpt || "")}</p>
      <div class="repo-links">
        <a href="${sanitize(post.url || "https://www.linkedin.com/in/paulo-henrique-mendes/")}" target="_blank" rel="noreferrer">Abrir publicacao</a>
      </div>
    </article>
  `;
};

const hideLinkedInSection = () => {
  if (linkedinPostsSection) {
    linkedinPostsSection.hidden = true;
  }
};

const populatePortfolio = async () => {
  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${githubUser}`),
      fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`),
    ]);

    if (!profileResponse.ok || !reposResponse.ok) {
      throw new Error("Falha ao carregar dados do GitHub.");
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    const featuredRepos = pickFeaturedRepos(repos);

    statRepos.textContent = profile.public_repos ?? "--";
    statFollowers.textContent = profile.followers ?? "--";
    statUpdated.textContent = formatDate(featuredRepos[0]?.updated_at);

    repoGrid.innerHTML = featuredRepos.map(renderRepoCard).join("");
  } catch (error) {
    statRepos.textContent = "23";
    statFollowers.textContent = "10";
    statUpdated.textContent = "abr. 2026";
    renderRepoFallback();
    console.error(error);
  }
};

const populateLinkedInPosts = async () => {
  if (!linkedinPostsGrid) return;

  try {
    const response = await fetch("./linkedin-posts.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Falha ao carregar linkedin-posts.json.");
    }

    const posts = await response.json();

    if (!Array.isArray(posts) || !posts.length) {
      throw new Error("Nenhuma postagem disponivel.");
    }

    linkedinPostsGrid.innerHTML = posts.slice(0, 3).map(renderLinkedInPost).join("");
    if (linkedinPostsSection) {
      linkedinPostsSection.hidden = false;
    }
  } catch (error) {
    hideLinkedInSection();
    console.error(error);
  }
};

populatePortfolio();
populateLinkedInPosts();
