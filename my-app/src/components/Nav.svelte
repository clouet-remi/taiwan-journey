<script>
    import Icon from "@iconify/svelte";
</script>

<div class="nav__container">
    <nav class="main-nav">
        <a href="/our/schools" class="main-nav__link">Our schools</a>
        <a href="/accomodations" class="main-nav__link">Accomodations</a>
        <a href="/activities" class="main-nav__link">Activities</a>
        <a href="about-us" class="main-nav__link">About us</a>
        <a href="search" class="main-nav__link-search">
            <Icon icon="lucide:search" width="24" height="24" />
        </a>
    </nav>
</div>

<style>
    .nav__container {
        padding: 1rem;
        position: sticky;
        top: 0;
        z-index: 1000;
        background: white;
        padding: 0.5rem 1rem 1rem 1rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
        padding: var(--base-padding);
        border-radius: 50%;
        padding: 0.5rem;
        color: var(--font-color);
        transition: color 0.3s;
    }

    .main-nav__link-search:hover {
        color: var(--main-theme-color);
        transform: scale(1.1);
    }
</style>
