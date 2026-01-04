<script lang="ts">
    import { base } from '$app/paths';
    import { fly } from 'svelte/transition';
    import '../app.css';

    // --- Buy me a coffee Logic (from File 1 - BuyMeACoffee + Bitcoin) ---
    let isDropdownOpen = false;

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }
    function closeDropdown() {
        isDropdownOpen = false;
    }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }

    // --- Footer Year ---
    const currentYear = new Date().getFullYear();
</script>

<header class="navbar-sticky">
    <div class="navbar-brand-container">
        <a href="{base}/" aria-label="Home">
            <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-logo" />
        </a>
        <a class="navbar-brand-text" href="{base}/">AxelBase</a>

        <div class="bmac-nav-item" use:clickOutside on:click_outside={closeDropdown}>
            <button
                class="bmac-button"
                on:click={toggleDropdown}
                aria-label="Support options"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                </svg>
                <span>Buy me a Coffee</span>
            </button>

            {#if isDropdownOpen}
                <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
                    <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                        <span class="amount">$3</span> One Coffee
                    </a>
                    <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                        <span class="amount">$5</span> Two Coffees
                    </a>
                    <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                        <span class="amount">$10</span> Three Coffees
                    </a>

                    <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                        Custom Amount
                    </a>

                    <a
                        href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                        on:click={closeDropdown}
                        class="custom-amount"
                    >
                        Buy via Crypto (Bitcoin)
                    </a>
                </div>
            {/if}
        </div>
    </div>

    <nav>
        <ul class="nav-links">
            <li><a class="nav-link" href="{base}/">Home</a></li>
            <li><a class="nav-link" href="{base}/#about">About</a></li>
            <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
            <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
            <li><a class="nav-link" href="{base}/blog">Blog</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer class="footer-fixed">
    <span>© AxelBase Cron Humanizer – {currentYear}</span>
    <a href="{base}/privacy">Privacy</a>
    <a href="{base}/terms">Terms</a>
</footer>

<style>
    /* Adapted Buy Me a Coffee styles from File 1, using File 2's orange/blue theme */
    .bmac-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background-color: var(--primary-orange);
        color: var(--text-white);
        border: none;
        padding: 0.6rem 1rem; /* slightly larger than File 1's px-4 py-2 for visual balance */
        border-radius: 50px; /* pill shape from File 1 */
        font-weight: 600;
        cursor: pointer;
        font-size: 0.95rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    .bmac-button:hover {
        background-color: var(--primary-orange-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
    }

    .bmac-button svg {
        width: 20px;
        height: 20px;
    }

    .bmac-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        width: 240px;
        background-color: var(--bg-light-primary);
        border-radius: 16px;
        box-shadow: 0 12px 32px rgba(255, 102, 0, 0.15); /* orange shadow */
        overflow: hidden;
        border: 1px solid rgba(255, 102, 0, 0.1);
        z-index: 1100;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        color: var(--text-dark-primary);
        text-decoration: none;
        font-size: 0.98rem;
        transition: all 0.2s ease;
    }

    .bmac-dropdown a:hover {
        background-color: var(--primary-orange);
        color: var(--text-white);
        padding-left: 28px;
    }

    .bmac-dropdown .amount {
        font-weight: 700;
        color: var(--primary-orange);
        font-size: 1.1rem;
    }

    .bmac-dropdown .custom-amount {
        font-weight: 600;
        color: var(--primary-orange);
        border-top: 1px solid var(--border-light);
        justify-content: center !important;
    }

    .bmac-dropdown .custom-amount:hover {
        color: var(--text-white);
    }
</style>