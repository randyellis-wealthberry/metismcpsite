# Project Context

## Purpose
This is a Metis MCP (Model Context Protocol) website built with the T3 Stack. The project demonstrates end-to-end type-safe API development using tRPC for seamless client-server communication.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.8
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.0
- **API Layer**: tRPC 11 (end-to-end type-safe APIs)
- **State Management**: TanStack React Query 5.69 (via tRPC)
- **Validation**: Zod 3.24
- **Serialization**: SuperJSON 2.2 (handles Date, Map, Set, BigInt, etc.)
- **Environment Variables**: @t3-oss/env-nextjs 0.12
- **Code Quality**: ESLint 9, Prettier 3.5, TypeScript ESLint 8
- **Package Manager**: npm 9.8.1

## Project Conventions

### Code Style
- **Path Alias**: Use `~/` for imports from `src/` directory
- **Formatting**: Prettier with Tailwind CSS plugin
  - Check: `npm run format:check`
  - Auto-fix: `npm run format:write`
- **Linting**: ESLint with Next.js config
  - Check: `npm run lint`
  - Auto-fix: `npm run lint:fix`
- **Type Checking**: Strict TypeScript mode
  - Check: `npm run typecheck`
  - Combined check: `npm run check` (runs both lint and typecheck)

### Naming Conventions
- Use descriptive names for tRPC routers (e.g., `post.ts`, `user.ts`)
- Client components: Include `"use client"` directive at the top
- Server-only code: Import `"server-only"` package
- Router inputs/outputs: Use `RouterInputs` and `RouterOutputs` types for type inference

### Architecture Patterns

#### tRPC Setup (Dual API Pattern)
The project uses two distinct ways to call tRPC procedures:

1. **Client Components** (`~/trpc/react`):
   - Use the `api` export for React Query hooks
   - Example: `api.post.getLatest.useQuery()`
   - Wrapped by `TRPCReactProvider` in `src/app/layout.tsx:30-39`

2. **Server Components** (`~/trpc/server`):
   - Use the `api` export for direct server calls
   - Example: `await api.post.getLatest()`
   - Returns promises, not hooks
   - Uses React Server Components hydration helpers

#### tRPC Router Structure
- **Core Setup** (`src/server/api/trpc.ts:1-50`):
  - `createTRPCContext`: Define request context (headers, DB, auth, etc.)
  - `publicProcedure`: Base procedure for creating queries/mutations
  - `timingMiddleware`: Adds artificial delay in development to catch waterfalls

- **Main Router** (`src/server/api/root.ts:1-15`):
  - `appRouter` where all sub-routers are registered
  - All routers from `src/server/api/routers/` must be manually added here

- **Feature Routers** (`src/server/api/routers/`):
  - Use `createTRPCRouter` and `publicProcedure` from `~/server/api/trpc`
  - Input validation with Zod schemas
  - Use `.query()` for reads, `.mutation()` for writes

#### Environment Variables
Environment variables are validated at build time using `@t3-oss/env-nextjs` in `src/env.js:1-50`:
- Server variables: Add to `server` object
- Client variables: Add to `client` object (must prefix with `NEXT_PUBLIC_`)
- Always add to `runtimeEnv` object for Next.js edge runtime compatibility
- Set `SKIP_ENV_VALIDATION=1` to skip validation (useful for Docker builds)

#### Data Layer
- Currently uses in-memory mocked data (`src/server/api/routers/post.ts:1-30`)
- To add a database: T3 Stack supports Prisma or Drizzle ORM
- Add database client to `createTRPCContext` in `src/server/api/trpc.ts:25-28`
- Access via `ctx.db` in procedures

#### Type Safety
- `RouterInputs` and `RouterOutputs` types from `~/trpc/react` provide type inference
- SuperJSON transformer handles complex type serialization
- Zod schemas provide runtime validation and type inference
- End-to-end type safety from client to server

### Testing Strategy
Currently no testing framework configured. Future considerations:
- Consider Vitest for unit tests
- Consider Playwright for E2E tests
- Consider React Testing Library for component tests

### Git Workflow
- **Main Branch**: `main`
- **Commit Convention**: Standard descriptive commits
- **Pre-commit**: No pre-commit hooks currently configured
- **CI/CD**: Not currently configured

## Domain Context
This is a T3 Stack demonstration project showcasing best practices for:
- Type-safe API development with tRPC
- Modern React development with App Router
- Full-stack TypeScript development
- Environment variable validation
- Code quality tooling

The "T3 Stack" refers to a typesafe, full-stack web development stack created by Theo (t3.gg) focusing on simplicity, modularity, and type safety.

## Important Constraints
- **Type Safety**: All API calls must be type-safe via tRPC
- **Environment Variables**: Must be declared in `src/env.js` before use
- **Server/Client Separation**: Maintain clear boundaries between server and client code
- **Next.js App Router**: Use App Router patterns (not Pages Router)
- **React Server Components**: Leverage RSC for server-side rendering where appropriate

## External Dependencies
Currently no external APIs or services configured. The project uses:
- In-memory mocked data for demonstration purposes
- No database connection (ready to add Prisma or Drizzle)
- No authentication service (ready to add NextAuth.js or similar)
- No external API integrations
