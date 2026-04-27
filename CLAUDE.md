# Game Hub

React 18 game discovery browser powered by the RAWG Video Games API, with infinite scroll, genre/platform filtering, and dark mode.

## Tech Stack
- React 18
- TypeScript
- Vite
- Chakra UI
- React Query (TanStack Query)
- RAWG Video Games API
- Vitest + React Testing Library (unit tests)

## Project Structure
```
game-hub/
├── .github/
│   └── workflows/ci.yml     # lint + type-check + test + build
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/            # RAWG API client
│   ├── test/setup.ts        # Vitest setup
│   └── App.tsx
├── vite.config.ts           # Vite + Vitest config
└── package.json
```

## Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run unit tests
npm run test
npm run test:watch
npm run test:coverage

# Lint and type-check
npm run lint
npm run type-check

# Build
npm run build
```

## Key Notes
- Requires a RAWG API key — copy `.env.example` to `.env` and set `VITE_RAWG_API_KEY`. The key was previously hardcoded in `src/services/api-client.ts` and is in git history; rotate the RAWG key.
- Uses React Query for data fetching and caching with infinite scroll pagination.
- `GameCard` is wrapped in `React.memo` and uses native lazy image loading.
- CI runs on every push and PR; coverage threshold is 70%.
