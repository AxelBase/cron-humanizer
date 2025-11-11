<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Previewing Next Run Times • AxelBase</title>
  <meta name="description" content="Display future cron executions in local time: see the next 10 runs instantly to verify your schedule before deployment." />
  <link rel="canonical" href="{base}/blog/posts/post6" />
  <meta property="og:title" content="Previewing Next Run Times • AxelBase" />
  <meta property="og:description" content="Display future cron executions in local time: see the next 10 runs instantly to verify your schedule before deployment." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MrAAndersen123" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Previewing Next Run Times",
      "description": "Display future cron executions in local time: see the next 10 runs instantly to verify your schedule before deployment.",
      "datePublished": "2025-11-12",
      "author": { "@type": "Organization", "name": "AxelBase" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "{base}/blog/posts/post6" }
    }
  </script>
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Previewing Next Run Times</p>
  </div>

  <article class="prose">
    <h1>Previewing Next Run Times</h1>
    <p class="post-meta">Published: 12 November 2025 • AxelBase</p>

    <p>The ultimate test of a cron expression: “When does it actually run?”</p>

    <h2>Why Preview Matters</h2>
    <p>Humanized descriptions are great — but nothing beats seeing the exact timestamps.</p>
    <ul>
      <li>Confirms timezone handling</li>
      <li>Reveals off-by-one errors</li>
      <li>Prevents “it didn’t run” incidents</li>
    </ul>

    <h3>Local Time Is King</h3>
    <p>UTC previews are useless in Johannesburg or Tokyo. Always convert to <code>Intl.DateTimeFormat().resolvedOptions().timeZone</code>.</p>

    <h3>Show Multiple Runs</h3>
    <p>Display at least 5–10 future executions. For <code>* * * * *</code>, show next 10 minutes. For monthly jobs, show next 3 months.</p>

    <h2>Implementation</h2>
    <p>Use <code>cron-parser</code> with <code>currentDate</code> and <code>tz</code> options. Format with <code>date-fns</code> for consistency.</p>

    <p class="italic-note">
      See it run. Trust your schedule.
    </p>
  </article>
</div>