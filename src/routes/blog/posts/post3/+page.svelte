<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Common Cron Patterns and Examples • AxelBase</title>
  <meta name="description" content="50+ real-world cron examples: daily backups, hourly reports, weekly cleanup, monthly billing — with human-readable explanations." />
  <link rel="canonical" href="{base}/blog/posts/post3" />
  <meta property="og:title" content="Common Cron Patterns and Examples • AxelBase" />
  <meta property="og:description" content="50+ real-world cron examples: daily backups, hourly reports, weekly cleanup, monthly billing — with human-readable explanations." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MrAAndersen123" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Common Cron Patterns and Examples",
      "description": "50+ real-world cron examples: daily backups, hourly reports, weekly cleanup, monthly billing — with human-readable explanations.",
      "datePublished": "2025-11-12",
      "author": { "@type": "Organization", "name": "AxelBase" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "{base}/blog/posts/post3" }
    }
  </script>
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Common Cron Patterns</p>
  </div>

  <article class="prose">
    <h1>Common Cron Patterns and Examples</h1>
    <p class="post-meta">Published: 12 November 2025 • AxelBase</p>

    <p>Here are the most frequently used cron schedules — with plain English explanations.</p>

    <h2>Every Minute</h2>
    <ul>
      <li><code>* * * * *</code> — Run continuously</li>
      <li><code>*/5 * * * *</code> — Every 5 minutes</li>
    </ul>

    <h2>Hourly Jobs</h2>
    <ul>
      On the hour: <code>0 * * * *</code><br />
      Half past: <code>30 * * * *</code><br />
      Every 2 hours: <code>0 */2 * * *</code>
    </ul>

    <h2>Daily Schedules</h2>
    <ul>
      Midnight: <code>0 0 * * *</code><br />
      9 AM: <code>0 9 * * *</code><br />
      10:30 PM: <code>30 22 * * *</code>
    </ul>

    <h2>Weekly & Monthly</h2>
    <ul>
      Monday 9 AM: <code>0 9 * * 1</code><br />
      First of month: <code>0 0 1 * *</code><br />
      Last Friday: <code>0 17 * * 5L</code> (system-dependent)
    </ul>

    <p class="italic-note">
      Copy, paste, schedule — done.
    </p>
  </article>
</div>