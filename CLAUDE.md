# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Ankush, deployed at [ankushg.vercel.app](https://ankushg.vercel.app). Monorepo with a React (Vite) frontend and an Express/MongoDB backend, deployed together on Vercel.

## Commands

### Client (from `client/`)
- `npm run dev` — Start Vite dev server
- `npm run build` — Production build (output: `client/dist/`)
- `npm run lint` — ESLint
- `npm run preview` — Preview production build locally

### Server (from `server/`)
- `npm start` — Start with Node
- `npm run server` — Start with nodemon (hot reload)
- `npm run data:import` — Seed database (`node seeder.js`)
- `npm run data:destroy` — Clear database (`node seeder.js -d`)

### No test suite exists yet. Server `npm test` is a placeholder.

## Architecture

**Monorepo structure** — two independent npm projects, no workspace config:
- `client/` — React 19 + Vite, Tailwind CSS, Framer Motion, React Router v7
- `server/` — Express 5 (CommonJS), Mongoose 9, connects to MongoDB via `MONGO_URI` env var

**Deployment** — `vercel.json` routes `/api/*` to the Express server and everything else to the static client build.

**Client routing:**
- `/` Home, `/about`, `/projects`, `/music`, `/contact`
- `Layout` wraps all routes with `Navbar` + `MobileActionBar`
- Pages compose standalone components from `src/components/`

**Server API routes** (all under `/api`):
- `/projects`, `/skills`, `/books`, `/playlists`, `/contact`
- Each route has a corresponding Mongoose model in `server/models/`

**DB connection** is non-blocking — the server continues without a DB if `MONGO_URI` is missing or connection fails.

## Key Details

- Client uses JSX (`.jsx` files), not TypeScript
- Client uses Tailwind v3 with PostCSS/Autoprefixer
- Server uses CommonJS (`require`), client uses ES modules
- No shared code between client and server
- Environment variable needed: `MONGO_URI` (server)
