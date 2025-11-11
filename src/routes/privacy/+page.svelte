<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy • AxelBase</title>
  <meta name="description" content="AxelBase collects zero data. All tools run 100% client-side — no tracking, no cookies, no servers. Your input never leaves your browser." />
  <link rel="canonical" href="{base}/privacy" />
  <meta property="og:title" content="Privacy Policy • AxelBase" />
  <meta property="og:description" content="AxelBase collects zero data. All tools run 100% client-side — no tracking, no cookies, no servers. Your input never leaves your browser." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MrAAndersen123" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy",
      "url": "{base}/privacy",
      "description": "AxelBase collects zero data. All tools run 100% client-side — no tracking, no cookies, no servers. Your input never leaves your browser.",
      "publisher": {
        "@type": "Organization",
        "name": "AxelBase"
      }
    }
  </script>
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective: 12 November 2025 • AxelBase</p>

    <h2>1. Zero Data Collection</h2>
    <p><strong>AxelBase does not collect, store, or process any user data.</strong> Every tool — including the Cron Humanizer — runs entirely in your browser. Your cron expressions, inputs, and outputs never leave your device.</p>

    <h2>2. What We Do Not Track</h2>
    <ul>
      <li><strong>No IP logging</strong> — We do not record your IP address.</li>
      <li><strong>No analytics</strong> — No Google Analytics, Plausible, or tracking pixels.</li>
      <li><strong>No cookies</strong> — No session, preference, or functional cookies.</li>
      <li><strong>No localStorage persistence</strong> — Input is cleared on reload.</li>
      <li><strong>No server logs</strong> — Hosted on GitHub Pages with no backend.</li>
    </ul>

    <h2>3. How Our Tools Work</h2>
    <p>All processing happens <strong>client-side</strong> using JavaScript:</p>
    <ul>
      <li>Cron parsing via <code>cron-parser</code></li>
      <li>Humanization with custom logic</li>
      <li>Next-run calculation using browser time APIs</li>
      <li>Copy/share features use native browser functions</li>
    </ul>
    <p><em>Your data is processed locally and discarded immediately.</em></p>

    <h2>4. Third-Party Dependencies</h2>
    <p>We use minimal, privacy-safe CDNs:</p>
    <ul>
      <li>Bootstrap 5 CSS (jsDelivr)</li>
      <li>date-fns (jsDelivr)</li>
    </ul>
    <p>These load static assets only. No tracking scripts are included.</p>

    <h2>5. Security & Responsibility</h2>
    <p>Since no data is transmitted, <strong>data breaches are impossible</strong>. You control your environment. We recommend:</p>
    <ul>
      <li>Using HTTPS (enforced)</li>
      <li>Keeping your browser updated</li>
      <li>Avoiding public networks for sensitive inputs</li>
    </ul>

    <h2>6. Compliance</h2>
    <p>By collecting nothing, we comply with <strong>GDPR, CCPA, POPIA</strong>, and all global privacy laws by default.</p>

    <h2>7. Changes</h2>
    <p>Updates will appear here with the new effective date.</p>

    <p class="italic-note">
      <strong>Your privacy is not a feature — it’s the foundation.</strong><br />
      Use AxelBase with complete confidence.
    </p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 0 4rem; }
  .breadcrumbs { display: flex; gap: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem; }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>