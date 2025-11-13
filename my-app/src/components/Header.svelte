<script>
        import Icon from "@iconify/svelte";

</script>

<header class="header">
    <div class="header__group">
        <img src="/img/logo-taipei-journey.png" alt="Logo de Taipei Journey" class="header__logo">
        <h1 class="header__title">Taiwan Journey</h1>
    </div>
    <a href="#" class="header__contact">Contact us</a>
    <nav class="header__nav">
        <a href="#" class="header__navlink">Our schools</a>
        <a href="#" class="header__navlink">Accomodations</a>
        <a href="#" class="header__navlink">Activities</a>
        <a href="#" class="header__navlink">About us</a>
        <a href="#" class="header__navlink-search">
<Icon icon="lucide:search" width="24" height="24"  style="color: #000" />        </a>
    </nav>
</header>

<style>
    .header {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-image: url(/img/taipei-palace.jpg);
        background-size: cover;
        background-position: 50% 70%;
        padding: 0rem 2rem 1rem 2rem; 
    }

    .header__group {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
    }

    .header__logo {
        width: 5rem;
        height: 5rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }

    .header__title {
        font-size: 5rem;
        text-align: start;
        color: var(--main-theme-color);
        text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.4);
    }

    .header__nav a,
    .header__contact {
        text-decoration: none;
        color: var(--light-color)
    }

    .header__nav {
        display: flex;
        width: 70%;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto; 
        background-color: var(--main-theme-color);
        padding: 0.5rem; 
        border-radius: var(--base-border-radius);
    }

    .header__navlink-search {
        background-color: var(--light-color);
        padding: var(--base-padding);
        border-radius: 50%;
    }

    .header__contact {
        align-self: flex-end;
        justify-content: center;
        text-align: center;
        width: 8rem;
        color: var(--font-color);
        background-color: var(--light-color);
        padding: var(--base-padding); 
        border-radius: var(--base-border-radius);
    }


</style>
