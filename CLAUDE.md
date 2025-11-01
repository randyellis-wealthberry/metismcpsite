<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a T3 Stack project (Next.js 15 with App Router + tRPC + TypeScript + Tailwind CSS). The project uses tRPC for end-to-end type-safe API calls between client and server components.

## Development Commands

```bash
npm run dev          # Start development server with Turbo
npm run build        # Build for production
npm run start        # Start production server
npm run check        # Run linting and type checking
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run typecheck    # Type check without building
npm run format:check # Check code formatting
npm run format:write # Auto-fix code formatting
npm run preview      # Build and start production server locally
```

## Architecture

### tRPC Setup

The project has two distinct ways to call tRPC procedures:

1. **Client Components** (`~/trpc/react`): Use the `api` export for React Query hooks
   - Example: `api.post.getLatest.useQuery()`
   - Wrapped by `TRPCReactProvider` in [src/app/layout.tsx](src/app/layout.tsx)

2. **Server Components** (`~/trpc/server`): Use the `api` export for direct server calls
   - Example: `await api.post.getLatest()`
   - Returns promises, not hooks
   - Uses React Server Components hydration helpers

### tRPC Router Structure

- [src/server/api/trpc.ts](src/server/api/trpc.ts): Core tRPC setup with context, middleware, and procedures
  - `createTRPCContext`: Define request context (headers, DB, auth, etc.)
  - `publicProcedure`: Base procedure for creating queries/mutations
  - `timingMiddleware`: Adds artificial delay in development to catch waterfalls

- [src/server/api/root.ts](src/server/api/root.ts): Main `appRouter` where all sub-routers are registered
  - All routers from `src/server/api/routers/` must be manually added here

- [src/server/api/routers/](src/server/api/routers/): Individual feature routers
  - Use `createTRPCRouter` and `publicProcedure` from `~/server/api/trpc`
  - Input validation with Zod schemas

### Environment Variables

Environment variables are validated at build time using `@t3-oss/env-nextjs` in [src/env.js](src/env.js):
- Server variables: Add to `server` object
- Client variables: Add to `client` object (must prefix with `NEXT_PUBLIC_`)
- Always add to `runtimeEnv` object for Next.js edge runtime compatibility
- Set `SKIP_ENV_VALIDATION=1` to skip validation (useful for Docker builds)

### Data Layer

Currently uses in-memory mocked data (see [src/server/api/routers/post.ts](src/server/api/routers/post.ts)). To add a database:
- T3 Stack supports Prisma or Drizzle ORM
- Add database client to `createTRPCContext` in [src/server/api/trpc.ts](src/server/api/trpc.ts:25-28)
- Access via `ctx.db` in procedures

### Type Safety

- `RouterInputs` and `RouterOutputs` types from `~/trpc/react` provide type inference for tRPC procedures
- SuperJSON transformer handles serialization of Date, Map, Set, BigInt, etc.
- Zod schemas provide runtime validation and type inference

## Key Conventions

- Use `~/` path alias for imports from `src/`
- Client components: `"use client"` directive at the top
- Server-only code: Import `"server-only"` package
- tRPC procedures: Use `.query()` for reads, `.mutation()` for writes
- Always validate inputs with Zod schemas in tRPC procedures
