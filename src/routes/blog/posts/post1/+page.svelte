<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Breaking Down Cron Fields • AxelBase</title>
  <meta name="description" content="Deep dive into each cron field: allowed values, special characters, and common pitfalls in minute, hour, day, month, and weekday scheduling." />
  <link rel="canonical" href="{base}/blog/posts/post2" />
  <meta property="og:title" content="Breaking Down Cron Fields • AxelBase" />
  <meta property="og:description" content="Deep dive into each cron field: allowed values, special characters, and common pitfalls in minute, hour, day, month, and weekday scheduling." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MrAAndersen123" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Breaking Down Cron Fields",
      "description": "Deep dive into each cron field: allowed values, special characters, and common pitfalls in minute, hour, day, month, and weekday scheduling.",
      "datePublished": "2025-11-12",
      "author": { "@type": "Organization", "name": "AxelBase" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "{base}/blog/posts/post2" }
    }
  </script>
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Breaking Down Cron Fields</p>
  </div>

  <article class="prose">
    <h1>Breaking Down Cron Fields</h1>
    <p class="post-meta">Published: 12 November 2025 • AxelBase</p>

    <p>Every cron expression is built from five time fields. Understanding their constraints and behaviors is critical for reliable scheduling.</p>

    <h2>1. Minute (0–59)</h2>
    <p>First field. Supports values from 0 to 59. Common patterns:</p>
    <ul>
      <li><code>0</code> — Start of hour</li>
      <li><code>30</code> — Half past</li>
      <li><code>*/15</code> — Every 15 minutes</li>
      <li><code>1,16,31,46</code> — Specific minutes</li>
    </ul>

    <h3>Pitfall</h3>
    <p><code>60</code> is invalid — minute max is 59.</p>

    <h2>2. Hour (0–23)</h2>
    <p>Uses 24-hour format. Midnight is <code>0</code>, noon is <code>12</code>.</p>
    <ul>
      <li><code>9</code> — 9:00 AM</li>
      <li><code>21</code> — 9:00 PM</li>
      <li><code>9-17</code> — Business hours</li>
    </ul>

    <h2>3. Day of Month (1–31)</h2>
    <p>Specifies calendar day. Use <code>?</code> when using day of week.</p>

    <h2>4. Month (1–12)</h2>
    <p>Supports numeric or names (JAN–DEC in some systems).</p>

    <h2>5. Day of Week (0–7)</h2>
    <p>Both <code>0</code> and <code>7</code> represent Sunday. Use <code>?</code> when using day of month.</p>

    <p class="italic-note">
      Precision starts with understanding the fields.
    </p>
  </article>
</div>