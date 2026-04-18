import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import {
  ToolInvocationBadge,
  getToolLabel,
} from "../ToolInvocationBadge";

afterEach(() => {
  cleanup();
});

// --- getToolLabel unit tests ---

test("getToolLabel: str_replace_editor create", () => {
  expect(getToolLabel("str_replace_editor", { command: "create", path: "/App.jsx" })).toBe("Creating /App.jsx");
});

test("getToolLabel: str_replace_editor str_replace", () => {
  expect(getToolLabel("str_replace_editor", { command: "str_replace", path: "/utils.ts" })).toBe("Editing /utils.ts");
});

test("getToolLabel: str_replace_editor insert", () => {
  expect(getToolLabel("str_replace_editor", { command: "insert", path: "/App.jsx" })).toBe("Editing /App.jsx");
});

test("getToolLabel: str_replace_editor view", () => {
  expect(getToolLabel("str_replace_editor", { command: "view", path: "/App.jsx" })).toBe("Reading /App.jsx");
});

test("getToolLabel: str_replace_editor undo_edit", () => {
  expect(getToolLabel("str_replace_editor", { command: "undo_edit", path: "/App.jsx" })).toBe("Reverting /App.jsx");
});

test("getToolLabel: file_manager rename", () => {
  expect(getToolLabel("file_manager", { command: "rename", path: "/old.jsx" })).toBe("Renaming /old.jsx");
});

test("getToolLabel: file_manager delete", () => {
  expect(getToolLabel("file_manager", { command: "delete", path: "/old.jsx" })).toBe("Deleting /old.jsx");
});

test("getToolLabel: unknown tool humanizes name", () => {
  expect(getToolLabel("some_unknown_tool", {})).toBe("some unknown tool");
});

test("getToolLabel: missing path omits path portion", () => {
  expect(getToolLabel("str_replace_editor", { command: "create" })).toBe("Creating");
});

test("getToolLabel: empty string path omits path portion", () => {
  expect(getToolLabel("str_replace_editor", { command: "create", path: "" })).toBe("Creating");
});

// --- ToolInvocationBadge render tests ---

test("ToolInvocationBadge shows label in loading state", () => {
  render(
    <ToolInvocationBadge
      toolInvocation={{
        toolCallId: "1",
        toolName: "str_replace_editor",
        args: { command: "create", path: "/App.jsx" },
        state: "call",
      }}
    />
  );

  expect(screen.getByText("Creating /App.jsx")).toBeDefined();
});

test("ToolInvocationBadge shows spinner when loading", () => {
  const { container } = render(
    <ToolInvocationBadge
      toolInvocation={{
        toolCallId: "1",
        toolName: "str_replace_editor",
        args: { command: "create", path: "/App.jsx" },
        state: "call",
      }}
    />
  );

  const spinner = container.querySelector(".animate-spin");
  expect(spinner).toBeDefined();

  const dot = container.querySelector(".bg-emerald-500");
  expect(dot).toBeNull();
});

test("ToolInvocationBadge shows green dot when result received", () => {
  const { container } = render(
    <ToolInvocationBadge
      toolInvocation={{
        toolCallId: "1",
        toolName: "str_replace_editor",
        args: { command: "create", path: "/App.jsx" },
        state: "result",
        result: "ok",
      }}
    />
  );

  const dot = container.querySelector(".bg-emerald-500");
  expect(dot).toBeDefined();

  const spinner = container.querySelector(".animate-spin");
  expect(spinner).toBeNull();
});

test("ToolInvocationBadge shows label in result state", () => {
  render(
    <ToolInvocationBadge
      toolInvocation={{
        toolCallId: "1",
        toolName: "file_manager",
        args: { command: "delete", path: "/old.jsx" },
        state: "result",
        result: { success: true },
      }}
    />
  );

  expect(screen.getByText("Deleting /old.jsx")).toBeDefined();
});

test("ToolInvocationBadge falls back to humanized name for unknown tool", () => {
  render(
    <ToolInvocationBadge
      toolInvocation={{
        toolCallId: "1",
        toolName: "some_tool",
        args: {},
        state: "call",
      }}
    />
  );

  expect(screen.getByText("some tool")).toBeDefined();
});
