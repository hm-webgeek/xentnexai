# Deployment

## Overview

XentnexAI deploys automatically via git push. The hosting platform detects pushes to `main` and triggers a new build and deploy of the static site.

## Process

1. Ensure all changes are committed to the `main` branch.
2. Push to the remote:
   ```bash
   git push origin main
   ```
3. The platform pulls the latest code, runs `npm run build`, and publishes the `/out` directory.

## Build Command

```bash
npm run build
```

Produces a static export in `/out` via Next.js (`output: "export"`). Do not edit `/out` directly — it is overwritten on every build.

## Publishing Articles

Article files live in `content/articles/` as `.md` or `.mdx` files. Once an article is committed and pushed to `main`, it goes live automatically as part of the next deploy.

## Andy's Content Workflow

Andy publishes articles by pushing to the `andy` branch. A GitHub Actions workflow (`.github/workflows/auto-deploy-andy.yml`) automatically merges his changes into `main`, which triggers the platform deploy.

**Andy's workflow:**
1. Write the article as a `.md` file in `content/articles/`.
2. Commit and push to the `andy` branch:
   ```bash
   git push origin andy
   ```
3. GitHub Actions merges `andy` into `main` automatically.
4. The hosting platform detects the `main` push and deploys the site.

No manual intervention is required once Andy pushes.

## Notes

- Images must be placed in `public/` and referenced with a leading `/`.
- The site targets `https://xentnexai.com.au`.
- Do not push directly to `main` if a build-breaking change is suspected — verify with `npm run build` locally first.
