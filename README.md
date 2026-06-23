# TeleV4 — Telehealth Marketplace Platform

Monorepo containing:
- `mobile/` — Expo (React Native) app with TypeScript + Expo Router
- `backend/` — NestJS API with Prisma ORM + Supabase

## Prerequisites

- Node.js v22+
- npm v10+
- Docker & Docker Compose
- Supabase CLI (`npm install -g supabase`)

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Shabinmajeed/TeleV4-New.git TeleV4
cd TeleV4
```

### 2. Install dependencies

```bash
# Install root-level dev dependencies
npm install

# Install mobile dependencies
cd mobile && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### 3. Set up environment variables

```bash
# Backend
cp backend/.env.example backend/.env.local
# Edit backend/.env.local with your Supabase credentials

# Mobile
cp mobile/.env.example mobile/.env.local
# Edit mobile/.env.local with your API and Supabase URLs
```

### 4. Start local services

```bash
# Start Supabase + backend via Docker
docker compose up -d

# Or start Supabase locally with CLI
supabase start
```

### 5. Run database migrations

```bash
cd backend
npx prisma db push
npx prisma generate
cd ..
```

### 6. Start development servers

```bash
# Terminal 1: Backend
cd backend && npm run start:dev

# Terminal 2: Mobile
cd mobile && npm run start
```

## Project Structure

```
TeleV4/
├── mobile/                 # Expo app (TypeScript, Expo Router)
│   ├── app/               # File-based routing (Expo Router)
│   │   ├── _layout.tsx    # Root layout
│   │   ├── index.tsx      # Home screen
│   │   ├── (auth)/        # Auth group (login, register)
│   │   └── (tabs)/        # Main app tabs
│   ├── src/
│   │   ├── hooks/         # Custom React hooks
│   │   ├── stores/        # Zustand state stores
│   │   └── utils/         # Utilities (API client, Supabase)
│   └── package.json
├── backend/               # NestJS API (TypeScript, Prisma)
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── src/
│   │   ├── auth/          # Authentication module
│   │   ├── users/         # Users module
│   │   ├── health/        # Health check endpoint
│   │   ├── prisma/        # Prisma service
│   │   ├── config/        # Configuration & env validation
│   │   ├── app.module.ts  # Root module
│   │   └── main.ts        # Entry point
│   └── package.json
├── docker-compose.yml     # Local services (Supabase + backend)
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── commitlint.config.js   # Commit message linting
├── .husky/                # Git hooks
└── package.json           # Root workspace config
```

## Branch Strategy

- `main` — Production-ready code
- `develop` — Integration branch for features
- `feature/*` — Individual feature branches (branch off `develop`)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev:mobile` | Start Expo development server |
| `npm run dev:backend` | Start NestJS development server |
| `npm run lint` | Run ESLint on both projects |
| `npm run format` | Run Prettier on both projects |
| `npm run docker:up` | Start Docker services |
| `npm run docker:down` | Stop Docker services |

## Tech Stack

- **Mobile**: React Native, Expo SDK 56, Expo Router, Zustand, Supabase JS
- **Backend**: NestJS, Prisma ORM, Supabase (PostgreSQL), JWT Auth
- **Tooling**: TypeScript, ESLint, Prettier, Husky, commitlint
- **Infrastructure**: Docker Compose, Supabase CLI

## License

MIT
