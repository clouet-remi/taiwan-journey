<script>
    import Icon from "@iconify/svelte";

    let isShrunk = $state(false);
    let sentinel;
    let isOpen = $state(false);

    $effect(() => {
        if (!sentinel) return;

        // Api du nav qui cherche si l'élément est visible ou non
        const observer = new IntersectionObserver(
            // le callback prend un tableau d'entrée car possible d'observer plusieurs éléments
            ([entry]) => {
                isShrunk = !entry.isIntersecting;
            },
            {
                // Pour dire observe par rapport au viewport
                root: null,
                // pourcentage de visibilité nécessaire pour déclencher le callback
                threshold: 0,
            },
        );

        observer.observe(sentinel);

        return () => observer.disconnect();
    });
</script>

<div bind:this={sentinel} class="nav-sentinel"></div>

<div class="nav__container" class:shrink={isShrunk}>
    <button
        class="nav__toggle nav__toggle--open"
        aria-label={isOpen
            ? "Open the navigation bar"
            : "Open the navigation bar"}
        aria-expanded={isOpen}
        aria-controls="main-nav"
        onclick={() => (isOpen = !isOpen)}
    >
        <Icon icon="eva:menu-fill" width="24" height="24" style="color: #fff" />
    </button>
    <nav class="main-nav" class:is-open={isOpen}>
        <a href="/our-schools" class="main-nav__link">Our schools</a>
        <a href="/accommodations" class="main-nav__link">Accomodations</a>
        <a href="/activities" class="main-nav__link">Activities</a>
        <a href="about-us" class="main-nav__link">About us</a>
        <a href="search" class="main-nav__link-search">
            <Icon icon="lucide:search" width="24" height="24" />
        </a>
    </nav>
</div>

<style>
    .nav-sentinel {
        height: 1px;
    }

    .nav__container {
        position: sticky;
        display: flex;
        flex-direction: column;
        /* Pour enlever le align-items en stretch par défaut */
        align-items: flex-end;
        top: 0;
        z-index: 1000;
        background: rgb(255, 255, 255, 1);
        padding: 0.5rem 1rem 1rem 1rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        transition:
            padding 0.3s ease,
            box-shadow 0.3s ease,
            backdrop-filter 0.3s ease;
    }

    .nav__container.shrink {
        padding: 0.25rem 1rem;
        background: rgb(255, 255, 255, 0.8);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .nav__toggle {
        all: unset;
        display: none;
        cursor: pointer;
        background-color: var(--main-theme-color);
        padding: 0.5rem;
        transition: transform 0.2s ease;
    }

    .main-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        background-color: var(--main-theme-color);
        padding: 0.5rem 1rem;
        border-radius: var(--base-border-radius);
        gap: 1rem;
        transition:
            padding 0.3s ease,
            transform 0.3s ease;
    }

    .nav__container.shrink .main-nav {
        padding: 0.25rem 0.75rem;
        transform: scale(0.9);
    }

    .main-nav__link {
        position: relative;
        display: inline-flex;
        align-items: center;
        color: var(--light-color);
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: var(--base-border-radius);
        transition:
            background-color 0.3s,
            color 0.3s;
    }

    .main-nav__link:hover {
        background-color: var(--light-color);
        color: var(--font-color);
    }

    .main-nav__link-search {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--light-color);
        border-radius: 50%;
        padding: 0.5rem;
        color: var(--font-color);
        transition: color 0.3s;
        flex-shrink: 0;
    }

    .main-nav__link-search:hover {
        color: var(--main-theme-color);
        transform: scale(1.1);
    }

    /* Responsive tablette */
    @media screen and (max-width: 1250px) {
        .main-nav {
            width: 90%;
            overflow: hidden;
            gap: 0.5rem;
        }

        .main-nav__link {
            display: inline-flex;
            align-items: center;
            min-width: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    /* Responsive mobile */
    @media screen and (max-width: 700px) {
        .nav__container {
            gap: 0.5rem;
        }

        .nav__toggle {
            display: block;
            border-radius: 0.3rem;
        }

        .nav__toggle:active {
            transform: scale(1.05);
        }

        .main-nav {
            transform: translateY(-1rem);
            opacity: 0;
            pointer-events: none;
            flex-direction: column;
            width: 100%;
            border-radius: 0.3rem;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition:
                max-height 0.3s ease,
                opacity 0.1s ease;
        }

        .main-nav.is-open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
            max-height: 300px;
        }

        .main-nav__link-search {
            display: none;
        }

        .nav__container.shrink {
            padding: 1rem;
        }
    }
</style>
