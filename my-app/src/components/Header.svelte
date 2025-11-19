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
<Icon icon="lucide:search" width="24" height="24" />        </a>
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

    .header__nav {
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

    
    .header__navlink {
        position: relative;
        display: inline-flex;
        align-items: center;
        color: var(--light-color);
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: var(--base-border-radius);
        transition: background-color 0.3s, color 0.3s;
    }
    
    .header__navlink:hover {
        background-color: var(--light-color);
        color: var(--font-color);
    }

    .header__navlink-search {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--light-color);
        padding: var(--base-padding);
        border-radius: 50%;
        padding: 0.5rem ;
        color: var(--font-color);
        transition: color 0.3s;
    }

    .header__navlink-search:hover {
        color: var(--main-theme-color);
        transform: scale(1.1);        
    }







</style>
