<script lang="ts">
  import "../app.postcss";
  import Navbar from "$components/navbar/Navbar.svelte";
  import Footer from "$components/footer/Footer.svelte";
</script>

<div class="h-screen sm:px-3">
  <Navbar />
  <slot />
  <Footer />
</div>
