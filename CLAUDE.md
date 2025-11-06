# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with **Astro.js** that documents the history of modern AI (2010-2024). The project uses a content-focused architecture with server-side rendering by default and minimal JavaScript shipped to the client. It features authentication via Clerk, Firebase integration, and supports multiple UI frameworks (React, Preact, Solid.js, Vue, Svelte).

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:4321

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro commands
npm run astro -- --help
```

## High-Level Architecture

### Core Technology Stack
- **Framework**: Astro.js (server-first, Islands Architecture)
- **Styling**: Tailwind CSS with `@tailwindcss/typography` plugin
- **Authentication**: Clerk (@clerk/astro)
- **Database**: Firebase
- **UI Frameworks**: React, Preact, Solid.js, Vue, Svelte (all integrated via @astrojs/* adapters)
- **Content**: Astro Content Collections (Markdown-based blog posts)

### Architecture Principles

1. **Islands Architecture**: By default, all Astro components render on the server with zero JavaScript. Client-side JavaScript is only shipped for interactive components that explicitly request hydration via `client:` directives (`client:load`, `client:idle`, `client:visible`, `client:media`).

2. **File-based Routing**: Pages are created by adding `.astro` files to `src/pages/`. For example:
   - `src/pages/index.astro` → `/`
   - `src/pages/blog/[slug].astro` → `/blog/*`

3. **Server-first Data Fetching**: Data is fetched in component frontmatter (the `---` code fences) using top-level `await`. This ensures data is fetched on the server during build or request time.

4. **Content Collections**: Blog posts are Markdown files defined in `src/content/config.ts` with schema validation via Zod. Each post has `title`, `pubDate`, and `description` fields.

## Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── auth/            # Clerk authentication components
│   ├── react/           # React interactive islands
│   ├── preact/          # Preact interactive islands
│   ├── solid/           # Solid.js interactive islands
│   ├── marketing/       # Marketing page components
│   └── *.astro          # Static Astro components
├── content/             # Content Collections
│   ├── blog/            # Blog post markdown files
│   └── config.ts        # Content schema definition
├── layouts/             # Page layouts
│   └── Layout.astro     # Main site layout
├── pages/               # Route pages
│   ├── index.astro      # Home page
│   └── blog/[slug].astro # Dynamic blog post pages
├── lib/                 # Utility functions
│   └── utils.js         # cva/clsx utilities
├── middleware.js        # Clerk auth middleware
└── styles/
    └── global.css       # Global styles with CSS variables
```

## Key Components

### Layout System
- `src/layouts/Layout.astro`: Main site layout with dark mode toggle logic, includes Header/Footer
- Theme persistence via `localStorage` with automatic dark mode detection
- Uses Tailwind CSS for styling with dark mode support

### Content Management
- Blog posts stored as Markdown in `src/content/blog/` (2010-2024 covering AI history)
- Content schema defined in `src/content/config.ts` with Zod validation
- Dynamic routes generated via `getStaticPaths()` in `src/pages/blog/[slug].astro`
- Sorted by publication date (newest first)

### Authentication
- Clerk integration configured in `src/middleware.js`
- Auth can be toggled via `PUBLIC_AUTH_ENABLED` environment variable
- Public routes: `/`, `/sign-in(.*)`, `/sign-up(.*)`
- All other routes protected when auth is enabled
- Authentication components in `src/components/auth/`

### Theme & Styling
- Tailwind CSS configuration in `tailwind.config.js`
- shadcn/ui components configured via `components.json`
- CSS variables defined for theme switching
- Typography plugin enabled for blog post styling

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# Clerk authentication (required if PUBLIC_AUTH_ENABLED=true)
PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Enable/disable authentication
PUBLIC_AUTH_ENABLED=false
```

## Development Workflow

### Adding a New Blog Post
1. Create a new Markdown file in `src/content/blog/` (e.g., `2025-new-post.md`)
2. Include frontmatter with required fields:
   ```yaml
   ---
   title: Your Post Title
   pubDate: 2025-01-01
   description: Brief description
   ---
   ```
3. Post will automatically appear on the home page and be accessible at `/blog/filename`

### Creating New Pages
1. Add `.astro` file to `src/pages/`
2. Import and use Layout component: `import Layout from '../layouts/Layout.astro';`
3. Export frontmatter for data fetching if needed

### Adding Interactive Components
1. Create component in appropriate framework folder (`components/react/`, `components/solid/`, etc.)
2. Import and use in Astro page with `client:` directive for hydration:
   ```astro
   <MyComponent client:visible />
   ```
3. Choose hydration strategy based on when component should become interactive:
   - `client:load`: Immediately on page load
   - `client:idle`: When browser is idle
   - `client:visible`: When component enters viewport
   - `client:media`: When media query matches

### Performance Best Practices
- Default to server-side rendering (no `client:` directive = no JavaScript)
- Only hydrate interactive components
- Use Content Collections for type-safe data access
- Leverage Astro's static generation for blog posts
- Keep interactive islands small and focused

## Integration Details

### Clerk Authentication
- Middleware auto-disabled when `PUBLIC_AUTH_ENABLED=false`
- When enabled, protects all routes except public ones
- Sign-in/up components in `src/components/auth/`

### Firebase
- Configured for data persistence
- Query integration via `@tanstack/react-query`
- Can be used for dynamic content beyond static blog posts

### UI Framework Components
Multiple UI frameworks are available:
- React: `.tsx` files in `components/react/`
- Preact: `.tsx` files in `components/preact/`
- Solid.js: `.tsx` files in `components/solid/`
- Vue: `.vue` files in `components/vue/` (if created)
- Svelte: `.svelte` files in `components/svelte/` (if created)

Choose the framework that best fits the component's complexity and interactivity needs.

## Type Safety

- TypeScript configuration in `tsconfig.json`
- Path aliases configured: `@/*` maps to `src/*`
- Content Collections provide type-safe data access
- Zod schema validation for content structure

## Build & Deployment

- Static site generation by default
- Can be deployed to any static host
- Firebase Hosting integration available
- Preview production build locally with `npm run preview`
