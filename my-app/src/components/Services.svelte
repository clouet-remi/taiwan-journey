<script>
</script>

<section class="services__display">
    <a href="/services/learn-chinese" class="services__link">
        <article class="services__article">
            <img
                class="services__img"
                src="img/learn-chinese-calligraphy.jpg"
                alt=""
            />
            <div class="services__text">
                <h3 class="services__title">
                    <span class="services__title-text"
                        >Learn Chinese efficiently with the right method in
                        Taiwan</span
                    >
                </h3>
                <p class="services__text-description">
                    With a clear, immersive approach, you’ll pick up Chinese
                    faster than you ever thought possible.
                </p>
                <p class="services__text-hidden">
                    Side effects may include sudden enthusiasm for writing
                    characters everywhere and proudly correcting friends’
                    pronunciations.
                </p>
            </div>
        </article>
    </a>
    <a href="services/night-market" class="services__link">
        <article class="services__article">
            <img
                class="services__img"
                src="img/taipei-night-market.jpg"
                alt=""
            />
            <div class="services__text">
                <h3 class="services__title">
                    <span class="services__title-text"
                        >Discover a large panel of activities all over in Taiwan</span
                    >
                </h3>
                <p class="services__text-description">
                    From mountain trails to night markets and hot springs,
                    you’ll unlock Taiwan’s most unforgettable experiences in
                    seconds.
                </p>
                <p class="services__text-hidden">
                    Beware: you might end up adding way too many spots to your
                    bucket list after discovering what Taiwan truly offers.
                </p>
            </div>
        </article>
    </a>
    <a href="services/house" class="services__link">
        <article class="services__article">
            <img class="services__img" src="img/modern-house.jpg" alt="" />
            <div class="services__text">
                <h3 class="services__title">
                    <span class="services__title-text"
                        >Find your dream house in just a few click in Taiwan !</span
                    >
                </h3>
                <p class="services__text-description">
                    With smart filtering and personalized selections, finding
                    your perfect Taiwanese home becomes effortless.
                </p>
                <p class="services__text-hidden">
                    Warning: finding your dream home may cause uncontrollable
                    excitement and a strong urge to start decorating
                    immediately.
                </p>
            </div>
        </article>
    </a>
</section>

<style>
    .services__display {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
        margin-top: 2rem; 
    }

    .services__link {
        width: 100%;
    }

    .services__article {
        position: relative;
        overflow: hidden;
        width: 100%;
    }

    .services__img {
        overflow-clip-margin: unset;
        height: 20vh;
        width: 100%;
        object-fit: cover;
        border-radius: var(--base-border-radius);
    }

    .services__text {
        position: absolute;
        top: 0;
        left: 0;
        color: var(--light-color);
        text-align: center;
        width: 100%;
    }

    .services__article:hover .services__text-hidden {
        transform: translateY(0);
    }

    .services__title {
        background-color: color-mix(
            in srgb,
            var(--main-theme-color) 90%,
            transparent
        );
        border-radius: 1rem 1rem 0 0;
    }

    .services__title-text {
        display: inline-block;
        transition:
            transform 0.2s ease,
            text-shadow 0.3s ease;
    }

    .services__link:hover .services__title-text {
        transform: scale(1.05);
        text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.4);
    }

    .services__text-description {
        font-style: italic;
        background-color: color-mix(
            in srgb,
            var(--light-color) 60%,
            transparent
        );
        color: var(--font-color);
    }

    .services__text-hidden {
        background-color: color-mix(
            in srgb,
            var(--main-theme-color) 60%,
            transparent
        );
        font-style: italic;
        bottom: 0;
        transform: translateY(600%);
        transition: transform 0.5s ease;
    }

    /* Responsive tablette */
    @media screen and (max-width: 1250px) {
        .services__display {
            width: 100%;
        }
    }

    /* Responsive mobile */
    @media screen and (max-width: 700px) {
        .services__text-description,
        .services__text-hidden {
            display: none;
        }
    }
</style>
