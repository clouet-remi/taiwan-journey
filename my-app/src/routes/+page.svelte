<script>
  // '$lib' représente le chemin absolu dans SvelteKit
  import {
    Header,
    Footer,
    Services,
    StudyTaiwan,
    Activities,
    Accommodations,
    Nav,
  } from "$lib";
</script>

<!-- <svelte:head>
  <title>"Taiwan Journey"</title>
</svelte:head> -->

<div class="top-bar">
  <Header />
  <Nav />
</div>

<main class="main">
  <StudyTaiwan />
  <Services />
  <Activities />
  <Accommodations />
</main>
<Footer />

<style>
  .top-bar {
    width: 100%;
    padding: 0rem 1rem 1rem 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
</style>
