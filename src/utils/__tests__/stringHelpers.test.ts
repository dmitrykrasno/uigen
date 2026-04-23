import { test, expect } from "vitest";
import { capitalize, slugify, truncate } from "@/utils/stringHelpers";

test("capitalize handles empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalize lowercases rest of string", () => {
  expect(capitalize("hELLO")).toBe("Hello");
});

test("truncate leaves short string unchanged", () => {
  expect(truncate("hi", 10)).toBe("hi");
});

test("truncate appends suffix when needed", () => {
  expect(truncate("abcdef", 4, ".")).toBe("abc.");
});

test("slugify returns empty string for empty input without throwing", () => {
  expect(slugify("")).toBe("");
});

test("slugify lowercases and replaces spaces with hyphens", () => {
  expect(slugify("Hello World")).toBe("hello-world");
});

test("slugify collapses consecutive spaces to one hyphen", () => {
  expect(slugify("a   b")).toBe("a-b");
  expect(slugify("a -- b")).toBe("a-b");
});

test("slugify keeps numbers and separates with hyphens from words", () => {
  expect(slugify("item 2")).toBe("item-2");
});

test("slugify preserves unicode letters in slug", () => {
  expect(slugify("Café Münster")).toBe("café-münster");
});

test("slugify strips-only punctuation or whitespace to empty", () => {
  expect(slugify("!!!")).toBe("");
  expect(slugify("   ")).toBe("");
});

test("slugify normalizes already slug-like text", () => {
  expect(slugify("hello-world")).toBe("hello-world");
});
