---
marp: true
theme: default
paginate: true
style: |
  section {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: #f5ede0;
    color: #1a1a1a;
    padding: 40px 50px;
  }
  section.title {
    background: #1a1a1a;
    color: #f5ede0;
    text-align: center;
    justify-content: center;
  }
  section.title h1 { color: #e8914a; font-size: 2.4em; margin-bottom: 0.2em; }
  section.title p  { color: #aaa; font-size: 0.85em; }
  h1 { font-size: 1.5em; border-bottom: 3px solid #e8914a; padding-bottom: 8px; margin-bottom: 16px; color: #d4600a; text-transform: uppercase; }
  h2 { font-size: 1.1em; color: #555; text-transform: uppercase; letter-spacing: 0.5px; margin: 16px 0 6px; }
  code { background: #1a1a1a; color: #e8914a; padding: 1px 6px; border-radius: 3px; font-size: 0.88em; }
  pre { background: #1a1a1a; color: #c8e0c0; padding: 14px 18px; border-radius: 8px; font-size: 0.78em; line-height: 1.5; }
  ul { padding-left: 1.2em; }
  li { margin: 4px 0; line-height: 1.5; }
  table { width: 100%; border-collapse: collapse; font-size: 0.88em; }
  th { background: #e8d8c0; padding: 6px 10px; text-align: left; font-size: 0.8em; text-transform: uppercase; color: #555; }
  td { padding: 5px 10px; border-bottom: 1px solid #e0d4c0; vertical-align: top; }
  .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .columns3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
  .tip { background: #fef9e8; border-left: 4px solid #c49020; padding: 8px 14px; border-radius: 0 6px 6px 0; margin-top: 12px; font-size: 0.88em; color: #5a4000; }
  .badge { display: inline-block; background: #e8914a; color: #fff; border-radius: 50%; width: 26px; height: 26px; line-height: 26px; text-align: center; font-weight: 800; font-size: 0.85em; margin-right: 6px; }
  kbd { background: #2a2a2a; color: #f0e0c8; padding: 2px 8px; border-radius: 4px; font-family: monospace; font-size: 0.85em; font-weight: 600; border-bottom: 2px solid #444; }
  .tag-pre  { background: #fde8d0; color: #b04010; padding: 1px 7px; border-radius: 10px; font-size: 0.8em; font-weight: 700; }
  .tag-post { background: #d0e8fd; color: #1040b0; padding: 1px 7px; border-radius: 10px; font-size: 0.8em; font-weight: 700; }
---

<!-- _class: title -->

# ✦ Claude Code
## Cheat Sheet

**Course:** Claude Code in Action
**Instructor:** Stephen Grider · Anthropic

---

# <span class="badge">1</span> What is Claude Code?

Terminal-based AI coding assistant. Core strength: Claude excels at **tool use** — knowing which tool to call, when, and in clever combinations.

<svg viewBox="0 0 820 272" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-height:272px;margin:6px 0">
  <defs>
    <marker id="ah" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#888"/>
    </marker>
  </defs>
  <text x="91" y="16" text-anchor="middle" font-style="italic" font-size="13" font-family="Georgia,serif" fill="#666">Task</text>
  <rect x="10" y="22" width="162" height="108" rx="12" fill="white" stroke="#c8c0b0" stroke-width="1.5"/>
  <text x="91" y="50" text-anchor="middle" font-size="11" fill="#333">Got an error.</text>
  <text x="91" y="65" text-anchor="middle" font-size="11" fill="#333">Find and fix the issue.</text>
  <text x="91" y="80" text-anchor="middle" font-size="11" fill="#555">Here's the error:</text>
  <text x="91" y="98" text-anchor="middle" font-size="10" font-style="italic" fill="#777">Cannot read property</text>
  <text x="91" y="113" text-anchor="middle" font-size="10" font-style="italic" fill="#777">'records' of undefined</text>
  <line x1="172" y1="76" x2="208" y2="76" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <rect x="210" y="32" width="138" height="88" rx="12" fill="white" stroke="#c0604a" stroke-width="2.5"/>
  <text x="279" y="72" text-anchor="middle" font-weight="bold" font-size="14" fill="#1a1a1a">Language</text>
  <text x="279" y="90" text-anchor="middle" font-weight="bold" font-size="14" fill="#1a1a1a">Model</text>
  <rect x="210" y="162" width="138" height="68" rx="12" fill="white" stroke="#c4a830" stroke-width="2"/>
  <text x="279" y="193" text-anchor="middle" font-weight="bold" font-size="13" fill="#1a1a1a">Set of</text>
  <text x="279" y="210" text-anchor="middle" font-weight="bold" font-size="13" fill="#1a1a1a">tools</text>
  <line x1="284" y1="122" x2="284" y2="160" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <line x1="274" y1="160" x2="274" y2="122" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <rect x="392" y="4" width="420" height="264" rx="14" fill="none" stroke="#b8b0a0" stroke-width="1.5"/>
  <text x="602" y="2" text-anchor="middle" font-style="italic" font-size="14" font-family="Georgia,serif" fill="#666">Assistant</text>
  <rect x="432" y="22" width="198" height="50" rx="10" fill="#d8cfa0"/>
  <text x="531" y="52" text-anchor="middle" font-weight="bold" font-size="13" fill="#1a1a1a">Gather context</text>
  <rect x="432" y="108" width="198" height="50" rx="10" fill="#c09060"/>
  <text x="531" y="138" text-anchor="middle" font-weight="bold" font-size="13" fill="#1a1a1a">Formulate a plan</text>
  <rect x="432" y="194" width="198" height="50" rx="10" fill="#a04030"/>
  <text x="531" y="224" text-anchor="middle" font-weight="bold" font-size="13" fill="white">Take an action</text>
  <line x1="531" y1="72" x2="531" y2="106" stroke="#555" stroke-width="1.5" marker-end="url(#ah)"/>
  <line x1="531" y1="158" x2="531" y2="192" stroke="#555" stroke-width="1.5" marker-end="url(#ah)"/>
  <line x1="348" y1="64" x2="430" y2="44" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <line x1="348" y1="76" x2="430" y2="133" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <line x1="348" y1="88" x2="430" y2="219" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <path d="M 642 46 C 688 20, 688 252, 642 220" fill="none" stroke="#888" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="728" y="152" text-anchor="middle" font-style="italic" font-size="13" font-family="Georgia,serif" fill="#666">Iterate</text>
</svg>

- Claude (Opus / Sonnet / Haiku) especially strong at tool use — core advantage over other coding assistants
- Hosted at Anthropic, AWS Bedrock, or Google Cloud Vertex (configurable)

---

# <span class="badge">2</span> Installation

| Platform | Command |
|---|---|
| macOS (Homebrew) | `brew install --cask claude-code` |
| macOS / Linux / WSL | `curl -fsSL https://claude.ai/install.sh \| bash` |
| Windows CMD | `curl -fsSL https://claude.ai/install.cmd -o i.cmd && i.cmd` |

Run `claude` after install — first run prompts authentication.

## Add an MCP server
```
claude mcp add <name> <start-command>
```

<div class="tip">Full docs: code.claude.com/docs/en/quickstart · AWS Bedrock and Google Vertex AI have separate setup guides.</div>

---

# <span class="badge">3</span> Default Tools & Keyboard Shortcuts

<div class="columns">
<div>

## Default tools
- Read / Write files
- Edit / MultiEdit
- Bash commands
- Grep / Glob search
- Web fetch
- TodoWrite (task tracking)
- Computer use

> Ask Claude: *"list all tool names you have"* — also shows MCP tools.

</div>
<div>

## Keyboard shortcuts

| Key | Action |
|---|---|
| <kbd>Esc</kbd> | Interrupt Claude |
| <kbd>Esc Esc</kbd> | Rewind conversation |
| <kbd>Ctrl+V</kbd> | Paste screenshot |
| <kbd>Shift Tab ×2</kbd> | Toggle Plan mode |
| <kbd>#</kbd> | Memory mode |
| <kbd>@</kbd> | Reference a file |

</div>
</div>

---

# <span class="badge">4</span> CLAUDE.md Context Files

Read on **every** request — persistent project context for Claude.

| Level | File | Shared? |
|---|---|---|
| Project | `CLAUDE.md` | ✅ commit to git |
| Local | `CLAUDE.local.md` | ❌ personal only |
| Global | `~/.claude/CLAUDE.md` | ❌ all projects |

## Generate with /init
Run `/init` in a new project → Claude reads whole codebase → auto-generates `CLAUDE.md` with purpose, architecture, key commands, and critical files.

<kbd>Enter</kbd> accept once · <kbd>Shift Tab</kbd> auto-accept all file writes

<div class="tip">Commit CLAUDE.md so the whole team benefits from the shared context.</div>

---

# <span class="badge">5</span> Context: `#` Memory & `@` File References

<div class="columns">
<div>

## `#` — Memory mode
Type `#` in the prompt → write an instruction → pick which `CLAUDE.md` to update. Claude merges intelligently.

**Use cases:**
- Fix repeated mistakes permanently
- Tune Claude's style for your project
- Combine with <kbd>Esc</kbd> to catch errors fast and add fixes on the spot

</div>
<div>

## `@` — File reference
Mention a file in your prompt or in `CLAUDE.md` → its contents are auto-included in every request.

**Examples:**
- In prompt: `@src/schema.prisma`
- In `CLAUDE.md`: pin your DB schema so Claude always knows the data model without re-reading

</div>
</div>

---

# <span class="badge">6</span> Slash Commands

| Command | Action |
|---|---|
| `/init` | Generate `CLAUDE.md` from codebase |
| `/compact` | Summarize conversation — keeps learned knowledge |
| `/clear` | Wipe conversation — fresh start |
| `/hooks` | Manage hooks interactively |
| `/install-github-app` | Set up GitHub integration |
| `/<name>` | Run a custom command |

<div class="tip">

**Rule of thumb:** `/compact` before switching to a new task (preserves what Claude learned) · `/clear` when starting something completely unrelated.

</div>

---

# <span class="badge">7</span> Making Changes — Boosting Intelligence

<div class="columns">
<div>

## Plan mode <kbd>Shift Tab ×2</kbd>
- Claude reads more files, creates a detailed plan
- Shows exactly what it will do **before** writing any code
- You can redirect if it missed something
- Best for: multi-step tasks, wide codebase changes (**breadth**)

</div>
<div>

## Extended thinking
- Trigger phrases set the token budget
- `"think about…"` → larger budget
- `"ultra-think about…"` → largest budget
- Best for: tricky logic, hard bugs (**depth**)
- Use **Plan + Think** together for complex tasks

</div>
</div>

<div class="tip">

<kbd>Ctrl+V</kbd> paste a screenshot to show Claude exactly what to change · Ask Claude to commit — it writes a descriptive commit message automatically.

</div>

---

# <span class="badge">8</span> Controlling Context

<div class="columns">
<div>

## Interrupt & correct
1. Hit <kbd>Esc</kbd> to stop Claude mid-task
2. Use `#` to add a memory fixing the mistake
3. Error won't repeat

**Example:** Claude keeps reading a config file that doesn't exist → Esc → `#` → add note with correct filename → done.

</div>
<div>

## Rewind conversation <kbd>Esc Esc</kbd>
- Shows list of all sent messages
- Pick any earlier point to branch from
- Drops irrelevant debug noise
- Keeps context Claude already learned about files

**Example:** Change "write test for `create_session`" → "write test for `get_session`" without losing earlier file reads.

</div>
</div>

<div class="tip">Too much irrelevant context → lower quality. Provide just enough.</div>

---

# <span class="badge">9</span> Custom Commands

Automate repetitive tasks as your own `/commands`.

## Create a command
1. Create `.claude/commands/` in your project
2. Add a markdown file — e.g. `audit.md` — with the prompt/instructions
3. Restart Claude Code
4. Run with `/audit`

## Commands with arguments
Use `$ARGUMENTS` placeholder in the file:
```
/write-test src/auth/auth.ts
```
The path (or any string) is substituted at `$ARGUMENTS`.

<div class="tip">Example commands: /audit (dep vulnerabilities + tests) · /write-test (generate tests) · /security-review</div>

---

# <span class="badge">10</span> MCP Servers

Extend Claude Code with new tools. Servers run locally or remotely.

<div class="columns">
<div>

## Install
```bash
claude mcp add playwright \
  npx @playwright/mcp@latest
```

## Popular servers
- **Playwright** — control a browser
- **GitHub** — PRs, issues
- **Linear** — project management
- **Filesystem** — extended file ops

</div>
<div>

## Skip permission pop-ups
In `.claude/settings.local.json` → `allow` array:
```json
"mcp__playwright"
```
*(double underscore)*

## GitHub Actions caveat
Must list **every individual tool name** — no wildcards or group permissions allowed.

</div>
</div>

---

# <span class="badge">11</span> GitHub Integration

Run `/install-github-app` → follow wizard → two GitHub Actions are created automatically:

| Action | Trigger | What it does |
|---|---|---|
| **PR review** | Every pull request | Reviews proposed changes, flags issues |
| **Mention** | `@Claude` in issue/PR | Executes any task you describe |

## Customizing actions
Edit the generated YAML to:
- Add MCP servers (e.g. Playwright for browser testing)
- Start the dev server before Claude runs
- Add extra instructions specific to your repo

<div class="tip">Example win: catches PII exposure in Terraform/S3 configs, traces exact data flow — caught at PR time, not after deploy.</div>

---

# <span class="badge">12</span> Hooks — All Types

Shell commands that run at specific lifecycle points. Each receives JSON on **stdin**.

| Hook | Category | When it fires |
|---|---|---|
| <span class="tag-pre">Pre</span> `PreToolUse` | Tool | Before tool runs — can **block** (exit 2) |
| <span class="tag-post">Post</span> `PostToolUse` | Tool | After tool runs — provide feedback |
| `SessionStart` | Session | Session begins or resumes |
| `SessionEnd` | Session | Session ends |
| `UserPromptSubmit` | Session | Before Claude processes prompt |
| `PreCompact` | Session | Before /compact runs |
| `Stop` | Agent | Claude finishes responding |
| `SubagentStop` | Agent | A subagent (Task) finishes |
| `Notification` | Agent | Permission needed or idle 60 s |

<div class="tip">Debug: PostToolUse matcher `"*"` + command `jq . > post-log.json` → inspect exact stdin for any tool.</div>

---

# <span class="badge">13</span> Hook Config & Exit Codes

<div class="columns">
<div>

## settings.local.json
```json
{
  "PreToolUse": [{
    "matcher": "Read|Grep",
    "hooks": [{ "type": "command",
      "command": "node ./hooks/env_guard.js" }]
  }],
  "PostToolUse": [{
    "matcher": "Write|Edit|MultiEdit",
    "hooks": [{ "type": "command",
      "command": "node ./hooks/tsc.js" }]
  }]
}
```

</div>
<div>

## Stdin JSON (PreToolUse)
```json
{
  "hook_event_name": "PreToolUse",
  "tool_name": "Read",
  "tool_input": {
    "file_path": "/path/.env"
  }
}
```

## Exit codes
| Code | Meaning |
|---|---|
| `0` | Allow the tool call |
| `2` | Block (Pre only) + stderr → feedback to Claude |

Use `console.error()` not `console.log()` — stderr is what Claude sees.

</div>
</div>

---

# <span class="badge">14</span> Hook Example: .env Guard

**Goal:** Block Claude from ever reading the `.env` file.

```javascript
// hooks/env_guard.js  —  PreToolUse, matcher: "Read|Grep"

import { createInterface } from 'readline';

let raw = '';
const rl = createInterface({ input: process.stdin });
rl.on('line', l => raw += l);
rl.on('close', () => {
  const data = JSON.parse(raw);
  const path = data.tool_input?.file_path || data.tool_input?.path || '';

  if (path.includes('.env')) {
    console.error('You cannot read the .env file.');
    process.exit(2);   // blocks the read + sends error to Claude
  }
  process.exit(0);     // allow everything else
});
```

<div class="tip">Works for both Read and Grep tools — Claude can still know .env exists, it just can't see the contents.</div>

---

# <span class="badge">15</span> Hook Example: TypeScript Type Checker

**Goal:** Auto-fix type errors Claude introduces when editing files.

```javascript
// hooks/tsc.js  —  PostToolUse, matcher: "Write|Edit|MultiEdit"

import { execSync } from 'child_process';

try {
  execSync('tsc --noEmit', { stdio: 'pipe' });
  process.exit(0);   // no errors — all good
} catch (err) {
  // type errors found — send them back to Claude as feedback
  console.error(err.stdout.toString());
  process.exit(2);   // Claude reads the errors and fixes call sites
}
```

**Result:** Claude updates a function signature → hook fires → type errors found across other files → Claude fixes them automatically.

<div class="tip">For untyped languages: run your test suite instead of tsc. Same pattern, same exit codes.</div>

---

# <span class="badge">16</span> Hook Example: Duplicate Query Detector

**Goal:** Prevent Claude from writing new SQL queries when one already exists.

```javascript
// hooks/query_hook.js  —  PostToolUse, matcher targets src/queries/ edits

import { query } from '@anthropic-ai/claude-code';

// Launch a separate Claude Code instance to review the change
const result = await query({
  prompt: `A new query was just written. 
           Review src/queries/ and tell me if a similar query already exists.
           If yes, describe the existing one.`,
});

if (result.hasDuplicate) {
  console.error(`Duplicate found: ${result.message}`);
  process.exit(2);  // Claude rewrites using existing query instead
}
process.exit(0);
```

<div class="tip">Only watch a handful of critical directories — every match costs extra time and tokens.</div>

---

# <span class="badge">17</span> Claude Code SDK

Use Claude Code programmatically — same tools and capabilities as the terminal.

<div class="columns">
<div>

## TypeScript
```typescript
import { query } from '@anthropic-ai/claude-code';

const result = await query({
  prompt: 'Review src/queries for duplicates',
  options: {
    allowTools: ['Edit'],  // default: read-only
  }
});
// result = full message conversation
```

## CLI
```bash
claude --print "your task here"
```

</div>
<div>

## SDK options
- **TypeScript:** `@anthropic-ai/claude-code`
- **Python:** `anthropic-claude-code`
- **CLI:** `claude --print`

## Permissions
- Default: **read-only** (Read, Grep, Glob)
- Add write: `allowTools: ['Edit']`
- Or configure in `.claude/settings.json`

## Best for
- Hooks needing AI reasoning
- Scripts and automation pipelines
- Custom helper tools

</div>
</div>

---

# <span class="badge">18</span> Settings Files & Pro Tips

<div class="columns">
<div>

## Settings file locations

| Scope | Path |
|---|---|
| Global | `~/.claude/settings.json` |
| Project (shared) | `.claude/settings.json` |
| Project (personal) | `.claude/settings.local.json` |

**Absolute paths required** for hook scripts (security). Use `$PWD` placeholder in `settings.example.json` and replace at setup time.

</div>
<div>

## Pro tips
- `/init` in every new project
- Commit `CLAUDE.md` — team shares context
- Pin critical files (schema, API) with `@` in CLAUDE.md
- `/compact` between tasks · `/clear` for new topic
- <kbd>Ctrl+V</kbd> screenshots for UI work
- Plan mode for multi-step/risky changes
- `"ultra-think about…"` for hard logic
- TypeScript: PostToolUse → `tsc --noEmit`
- Any language: PostToolUse → run tests
- Only watch key dirs in hooks (cost control)
- Stay current: **code.claude.com**

</div>
</div>

---

<!-- _class: title -->

# Thanks!

**Keep up with Claude Code changes at**
## code.claude.com

*Experiment · Automate · Extend*
