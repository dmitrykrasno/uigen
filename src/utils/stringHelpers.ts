/**
 * Returns the string with the first character uppercased and the rest lowercased.
 */
export function capitalize(value: string): string {
  if (value.length === 0) return value;
  return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

/**
 * Cuts the string to at most `maxLength` characters, appending `suffix` if truncated.
 */
export function truncate(
  value: string,
  maxLength: number,
  suffix = "…",
): string {
  if (value.length <= maxLength) return value;
  const end = Math.max(0, maxLength - suffix.length);
  return value.slice(0, end) + suffix;
}

/**
 * Converts a string to a URL-friendly slug: lowercased, runs of non-letters/numbers
 * become single hyphens, with no leading or trailing hyphens. The empty string maps
 * to the empty string; the function does not throw.
 */
export function slugify(value: string): string {
  if (value.length === 0) return "";
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}
