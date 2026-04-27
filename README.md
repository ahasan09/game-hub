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
- React Icons
- Framer Motion
- React Infinite Scroll Component

## Prerequisites

- [Node.js](https://nodejs.org/) v16+

## Getting Started

```bash
git clone https://github.com/ahasan09/game-hub
cd game-hub
npm install
```

### Configure the API key

Get a free API key from [RAWG.io](https://rawg.io/apidocs) and add it to your environment:

Create a `.env` file in the project root:

```
VITE_API_KEY=your_rawg_api_key_here
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

## Project Structure

```
src/
├── components/   # UI components (GameCard, GenreList, etc.)
├── hooks/        # Custom React Query hooks
├── services/     # Axios API client
└── pages/        # Page-level components
```
