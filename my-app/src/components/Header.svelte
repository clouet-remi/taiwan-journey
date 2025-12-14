<script>

</script>

<header class="header">
    <div class="header__group">
        <a href="/" class="header__link">
            <img src="/img/logo-taipei-journey.png" alt="Logo de Taipei Journey" class="header__logo">
        </a>
        <h1 class="header__title">Taiwan Journey</h1>
    </div>
</header>

<style>
    .header {
        display: flex;
        flex-direction: column;
        width: 100%;
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

</style>
