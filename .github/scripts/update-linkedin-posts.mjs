import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const activityUrl =
  process.env.LINKEDIN_ACTIVITY_URL?.trim() ||
  "https://www.linkedin.com/in/paulo-henrique-mendes/recent-activity/all/";

const profileUrl =
  process.env.LINKEDIN_PROFILE_URL?.trim() ||
  "https://www.linkedin.com/in/paulo-henrique-mendes/";

const liAt = process.env.LINKEDIN_LI_AT?.trim() || "";
const outputPath = path.resolve(process.cwd(), "linkedin-posts.json");

const selectors = [
  ".profile-creator-shared-feed-update__container",
  ".feed-shared-update-v2",
  ".occludable-update",
  "article",
];

const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

const scrapePosts = async () => {
  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    });

    if (liAt) {
      await context.addCookies([
        {
          name: "li_at",
          value: liAt,
          domain: ".linkedin.com",
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "Lax",
        },
      ]);
    }

    const page = await context.newPage();

    await page.goto(activityUrl, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });

    await page.waitForTimeout(6_000);

    const posts = await page.evaluate(
      ({ selectors: activeSelectors, profileUrl: fallbackUrl }) => {
        const items = [];
        const seen = new Set();

        const nodes = activeSelectors.flatMap((selector) =>
          Array.from(document.querySelectorAll(selector)),
        );

        for (const node of nodes) {
          const text = (node.innerText || "").replace(/\s+/g, " ").trim();

          if (!text || text.length < 80) continue;

          const anchor =
            node.querySelector('a[href*="/feed/update/"]') ||
            node.querySelector('a[href*="/posts/"]') ||
            node.querySelector('a[href*="/recent-activity/"]');

          const url = anchor?.href || fallbackUrl;

          if (seen.has(url)) continue;
          seen.add(url);

          const timeNode = node.querySelector("time");
          const publishedLabel =
            timeNode?.getAttribute("datetime") ||
            timeNode?.textContent?.trim() ||
            "";

          const lines = text
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

          const title = (lines.find((line) => line.length > 24) || text).slice(0, 100).trim();
          const excerpt = text.slice(0, 280).trim();

          items.push({
            title,
            excerpt,
            url,
            publishedLabel,
          });

          if (items.length >= 3) break;
        }

        return items;
      },
      { selectors, profileUrl },
    );

    await context.close();

    const today = new Date().toISOString().slice(0, 10);

    return posts
      .filter((post) => post.url && post.excerpt)
      .slice(0, 3)
      .map((post) => ({
        title: normalizeText(post.title),
        excerpt: normalizeText(post.excerpt),
        url: post.url,
        publishedAt: post.publishedLabel || today,
      }));
  } finally {
    await browser.close();
  }
};

try {
  const posts = await scrapePosts();
  await fs.writeFile(outputPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
  console.log(`linkedin-posts.json atualizado com ${posts.length} publicacoes.`);
} catch (error) {
  console.warn(String(error));
  await fs.writeFile(outputPath, "[]\n", "utf8");
  console.log("linkedin-posts.json atualizado sem posts.");
}
