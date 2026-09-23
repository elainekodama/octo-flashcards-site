# OCTO Flashcards website

Static marketing site for the React Native OCTO Flashcards app. Hosted on GitHub Pages.

Live site: `https://www.octoflashcards.com/`

This is not a Next.js or React SPA. Vite builds ordinary HTML so store listings can link to stable privacy and terms URLs.

## Pages

| Path | Role |
| --- | --- |
| `/` | Product landing |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms and conditions |

## Local preview

```bash
npm install
npm run dev
```

`npm run dev` and production builds both serve at `/` for the custom domain.

## GitHub Pages

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Merge to `main`. The workflow in `.github/workflows/pages.yml` builds and deploys.

The custom domain is `www.octoflashcards.com` (`public/CNAME`). The Pages workflow sets `VITE_BASE=/` so images, CSS, and JS resolve at the domain root instead of `/octo-flashcards-site/`.

## Legal copy

Privacy and terms are templates for a personal study app. Read them before linking from a store listing.
