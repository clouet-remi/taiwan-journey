<script>
import { activitiesData } from "../data/activitiesData";

</script>

<section class="activities">
    <h3 class="activities__title">Les activités les plus populaires</h3>
    
    {#each activitiesData as activity}
    <a href="#" target="_blank" class="activity__link">
        <article class="activity">
            <div class="activity__img--wrapper">
                <img src={activity.img} alt="" class="activity__img">
            </div>
            <div class="activity__text">
                <h4 class="activity__text--title">{activity.title}</h4>
                <p class="activity__text--price">Starting from {activity.price}$</p>
            </div>
        </article>
    </a>
    {/each}

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
    padding: var(--base-padding);
}

.activity__link {
    padding: var(--base-padding);
    width: 25%;
}

.activity__img--wrapper {
    height: 8rem;
    width: 100%;
    overflow: hidden;
    border-radius: var(--base-border-radius);
    transition: transform 0.3s ease; 
}

.activity__img {
    width: 100%;
}

.activity__text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    padding: var(--base-padding);
}


.activity__text--title {
    position: relative;
    text-decoration: none;
    color: var(--font-color);
}

.activity__text--title::after {
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

.activity__link:hover 
.activity__text--title::after {
    transform: scaleX(1);
}

.activity__link:hover .activity__img--wrapper {
    transform: scale(1.05);
}

.activity__text--price {
    color: var(--main-theme-color);
    font-style: italic;
}

</style>