# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Turbopack) at http://localhost:3000
npm run test         # Run all Vitest tests
npx vitest run src/lib/__tests__/file-system.test.ts  # Run a single test file
npm run lint         # ESLint
npm run setup        # Install deps + generate Prisma client + run migrations
npm run db:reset     # Force reset SQLite database
```

All `dev`/`build`/`start` scripts prepend `NODE_OPTIONS='--require ./node-compat.cjs'` — this is required to shim `localStorage`/`sessionStorage` globals for Node 25+ SSR compatibility.

## Environment

Copy `.env` and set `ANTHROPIC_API_KEY` to use real Claude generation. Without it, the app falls back to `MockLanguageModel` (returns static Counter/ContactForm/Card components).

## Architecture

UIGen is a full-stack AI-powered React component generator. The user describes a component in a chat interface; Claude generates files into a virtual in-memory file system; the result renders live in an iframe.

### Request flow

1. User message → `ChatContext` → `POST /api/chat`
2. `/api/chat` builds a system prompt (with prompt caching) and calls `streamText()` from the Vercel AI SDK in an agentic loop (up to 40 steps)
3. Claude calls tools (`str_replace_editor`, `file_manager`) to create/modify files
4. Tool results update `VirtualFileSystem` (in-memory tree, never touches disk)
5. Stream is returned as a data stream response; `FileSystemContext` applies tool results client-side
6. If authenticated and a `projectId` exists, final messages + serialized FS are persisted to SQLite via Prisma

### Key layers

| Layer | Location | Notes |
|---|---|---|
| AI route | `src/app/api/chat/route.ts` | Agentic loop, tool definitions, prompt caching |
| Tools | `src/lib/tools/` | `str_replace_editor` (create/view/edit files), `file_manager` (rename/delete) |
| Virtual FS | `src/lib/file-system.ts` | `VirtualFileSystem` class — serializable in-memory tree |
| Model provider | `src/lib/provider.ts` | Returns real Anthropic `claude-haiku-4-5` or `MockLanguageModel` |
| System prompt | `src/lib/prompts/generation.tsx` | Instructs Claude to use `/App.jsx` as entry, Tailwind for styling, `@/` import alias |
| Auth | `src/lib/auth.ts` + `src/actions/index.ts` | JWT in httpOnly cookie via `jose`; bcrypt passwords |
| Middleware | `src/middleware.ts` | Protects `/api/projects`, `/api/filesystem` routes |
| Preview | `src/components/preview/PreviewFrame.tsx` | Renders generated files in an iframe; Babel (`@babel/standalone`) transforms JSX at runtime |
| Database | `prisma/schema.prisma` | Two models: `User` and `Project`; SQLite at `prisma/dev.db`; client generated into `src/generated/prisma` |

### State management

- **`ChatContext`** (`src/lib/contexts/ChatContext.tsx`) — owns message history and the `useChat` Vercel AI SDK hook
- **`FileSystemContext`** (`src/lib/contexts/FileSystemContext.tsx`) — owns the `VirtualFileSystem` instance and applies incoming tool call results from the AI stream

### Testing

Tests use Vitest + jsdom + `@testing-library/react`. Coverage spans `src/lib/`, `src/components/`, and `src/lib/contexts/`. The Vitest config is in `vitest.config.mts`.
