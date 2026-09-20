# Tadiran Telecom website

Production Next.js site for Tadiran Telecom. This repository previously held the Vite wireframe. The working tree is now the App Router build.

## Requirements

- Node.js 22.12 or newer
- [pnpm](https://pnpm.io)

## Local preview

```bash
pnpm install
pnpm dev
```

Open http://127.0.0.1:3000

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Local server on port 3000 |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm test` | Unit tests |
| `pnpm typecheck` | TypeScript check |
| `pnpm lint` | ESLint |

## Environment

Copy `.env.example` to `.env.local` and fill in values when they exist. Inquiry delivery, Turnstile, partner login, and search indexing stay off until those values are real.

## Notes

Media in `public/` is provisional pending usage-rights confirmation. Do not treat this preview as a live launch until legal, hosting, and service connections are approved.
