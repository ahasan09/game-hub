# Improvement Plan: game-hub

## Overview
Modern React 18 + TypeScript + Vite app using RAWG API. Good tech stack. Improvements focus on test coverage, state management, performance, and production-readiness.

## Improvements

### Testing (High Priority)
- Add Vitest + React Testing Library unit tests for components (GameCard, GenreList, PlatformSelector, etc.)
- Add tests for custom hooks (data fetching hooks using `msw` for API mocking)
- Add Playwright e2e tests for the main browse and filter flow
- Set up a coverage threshold (≥70%)

### State Management
- Consider migrating from React Query + prop drilling to Zustand for global filter state (selected genre, platform, search query, sort order) — reduces prop drilling through multiple levels

### Performance
- Add image lazy loading with a blur placeholder for game cover images
- Add `React.memo` to `GameCard` to prevent unnecessary re-renders when filters change
- Add route-based code splitting with `React.lazy`

### Security
- Ensure `VITE_RAWG_API_KEY` is never committed — add `.env` to `.gitignore` and add a `.env.example` file

### Features
- Add a game detail page with screenshots, description, ratings, and system requirements
- Add a wishlist feature with localStorage persistence
- Add dark/light mode toggle persisted to localStorage
- Add search history (recent searches)

### DevOps
- Add GitHub Actions CI: lint + type-check + test + build
- Configure Dependabot for automated dependency updates (currently disabled)
- Add Vercel or Netlify deployment config
