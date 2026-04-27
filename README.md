# Game Hub

A React + TypeScript application for discovering and browsing video games. Built with Vite and powered by the RAWG Video Games API.

## Features

- Browse a large catalog of video games
- Filter by genre, platform, and sort order
- Search games by name
- Infinite scroll for seamless browsing
- Dark/light mode toggle
- Responsive layout with Chakra UI

## Tech Stack

- React 18
- TypeScript
- Vite
- Chakra UI
- TanStack Query (React Query) — data fetching and caching
- Axios — HTTP client
- Framer Motion, React Icons, React Infinite Scroll Component
- Vitest + React Testing Library — unit tests

## Prerequisites

- [Node.js](https://nodejs.org/) v22+

## Getting Started

```bash
git clone https://github.com/ahasan09/game-hub
cd game-hub
npm install
```

### Configure the API key

Get a free API key from [RAWG.io](https://rawg.io/apidocs).

Copy the example file and fill in your key:

```bash
cp .env.example .env
```

Then edit `.env`:

```
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

### Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (HMR enabled) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run test` | Run unit tests once |
| `npm run test:watch` | Run unit tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report (≥70% threshold) |
| `npm run lint` | Lint TypeScript / TSX files |
| `npm run type-check` | Run TypeScript without emitting |

## Project Structure

```
src/
├── components/     # UI components (GameCard, GenreList, etc.)
├── hooks/          # Custom React Query hooks
├── services/       # Axios API client
├── interfaces/     # Shared TypeScript interfaces
└── test/setup.ts   # Vitest test setup
```

## Continuous Integration

GitHub Actions runs lint, type-check, tests, and build on every push and PR (`.github/workflows/ci.yml`). Dependabot opens weekly PRs for npm and monthly PRs for GitHub Actions (`.github/dependabot.yml`).

The `VITE_RAWG_API_KEY` secret must be set in the repository's Actions secrets for the build step to succeed in CI.
