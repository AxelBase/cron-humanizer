// src/lib/utils/clipboard.ts
// Fixed: export the function so +page.svelte can import it

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}