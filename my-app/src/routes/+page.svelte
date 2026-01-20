<script>
  // '$lib' représente le chemin absolu dans SvelteKit
  import {
    Services,
    StudyTaiwan,
    Activities,
    Accommodations,
  } from "$lib";
</script>

<!-- <svelte:head>
  <title>"Taiwan Journey"</title>
</svelte:head> -->

  <main class="main">
    <StudyTaiwan />
    <Services />
    <Activities />
    <Accommodations />
  </main>

<style>

</style>
