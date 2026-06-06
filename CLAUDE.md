# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start dev server (Vite)
npm run build  # Production build → dist/
```

No lint or test commands are configured.

## Architecture

Single-page React + TypeScript portfolio built with Vite. Three routes handled by React Router v7:

- `/` → `HomePage` — scrollable single-page layout with sections
- `/blog/:id` → `BlogDetailPage`
- `/works/:id` → `WorkDetailPage`

### Content management

All content is **static TypeScript arrays** — no CMS or database. To add works or blog posts, edit directly:

- `src/app/data/works.ts` — `WORKS: Work[]` array; lookup via `getWorkById(id)`
- `src/app/data/blog.ts` — `BLOG_POSTS: BlogPost[]` array with typed `BlogBlock` union for rich content; lookup via `getBlogPostById(id)`

### Asset import protocol

Images originally from Figma are imported with a custom `figma:asset/` protocol:

```ts
import img from 'figma:asset/296c9b495bf7cab2ed5022992851fdba490cd5e7.png';
```

The Vite plugin (`figma-asset-resolver` in `vite.config.ts`) resolves these to `src/assets/<filename>`. External images (Booth, Twitter, Unsplash) are referenced by URL directly in data files.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` — config is in CSS)
- CSS custom properties in `src/styles/theme.css` define the design token layer
- Brand color is `#0022ff` (cobalt blue) used throughout as inline styles and Tailwind arbitrary values
- Font is Ubuntu, applied via the `UB` constant pattern used in every component:
  ```ts
  const UB = { fontFamily: "'Ubuntu', sans-serif" } as const;
  ```
- Path alias: `@` → `src/`

### Component layers

- `src/app/components/ui/` — shadcn-style Radix UI primitives (generated, avoid modifying unless necessary)
- `src/app/components/` — portfolio-specific section components (`HeroSection`, `ProfileSection`, `WorksSection`, `BlogSection`, `SystemPortfolioSection`)
- `src/app/components/figma/` — `ImageWithFallback` utility for images that may 404

### Animations

Uses `motion` (the `motion/react` package, a Framer Motion distribution). The standard easing curve used site-wide:

```ts
const EASE = [0.22, 1, 0.36, 1] as const;
```

`NetworkCanvas` is a Canvas API animation (animated node-connection network) rendered in the hero section.

### Navigation pattern

`HomePage` passes a `scrollTo` callback (`element.scrollIntoView`) down to `HeroSection` and `StickyNav`. The sticky nav appears via `IntersectionObserver` once the hero scrolls out of view. Section IDs (`hero`, `profile`, `scenario`, `works`, `portfolio`, `blog`, `contact`) are the navigation targets.
