# Abdullah Hamdy — Portfolio

Personal portfolio site for Abdullah Hamdy, Full-Stack .NET Developer. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Getting started

```bash
pnpm install
pnpm dev
```

Other scripts:

```bash
pnpm run build      # type-check and build for production into dist/
pnpm run preview    # preview the production build locally
pnpm run lint        # lint with oxlint
```

`npm`/`yarn` work too if you don't use pnpm — just swap the command prefix.

## Project structure

```
src/
  assets/        portrait photo and other images
  components/     reusable UI pieces (FadeIn, Magnet, AnimatedText, ContactButton, ProjectCard, ...)
  sections/       page sections (Hero, Marquee, About, Services, Projects, Contact, ...)
  data/           content as data — edit these to update text without touching components
    contact.ts    EMAIL_URL / GITHUB_URL / LINKEDIN_URL placeholders — fill in your real links
    projects.ts   the 3 featured projects
    services.ts   the 5 services list
    marquee.ts    the scrolling tech marquee tiles
    techStack.ts  the tech stack chips
```

## Replacing placeholder content

- **Contact links**: edit `src/data/contact.ts`.
- **Project screenshots**: each project's `images` entries in `src/data/projects.ts` render a
  generated placeholder (icon + label) until you add a `src` — drop a screenshot in
  `src/assets/projects/` and set `src: yourImage` on that image slot (import it at the top of the
  file, same as the hero portrait in `HeroSection.tsx`).
- **Marquee tiles**: `src/data/marquee.ts` currently renders icon-based placeholder tiles for each
  technology; swap in real screenshots/GIFs the same way once you have them.
- **Hero portrait**: `src/assets/portrait.jpg`, referenced from `src/sections/HeroSection.tsx`.

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages on every
push to `main`. In your repo settings, set **Settings → Pages → Source** to **GitHub Actions**.

`vite.config.ts` uses a relative `base: './'`, so the build works unmodified whether it's served
from a domain root or from a GitHub Pages project path (`https://<user>.github.io/<repo>/`).
