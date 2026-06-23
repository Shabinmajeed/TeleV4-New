# TeleV4 — Telehealth Marketplace Platform

Monorepo containing:
- `mobile/` — Expo (React Native) app with TypeScript + Expo Router
- `backend/` — NestJS API with Prisma ORM + Supabase

## Quick Start

See [README.md](README.md) for full setup instructions.

## Project Structure

```
TeleV4/
├── mobile/          # Expo app (TypeScript, Expo Router)
├── backend/         # NestJS API (TypeScript, Prisma, Supabase)
├── docker-compose.yml
├── .eslintrc.js
├── .prettierrc
├── .gitignore
└── README.md
```

## Branch Strategy

- `main` — Production-ready code
- `develop` — Integration branch for features
- `feature/*` — Individual feature branches (branch off `develop`)
