<script>
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
    </nav>
    <a href="#" class="header__contact">Contact us</a>
</header>

<style>
    .header {
        width: 100%;
        background-image: url(/img/taipei-palace.jpg);
        background-size: cover;
        background-position: 50% 70%;
        padding: 0rem 4rem 4rem 4rem; 
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
        color: var(--light-color);
        text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.4);
    }
</style>
