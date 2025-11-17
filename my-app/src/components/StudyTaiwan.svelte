<script>
        import Icon from "@iconify/svelte";


</script>

<section class="study">
<div class="study__subgroup">
    <h2 class="study__title">Ready to start a new life in Taiwan ?</h2>
<div class="study__title-icon">
    <Icon icon="mdi:airplane" width=70% height=70% color= #fff  />
</div>
</div>
<p class="study__para"><span class="study__para-i">Experience a new chapter in one of Asia’s most welcoming destinations.</span></p>
<p class="study__para">Moving to Taiwan means opening the door to a rich culture, friendly people, and endless opportunities — and it all begins with learning Mandarin.</p>
<p class="study__para">We work hand in hand with trusted language schools across Taiwan to help you find the program that truly fits your goals and lifestyle. From your first questions to your first steps in Taiwan, we’re here to make the process smooth and exciting.</p>
    <div class="study__btn">
        <a href="#" class="study__contact">Contact us</a>
        <a href="#" class="study__apply">Apply</a>
    </div>

</section>



<style>

.study {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 50%;
    padding: 1rem;
}

.study__subgroup {
    display: flex;
    justify-content: center;
    align-items: center;
}

.study__title {
    color: var(--main-theme-color);
    align-items: center;
    text-align: center;
    font-weight: 900;
    font-size: 4rem;
    line-height: 1;
    padding: var(--base-padding)
}

.study__title-icon {
    background-color: var(--main-theme-color);
    flex: 0 0 auto; /* Pas de shrink, pas de grow, taille fixe */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 3rem;
    height: 3rem; 
}

.study__para {
    padding: var(--base-padding);
    font-weight: 500;
}

.study__para-i {
    font-style: italic;
    font-weight: 400i;
    text-decoration: underline;
}

.study__btn {
    display: flex;
    justify-content: space-around;
}

.study__contact,
.study__apply {
        width: 8rem;
        color: var(--light-color);
        background-color: var(--main-theme-color);
        padding: var(--base-padding); 
        border-radius: var(--base-border-radius);
        text-decoration: none;
        color: var(--light-color);
        text-align: center;
    }


</style>