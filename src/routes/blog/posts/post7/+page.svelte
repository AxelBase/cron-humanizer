<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Advanced Cron Syntax & Edge Cases • AxelBase</title>
  <meta name="description" content="Master L, W, #, Sunday 0 vs 7, day-of-month vs day-of-week precedence, and system-specific behaviors in cron scheduling." />
  <link rel="canonical" href="{base}/blog/posts/post7" />
  <meta property="og:title" content="Advanced Cron Syntax & Edge Cases • AxelBase" />
  <meta property="og:description" content="Master L, W, #, Sunday 0 vs 7, day-of-month vs day-of-week precedence, and system-specific behaviors in cron scheduling." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MrAAndersen123" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Advanced Cron Syntax & Edge Cases",
      "description": "Master L, W, #, Sunday 0 vs 7, day-of-month vs day-of-week precedence, and system-specific behaviors in cron scheduling.",
      "datePublished": "2025-11-12",
      "author": { "@type": "Organization", "name": "AxelBase" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "{base}/blog/posts/post7" }
    }
  </script>
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Advanced Cron Syntax</p>
  </div>

  <article class="prose">
    <h1>Advanced Cron Syntax & Edge Cases</h1>
    <p class="post-meta">Published: 12 November 2025 • AxelBase</p>

    <p>Beyond <code>*</code> and <code>/</code>, cron supports powerful but inconsistent extensions.</p>

    <h2>Special Characters</h2>
    <ul>
      <li><code>L</code> — Last day of month (<code>0 0 L * *</code>)</li>
      <li><code>W</code> — Nearest weekday (<code>0 9 15W * *</code>)</li>
      <li><code>#</code> — Nth weekday (<code>0 9 * * 5#3</code> = 3rd Friday)</li>
    </ul>

    <h3>Warning</h3>
    <p>These are <strong>not standard</strong>. Supported in Quartz, not in Vixie cron.</p>

    <h2>Sunday: 0 or 7?</h2>
    <p>Both valid. Use <code>?</code> in the other day field to avoid conflicts.</p>

    <h3>Precedence Rules</h3>
    <p>If both day-of-month and day-of-week are specified:</p>
    <ul>
      <li>Vixie cron: OR logic</li>
      <li>Quartz: AND logic (rare)</li>
    </ul>

    <h2>Best Practice</h2>
    <p>Use <code>?</code> in one field to disable it. Never rely on non-standard extensions in production.</p>

    <p class="italic-note">
      Stick to standards. Avoid surprises.
    </p>
  </article>
</div>