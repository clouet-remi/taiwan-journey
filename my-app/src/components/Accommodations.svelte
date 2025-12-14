<script lang="ts">
    import { accommodationsData } from "./../data/accomodations.dataset"
    import Icon from "@iconify/svelte";

    let track: HTMLDivElement | null = null;
    let firstCard: HTMLAnchorElement | null = null;
    let currentIndex = $state(0);
    let cardWidth = $state(0);
    let gap = $state(0);

    $effect(() => {
        if (!track) return;

        const style = getComputedStyle(track);
        gap = parseFloat(style.gap) || 0;

        const update = () => {
            // offsetWidth pour récupérer la largeur réelle visible à l'écran
            cardWidth = firstCard.offsetWidth;
        };

        update();

        // "Surveille l'élém firstCard et s'il est modifié appelle ma fonction update"
        const resizeObserver = new ResizeObserver(update);
        resizeObserver.observe(firstCard);

        return () => resizeObserver.disconnect();
    });

    function displayNextCard() {
        if (currentIndex < accommodationsData.length - 5) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        scroll();
    }

    function displayPrevCard() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = accommodationsData.length - 5;
        }
        scroll();
    }

    function scroll() {
        track.scrollTo({
            left: currentIndex * (cardWidth + gap),
            behavior: "auto",
        });
    }

    function goToIndex(index) {
        currentIndex = index;
        scroll();
    }
</script>

<section class="accommodations">
    <h3 class="accommodations__title">Available accommodations in Taiwan</h3>

    <div class="carousel__controls">
        <button onclick={displayPrevCard}>
            <Icon
                icon="material-symbols:keyboard-arrow-left"/></button>
        <button onclick={displayNextCard}>
            <Icon icon="material-symbols:keyboard-arrow-right" /></button>
    </div>

    <div class="accommodations__wrapper">
        <div class="accommodations__track" bind:this={track}>
            {#each accommodationsData as accommodation, index}
                <a
                    href="/accommodation/:${index}"
                    target="_blank"
                    class="accommodation__link"
                    bind:this={firstCard}
                >
                    <article class="accommodation">
                        <div class="accommodation__img--wrapper">
                            <img
                                src={accommodation.img}
                                alt=""
                                class="accommodation__img"
                            />
                        </div>
                        <div class="accommodation__text">
                            <h4 class="accommodation__text--title">
                                {accommodation.title}
                            </h4>
                            <p class="accommodation__text--price">
                                {accommodation.price}$ / Month
                            </p>
                        </div>
                    </article>
                </a>
            {/each}
        </div>
    </div>

    <div class="carousel__dots">
        {#each accommodationsData as accommodation, index}
            <button
                aria-label="go-to-choosen-card"
                class:active={index === currentIndex}
                onclick={() => goToIndex(index)}
            ></button>
        {/each}
    </div>
</section>

<style>

.accommodations__wrapper {
        overflow: hidden;
        width: 100%;
    }

    .accommodations__track {
        display: flex;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .accommodations {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        color: var(--main-theme-color);
        padding: var(--base-padding);
        font-size: 1.2rem;
    }

    .accommodations a {
        text-decoration: none;
    }

    .accommodation__link {
        width: 20%;
        box-sizing: border-box;
        flex-shrink: 0;
        padding: var(--base-padding);
    }

    .accommodations__title {
        font-size: 1.8rem;
        width: 100%;
        padding: var(--base-padding);
    }

    .accommodation__img--wrapper {
        height: 8rem;
        width: 100%;
        overflow: hidden;
        border-radius: var(--base-border-radius);
        transition: transform 0.3s ease;
    }

    .accommodation__img {
        width: 100%;
    }

    .accommodation__text {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 1rem;
        padding: var(--base-padding);
    }

    .accommodation__text--title {
        position: relative;
        text-decoration: none;
        color: var(--font-color);
    }

    .accommodation__text--title::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--font-color);
        border-radius: 3px;

        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s ease;
    }

    .accommodation__link:hover .accommodation__text--title::after {
        transform: scaleX(1);
    }

    .accommodation__link:hover .accommodation__img--wrapper {
        transform: scale(1.05);
    }

    .accommodation__text--price {
        color: var(--main-theme-color);
        font-style: italic;
    }

    .carousel__controls {
        display: flex;
        margin-left: auto;
        gap: 1rem;
        margin-bottom: 0.5rem;
    }

    .carousel__controls button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background-color: var(--main-theme-color);
        color: var(--light-color);
        height: 2rem;
        width: 2rem;
        transition: transform 0.2s ease;
    }

    .carousel__controls button:hover {
        transform: scale(1.05);
    }

    .carousel__controls button:active {
        transform: scale(1.1);
    }

    .carousel__dots {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        gap: 0.5rem;
    }

    .carousel__dots button {
        all: unset;
        width: 0.5rem;
        height: 0.5rem;
        background: #ccc;
        border-radius: 50%;
        cursor: pointer;
    }

    .carousel__dots button.active {
        background: var(--main-theme-color);
    }


</style>
