"use client";

import { ToolInvocation } from "ai";
import { Loader2 } from "lucide-react";

export function getToolLabel(
  toolName: string,
  args: Record<string, unknown>
): string {
  const path =
    typeof args.path === "string" && args.path ? ` ${args.path}` : "";

  if (toolName === "str_replace_editor") {
    switch (args.command) {
      case "create":
        return `Creating${path}`;
      case "str_replace":
        return `Editing${path}`;
      case "insert":
        return `Editing${path}`;
      case "view":
        return `Reading${path}`;
      case "undo_edit":
        return `Reverting${path}`;
    }
  }

  if (toolName === "file_manager") {
    switch (args.command) {
      case "rename":
        return `Renaming${path}`;
      case "delete":
        return `Deleting${path}`;
    }
  }

  return toolName.replace(/_/g, " ");
}

interface ToolInvocationBadgeProps {
  toolInvocation: ToolInvocation;
}

export function ToolInvocationBadge({
  toolInvocation,
}: ToolInvocationBadgeProps) {
  const args = ((toolInvocation.args ?? {}) as Record<string, unknown>);
  const label = getToolLabel(toolInvocation.toolName, args);
  const isDone =
    toolInvocation.state === "result" && toolInvocation.result != null;

  return (
    <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-neutral-50 rounded-lg text-xs font-mono border border-neutral-200">
      {isDone ? (
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
      ) : (
        <Loader2 className="w-3 h-3 animate-spin text-blue-600" />
      )}
      <span className="text-neutral-700">{label}</span>
    </div>
  );
}
