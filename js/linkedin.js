import { linkedinConfig, links } from "./config.js";
import { linkedinPostsGrid, linkedinPostsSection } from "./dom.js";
import { formatLiteralDate, sanitize } from "./utils.js";

const hideLinkedInSection = () => {
  if (linkedinPostsSection) {
    linkedinPostsSection.hidden = true;
  }
};

const showLinkedInSection = () => {
  if (linkedinPostsSection) {
    linkedinPostsSection.hidden = false;
  }
};

const renderLinkedInPost = (post) => {
  const publishedAt = formatLiteralDate(post.publishedAt);

  return `
    <article class="linkedin-post">
      <p class="repo-meta">${publishedAt || "LinkedIn"}</p>
      <h3>${sanitize(post.title || "Postagem publica")}</h3>
      <p class="repo-description">${sanitize(post.excerpt || "")}</p>
      <div class="repo-links">
        <a href="${sanitize(post.url || links.linkedinProfile)}" target="_blank" rel="noreferrer">Abrir publicacao</a>
      </div>
    </article>
  `;
};

const fetchLinkedInPosts = async () => {
  const response = await fetch(linkedinConfig.postsFile, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Falha ao carregar linkedin-posts.json.");
  }

  const posts = await response.json();

  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error("Nenhuma postagem disponivel.");
  }

  return posts.slice(0, linkedinConfig.maxItems);
};

export const populateLinkedInSection = async () => {
  if (!linkedinPostsGrid) return;

  try {
    const posts = await fetchLinkedInPosts();
    linkedinPostsGrid.innerHTML = posts.map(renderLinkedInPost).join("");
    showLinkedInSection();
  } catch (error) {
    hideLinkedInSection();
    console.error(error);
  }
};
