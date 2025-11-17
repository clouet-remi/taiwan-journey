<script>


</script>


<section class="services__display">

    <article class="services__article">
        <img class="services__img" src="img/learn-chinese-calligraphy.jpg" alt="">
        <div class="services__text">
            <h3 class="services__title">Learn Chinese efficiently with the right method in Taiwan</h3>
                <p class="services__text-description">With a clear, immersive approach, you’ll pick up Chinese faster than you ever thought possible.</p>
            <p class="services__text-hidden">Side effects may include sudden enthusiasm for writing characters everywhere and proudly correcting friends’ pronunciations.</p>
        </div>
</article>
    <article class="services__article">
        <img class="services__img" src="img/taipei-night-market.jpg" alt="">
        <div class="services__text">
            <h3 class="services__title">Discover a large panel of activities all over in Taiwan</h3>
                <p class="services__text-description">From mountain trails to night markets and hot springs, you’ll unlock Taiwan’s most unforgettable experiences in seconds.</p>
            <p class="services__text-hidden">Beware: you might end up adding way too many spots to your bucket list after discovering what Taiwan truly offers.</p>
        </div>
</article>
    <article class="services__article">
        <img class="services__img" src="img/modern-house.jpg" alt="">
        <div class="services__text">
            <h3 class="services__title">Find your dream house in just a few click in Taiwan !</h3>
                <p class="services__text-description">With smart filtering and personalized selections, finding your perfect Taiwanese home becomes effortless.</p>
            <p class="services__text-hidden">Warning: finding your dream home may cause uncontrollable excitement and a strong urge to start decorating immediately.</p>
        </div>    
</article>

</section>


<style>

.services__display {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
}

.services__article {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.services__img {
    height: 20vh;
    border-radius: var(--base-border-radius);
    width: 100%;
    object-fit: cover;
    padding: var(--base-padding);
}

.services__text {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--light-color);
    text-align: center;
    width: 100%;
    padding: var(--base-padding);
}


.services__title {
    font-size: 1.3rem;
    background-color: color-mix(in srgb, var(--main-theme-color) 60%, transparent);
    border-radius: 1.5rem 1.5rem 0 0 ;
}

.services__text-description {
    font-style: italic;
    background-color: color-mix(in srgb, var(--light-color) 60%, transparent);
    color: var(--font-color);
}

.services__text-hidden {
    /* Afin de bien centrer mon texte, utile pour le texte court de Poulpy */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: color-mix(in srgb, var(--main-theme-color) 60%, transparent);
    font-style: italic;
    position: absolute;
    top: 0;
    /* Décalle mon élément en haut afin de la cacher avec overflow: hidden */
    transform: translateY(-250%);
    /* Ajoute une transition plus douce */
    transition: transform 0.5s ease;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    min-height: 1.5rem;
}



</style>