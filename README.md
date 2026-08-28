# OCTO Flashcards website

Static marketing site for the React Native OCTO Flashcards app. Hosted on GitHub Pages.

Live URL after Pages is enabled: `https://elainekodama.github.io/octo-flashcards-site/`

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

`npm run dev` serves at `/` so you can open `http://localhost:5173/`. Production builds use the GitHub Pages base path `/octo-flashcards-site/`.

## GitHub Pages

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Merge to `main`. The workflow in `.github/workflows/pages.yml` builds and deploys.

Custom domain later: set `VITE_BASE=/` in the workflow `env` and add a `CNAME` in `public/`.

## Legal copy

Privacy and terms are templates for a personal study app. Read them before linking from a store listing.
