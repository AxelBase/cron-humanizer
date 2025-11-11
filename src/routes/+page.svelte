<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths'; // ← CRITICAL FIX
  import { validateCron, type ValidationResult } from '$lib/cron/parser';
  import { humanizeCron } from '$lib/cron/humanizer';
  import { getNextRunTimes, getTimezone } from '$lib/cron/scheduler';
  import { copyToClipboard } from '$lib/utils/clipboard';
  import { getCronFromUrl, setCronInUrl } from '$lib/utils/url-sync';
  import { presets } from '$lib/presets';

  let cron: string = '* * * * *';
  let validation: ValidationResult = { valid: true };
  let humanized: string = '';
  let nextRuns: string[] = [];
  let timezone: string = '';
  let error: string = '';

  function handleChange() {
    validation = validateCron(cron);
    if (validation.valid) {
      humanized = humanizeCron(cron);
      nextRuns = getNextRunTimes(cron, 10);
      error = '';
      setCronInUrl(cron);
    } else {
      error = validation.error || 'Invalid cron expression';
      humanized = '';
      nextRuns = [];
    }
  }

  function selectPreset(value: string) {
    cron = value;
    handleChange();
  }

  onMount(() => {
    const urlCron = getCronFromUrl();
    if (urlCron) {
      cron = urlCron;
    }
    timezone = getTimezone();
    handleChange();
  });
</script>

<svelte:head>
  <title>Cron Humanizer & Next Run Preview • AxelBase</title>
  <meta name="description" content="A free, client-side tool to humanize cron expressions, validate syntax, and preview next 10 run times in your local timezone. No data collected." />
  <link rel="canonical" href="{base}/" />
  <meta property="og:title" content="Cron Humanizer & Next Run Preview • AxelBase" />
  <meta property="og:description" content="A free, client-side tool to humanize cron expressions, validate syntax, and preview next 10 run times in your local timezone. No data collected." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@MrAAndersen123" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cron Humanizer & Next Run Preview",
      "url": "{base}/",
      "description": "A free, client-side tool to humanize cron expressions, validate syntax, and preview next 10 run times in your local timezone. No data collected.",
      "publisher": {
        "@type": "Organization",
        "name": "AxelBase"
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "Cron Humanizer",
        "applicationCategory": "DeveloperTool",
        "operatingSystem": "Web"
      }
    }
  </script>
</svelte:head>

<!-- Rest of UI unchanged -->
<div class="container py-5">
  <h1 class="text-center mb-4">Cron Humanizer & Next Run Preview</h1>

  <div class="mb-4">
    <div class="btn-group">
      {#each presets as preset}
        <button type="button" class="btn btn-outline-primary" on:click={() => selectPreset(preset.value)}>
          {preset.label}
        </button>
      {/each}
    </div>
  </div>

  <div class="card">
    <div class="card-body">
      <div class="mb-4">
        <label for="cronInput" class="form-label">Cron Expression</label>
        <input
          type="text"
          class="form-control"
          id="cronInput"
          bind:value={cron}
          on:input={handleChange}
          placeholder="* * * * *"
        />
        {#if error}
          <div class="error mt-2">{error}</div>
        {/if}
      </div>

      {#if validation.valid}
        <div class="mb-4">
          <h5>Human-Readable Description</h5>
          <p class="fs-5">{humanized}</p>
          <button type="button" class="btn btn-sm btn-outline-secondary" on:click={() => copyToClipboard(humanized)}>
            Copy Description
          </button>
        </div>

        <div>
          <h5>Next 10 Run Times (Local Timezone: {timezone})</h5>
          <ul class="list-group">
            {#each nextRuns as run}
              <li class="list-group-item d-flex justify-content-between align-items-center">
                {run}
                <button type="button" class="btn btn-sm btn-outline-secondary" on:click={() => copyToClipboard(run)}>
                  Copy
                </button>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</div>

<div class="container">
  <section id="about" class="my-5">
    <h2 class="text-center mb-4">About</h2>
    <div class="prose mx-auto">
      <p><strong>AxelBase's Cron Expression Humanizer & Next Run Preview</strong> is a lightweight, stateless web utility designed to simplify cron scheduling. Built on the principles outlined in the Software Requirements Specification (SRS), this tool addresses common pain points in existing solutions like Crontab.guru by providing a cleaner UI, real-time validation, human-readable descriptions, and previews of the next 10 run times in the user's local timezone.</p>

      <p>The core purpose is to empower developers, system administrators, and DevOps professionals to quickly verify cron expressions without mental calculation or timezone confusion. As detailed in the SRS, the tool supports standard 5-field cron formats (minute, hour, day of month, month, day of week), ensuring compatibility with most Unix-like systems and containerized environments like Kubernetes.</p>

      <p>Drawing from blog insights on <em>introduction to cron expressions</em> and <em>breaking down cron fields</em>, the tool emphasizes usability. It validates inputs against field ranges (e.g., minutes 0–59, hours 0–23) and special characters like *, /, -, ,, providing user-friendly errors such as “Hour must be 0–23 (got 25).” This aligns with the SRS's FR-02 (real-time validation) and FR-09 (error handling).</p>

      <p>The humanization feature, inspired by blog discussions on <em>humanizing cron schedules</em>, translates cryptic strings into natural language, e.g., “0 9 * * 1-5” becomes “At 09:00, Monday through Friday.” This meets FR-03, enhancing readability for teams reviewing schedules.</p>

      <p>Previewing next runs (FR-04, FR-05) uses browser APIs for local timezone detection, showing timestamps like “12 Nov 2025, 09:00:00.” Blog posts on <em>previewing next run times</em> highlight its value in avoiding off-by-one errors or unexpected executions.</p>

      <p>Additional features include preset buttons (FR-07) for common patterns like “Every hour,” copy to clipboard (FR-06) for descriptions and runs, and URL sharing (FR-10) via query params, e.g., ?cron=0 9 * * 1-5. The responsive design (FR-08) ensures usability on all devices.</p>

      <p>Non-functional aspects from the SRS — performance (&lt;1s load, &lt;100ms calc), offline support, and WCAG accessibility — make it robust. Hosted on GitHub Pages with SvelteKit, Bootstrap 5, and minimal libraries like cron-parser and date-fns, it's free, open-source, and privacy-focused: no data leaves your browser.</p>

      <p>Whether you're automating backups (as in <em>common cron patterns</em>) or handling advanced syntax (<em>edge cases</em>), this tool streamlines the process. It's more than a validator — it's a productivity booster for scheduling workflows.</p>
    </div>
  </section>

  <section id="how-to-use" class="my-5">
    <h2 class="text-center mb-4">How to Use</h2>
    <div class="prose mx-auto">
      <p><strong>Getting started with the Cron Humanizer</strong> is straightforward, thanks to its intuitive design per the SRS. Begin by accessing the tool on any modern browser — no installation required.</p>

      <p>1. <strong>Enter a Cron Expression</strong> (FR-01): Type your 5-field cron into the input box, e.g., “* * * * *.” Real-time validation (FR-02) checks syntax as you type, flagging errors like “Minute must be 0–59 (got 60)” in red below the field (FR-09).</p>

      <p>2. <strong>Use Presets</strong> (FR-07): Click buttons like “Every hour” to auto-populate common expressions. This instantly updates the description and previews.</p>

      <p>3. <strong>View Human-Readable Description</strong> (FR-03): If valid, see natural language output, e.g., “Every minute.” Copy it with the button (FR-06).</p>

      <p>4. <strong>Preview Next Runs</strong> (FR-04, FR-05): Below, find the next 10 timestamps in your local timezone, labeled e.g., “Africa/Johannesburg.” Each has a copy button. Times are future-only, formatted as “DD MMM YYYY, HH:mm:ss.”</p>

      <p>5. <strong>Share via URL</strong> (FR-10): The expression appends to the URL as ?cron=..., e.g., share.axelbase.com/?cron=0 9 * * 1-5. Opening loads it automatically.</p>

      <p>6. <strong>Handle Errors</strong>: For invalid input, see clear messages. Fix and watch results update instantly.</p>

      <p>7. <strong>Mobile & Offline Use</strong> (FR-08, NFR-03): The responsive UI works on phones/tablets. After loading, it functions offline — ideal for remote work.</p>

      <p>Tips from blog posts: For <em>advanced syntax</em>, test L/W carefully as they're non-standard. Use previews to verify <em>edge cases</em> like February 29 or Sunday 0/7.</p>

      <p>Best practices: Start with presets, validate, preview, then deploy to crontab or Kubernetes. If errors persist, check blog on <em>validating expressions</em>.</p>

      <p>This tool embodies the SRS's focus on usability — no backend, no data sent, just fast results.</p>
    </div>
  </section>

  <section id="faq" class="my-5">
    <h2 class="text-center mb-4">FAQ</h2>
    <div class="prose mx-auto">
      <p><strong>What cron formats are supported?</strong> Standard 5-field only (FR-01). No seconds, @reboot, or non-standard like Kubernetes extensions. See SRS assumptions.</p>

      <p><strong>Why is validation failing?</strong> Check field ranges: minute 0-59, hour 0-23, etc. (FR-02). Errors are specific, e.g., “Day of month must be 1–31.” Blog on <em>validating best practices</em> helps.</p>

      <p><strong>How accurate are human descriptions?</strong> They match common patterns (FR-03), e.g., “Every 5 minutes” for */5 * * * *. For complex, see <em>humanizing cron</em> blog.</p>

      <p><strong>Why only next 10 runs?</strong> Balances performance (NFR-01) and utility (FR-04). Shows immediate future; for more, adjust manually.</p>

      <p><strong>Timezone wrong?</strong> Uses browser's Intl.DateTimeFormat() (FR-05). Check device settings. Previews are local, not UTC.</p>

      <p><strong>Can I share expressions?</strong> Yes, URL auto-appends ?cron=... (FR-10). Recipients see the same view.</p>

      <p><strong>Presets not enough?</strong> Click to load (FR-07), then edit. Covers basics like daily, weekly.</p>

      <p><strong>Mobile issues?</strong> Fully responsive (FR-08). Test on devices; Bootstrap ensures it.</p>

      <p><strong>Offline use?</strong> Yes, after load (NFR-03). Cache stores assets.</p>

      <p><strong>Data privacy?</strong> Zero collection. Client-side only (NFR-02). See Privacy Policy.</p>

      <p><strong>Advanced syntax support?</strong> Partial; L/W may vary. Blog on <em>edge cases</em> explains.</p>

      <p><strong>Copy not working?</strong> Uses navigator.clipboard (FR-06). Ensure HTTPS; fallback if blocked.</p>

      <p><strong>Browser compatibility?</strong> Latest Chrome, Firefox, Safari, Edge (NFR-06).</p>

      <p><strong>Custom enhancements?</strong> Open-source on GitHub. Fork and modify (SRS future enhancements).</p>

      <p><strong>Errors not clear?</strong> Designed for clarity (FR-09). Report issues via contact.</p>
    </div>
  </section>
</div>