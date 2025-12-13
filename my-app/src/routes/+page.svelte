<script>
// '$lib' représente le chemin absolu dans SvelteKit
import {Header, Footer, Services, StudyTaiwan, Activities, Accommodations } from "$lib";

</script>

<!-- <svelte:head>
  <title>"Taiwan Journey"</title>
</svelte:head> -->

  <Header />
  
  <main class="main">
<StudyTaiwan/>
<Services/>
<Activities />
<Accommodations/>
  </main>
<Footer />



<style>

</style>