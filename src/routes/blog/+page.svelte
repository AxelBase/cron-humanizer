<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Introduction to Cron Expressions',
      description: 'A beginner’s guide to understanding cron expressions, their structure, and basic usage in scheduling tasks.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Breaking Down Cron Fields',
      description: 'Detailed explanation of each field in a cron expression: minute, hour, day of month, month, and day of week.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Common Cron Patterns and Examples',
      description: 'Real-world examples of frequently used cron schedules, from every minute to monthly jobs.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Validating Cron Expressions: Best Practices',
      description: 'Tips and techniques for ensuring your cron expressions are error-free and perform as expected.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Humanizing Cron Schedules',
      description: 'How to convert cryptic cron strings into natural language descriptions for better readability.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Previewing Next Run Times',
      description: 'The importance of calculating and displaying future execution times in your local timezone.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Handling Advanced Cron Syntax and Edge Cases',
      description: 'Exploring ambiguities like Sunday representations, precedence rules, and special characters like L and W.'
    }
  ];
</script>

<svelte:head>
  <title>Blog • AxelBase</title>
  <meta name="description" content="Insights and guides on cron expressions, scheduling tools, and best practices for developers and sysadmins." />
  <meta property="og:title" content="Blog • AxelBase" />
  <meta property="og:description" content="Insights and guides on cron expressions, scheduling tools, and best practices for developers and sysadmins." />
  <meta property="og:url" content="{base}/blog" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "AxelBase Blog",
      "url": "{base}/blog",
      "description": "Insights and guides on cron expressions, scheduling tools, and best practices for developers and sysadmins."
    }
  </script>
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1>Blog</h1>
    <p class="subtitle">
      Insights, guides, and best practices from AxelBase —
      focused on cron scheduling, validation, and web tools.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding: 4rem 0;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .blog-header h1 {
    font-size: 3.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
  }

  .post-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: all 0.3s ease;
    text-decoration: none;
    overflow: hidden;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border-color: #667eea;
  }

  .card-body {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .read-more {
    color: #667eea;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
  }
</style>