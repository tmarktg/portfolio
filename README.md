# Mark Truong — Portfolio

Personal portfolio site for Mark Truong, a full-stack / DevOps software engineer based in San Diego, CA. Live at [marktruong.com](https://marktruong.com).

A single-page site (Projects, About, Interests, Contact) plus a `/resume` page generated from a single JSON Resume file, deployed as a fully static export to GitHub Pages.

## Tech stack

- **Next.js** (App Router) with `output: 'export'` static export
- **Tailwind CSS v4**
- **TypeScript**
- Self-hosted fonts via `next/font` (Space Grotesk + JetBrains Mono)
- **`data/resume.json`** ([JSON Resume](https://jsonresume.org/schema) schema, validated at build time with `ajv`) as the single source of truth for the `/resume` page and the generated `resume.txt`
- No CMS, no database, no analytics, no third-party trackers

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Runs schema validation, regenerates `public/resume.txt`, then builds the static export to `out/`.

## Deployment

Pushing to `main` builds and deploys automatically via `.github/workflows/deploy.yml` to GitHub Pages, served at the custom domain configured in `public/CNAME`.
