<script>
        import Icon from "@iconify/svelte";

</script>

<header class="header">
    <div class="header__group">
        <img src="/img/logo-taipei-journey.png" alt="Logo de Taipei Journey" class="header__logo">
        <h1 class="header__title">Taiwan Journey</h1>
    </div>
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
        padding: 0rem 1rem 1rem 1rem; 
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }

    .header__group {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
    }

    .header__logo {
        height: 5rem;
        border-radius: 50%;
    }

    .header__title {
        font-size: 2rem;
        text-align: start;
        color: var(--main-theme-color);
        text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.4);
    }

    .header__nav a {
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
        padding: 0.5rem 0.5rem 0.5rem 1rem; 
        border-radius: var(--base-border-radius);
    }

    .header__navlink-search {
        background-color: var(--light-color);
        padding: var(--base-padding);
        border-radius: 50%;
    }




</style>
