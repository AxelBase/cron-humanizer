// src/lib/utils/url-sync.ts

export function getCronFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get('cron');
}

export function setCronInUrl(cron: string): void {
  const url = new URL(window.location.href);
  url.searchParams.set('cron', cron);
  history.replaceState({}, '', url.toString());
}