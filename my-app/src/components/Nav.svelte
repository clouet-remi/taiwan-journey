<script>
    import Icon from "@iconify/svelte";

    let isShrunk = $state(false); 
    let sentinel; 

    $effect(() => {
        if (!sentinel) return; 

        // Api du nav qui cherche si l'élément est visible ou non
        const observer = new IntersectionObserver(
            // le callback prend un tableau d'entrée car possible d'observer plusieurs éléments
            ([entry]) => {
                isShrunk = !entry.isIntersecting; 
                console.log("ma fonction est bien called")
                console.log(`La valeur de isShrunk vaut ${isShrunk}`)
            }, 
            {
                // Pour dire observe par rapport au viewport
                root: null, 
                // pourcentage de visibilité nécessaire pour déclencher le callback
                threshold: 0,
            }
        );

        observer.observe(sentinel);

        return () => observer.disconnect();
    });


</script>

<div bind:this={sentinel} class="nav-sentinel"></div>

<div class="nav__container" class:shrink={isShrunk}>
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
    .nav-sentinel {
        height: 1px; 
    }

    .nav__container {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: white;
        padding: 0.5rem 1rem 1rem 1rem;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        transition:
        padding 0.3s ease, 
        box-shadow 0.3s ease, 
        backdrop-filter 0.3s ease; 
    }

    .nav__container.shrink {
        padding: 0.25rem 1rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
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
        transition: padding 0.3s ease, transform 0.3s ease; 
    }

    .nav__container.shrink .main-nav {
        padding: 0.25rem 0.75rem; 
        transform: scale(0.90);
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
