const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "/MIND";

export function apiPath(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
