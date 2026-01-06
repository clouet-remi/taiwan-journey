<script>
    import {Nav, Header, Footer} from "$lib/index.js";
     let { children } = $props()
</script>

<Header />
<Nav />

<main>
    {@render children()}
</main>
<Footer/>

<style>

</style>