<script>


</script>

<section class="activities">
    <h3 class="activities__title">Les activités les plus populaires</h3>
    <a href="#" target="_blank" class="activity__link">
        <article class="activity">
            <img src="/img/activities/hot-spring.jpg" alt="" class="activity__img">
            <h4 class="activity__title">Find in love with our secret hotsprings</h4>
            <p class="acitivity__price">Starting from 35$</p>
        </article>
    </a>
    <a href="#" target="_blank" class="activity__link">
        <article class="activity">
            <img src="/img/activities/taiwan-temple.jpg" alt="" class="activity__img">
            <h4 class="activity__title">Meditation in a remote temple</h4>
            <p class="acitivity__price">Starting from 99.9$</p>
        </article>
    </a>
    <a href="#" target="_blank" class="activity__link">
        <article class="activity">
            <img src="/img/activities/tea-ceremony.jpg" alt="" class="activity__img">
            <h4 class="activity__title">Tea Ceremony</h4>
            <p class="acitivity__price">Starting from 60$</p>
        </article>
    </a>
    <a href="#" target="_blank" class="activity__link">
        <article class="activity">
            <img src="/img/activities/hiking-taiwan.jpg" alt="" class="activity__img">
            <h4 class="activity__title">Hiking in the central mountains</h4>
            <p class="acitivity__price">Starting from 150$</p>
        </article>
    </a>
</section>


<style>

.activities {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    color: var(--main-theme-color);
    padding: var(--base-padding);
    font-size: 1.2rem;
}

.activities a {
    text-decoration: none;
}

.activities__title {
    width: 100%;
}

.activity__link {
    padding: var(--base-padding);
    width: 20%;
}

.activity__img {
border-radius: var(--base-border-radius);
height: 10rem;
width: 100%;
object-fit: cover;
}

</style>