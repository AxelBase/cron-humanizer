<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms of Service • AxelBase</title>
  <meta name="description" content="Free, open-source web tools by AxelBase. Use at your own risk. No warranty. MIT-licensed code. No liability for misuse or scheduling errors." />
  <link rel="canonical" href="{base}/terms" />
  <meta property="og:title" content="Terms of Service • AxelBase" />
  <meta property="og:description" content="Free, open-source web tools by AxelBase. Use at your own risk. No warranty. MIT-licensed code. No liability for misuse or scheduling errors." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MrAAndersen123" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service",
      "url": "{base}/terms",
      "description": "Free, open-source web tools by AxelBase. Use at your own risk. No warranty. MIT-licensed code. No liability for misuse or scheduling errors.",
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
    <p>Terms of Service</p>
  </div>

  <article class="prose">
    <h1>Terms of Service</h1>
    <p class="post-meta">Effective: 12 November 2025 • AxelBase</p>

    <h2>1. Acceptance</h2>
    <p>By using any AxelBase tool (including the Cron Humanizer), you agree to these Terms. If you disagree, do not use our services.</p>

    <h2>2. Service Description</h2>
    <p>AxelBase provides <strong>free, client-side web tools</strong> for cron expression validation, humanization, and scheduling previews. All tools are <strong>open source under the MIT License</strong>.</p>

    <h2>3. No Warranty</h2>
    <p><strong>Tools are provided "as is" without warranty of any kind.</strong> We do not guarantee:</p>
    <ul>
      <li>Accuracy of next-run calculations</li>
      <li>Correctness of humanized descriptions</li>
      <li>Availability or uptime</li>
      <li>Fitness for any purpose</li>
    </ul>

    <h2>4. Limitation of Liability</h2>
    <p><strong>AxelBase is not liable</strong> for any damages arising from:</p>
    <ul>
      <li>Misconfigured cron jobs</li>
      <li>System downtime or data loss</li>
      <li>Incorrect scheduling decisions</li>
      <li>Use in production environments</li>
    </ul>
    <p><em>Always verify critical schedules independently.</em></p>

    <h2>5. User Responsibilities</h2>
    <p>You must:</p>
    <ul>
      <li>Use tools responsibly</li>
      <li>Not overload public instances</li>
      <li>Not remove attribution when forking</li>
      <li>Comply with applicable laws</li>
    </ul>

    <h2>6. Intellectual Property</h2>
    <p>Code is MIT-licensed. You may fork, modify, and redistribute. <strong>Attribution is appreciated but not required</strong>.</p>

    <h2>7. Termination</h2>
    <p>We may restrict access at any time without notice.</p>

    <h2>8. Governing Law</h2>
    <p>These Terms are governed by the laws of <strong>Norway</strong>, where AxelBase is based.</p>

    <h2>9. Changes</h2>
    <p>We may update these Terms. Continued use constitutes acceptance.</p>

    <p class="italic-note">
      <strong>Free tools. Open code. Zero liability.</strong><br />
      Use wisely. Ship confidently.
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