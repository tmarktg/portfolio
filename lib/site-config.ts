import { existsSync } from "node:fs";
import path from "node:path";

// GitHub Pages deployment config.
//
// - User/org site (repo named "<username>.github.io"): basePath is "".
// - Project site (repo named e.g. "portfolio"): basePath is "/portfolio".
// - Custom domain (public/CNAME present): basePath is "" regardless of repo
//   name — GitHub Pages always serves a custom domain at its root, so a
//   project repo named "portfolio" with marktruong.com attached must NOT
//   get "/portfolio" prefixed onto every asset path, or the whole site
//   404s in production. The CNAME file's presence is the source of truth
//   for this, since it's the same artifact that actually causes the
//   behavior — no separate env var to remember to set.
//
// REPO_NAME is set automatically by .github/workflows/deploy.yml from
// github.event.repository.name, so this never needs manual editing once
// the repo exists. Locally (REPO_NAME unset) it resolves to "" (root).
const repoName = process.env.REPO_NAME ?? "";
const hasCustomDomain = existsSync(path.join(process.cwd(), "public", "CNAME"));
const isUserSite = repoName === "" || /\.github\.io$/i.test(repoName) || hasCustomDomain;

export const basePath = isUserSite ? "" : `/${repoName}`;

export const siteUrl = process.env.SITE_URL ?? "https://example.com";
