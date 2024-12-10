<script lang="ts">
  import "../app.postcss";
  import Navbar from "$components/navbar/Navbar.svelte";
  import Footer from "$components/footer/Footer.svelte";
  let isMobileMenuOpen = false;
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }
  
  import ScrollToTop from "$components/ScrollToTop.svelte";

  export let data: LayoutData;
</script>

<div class="h-screen sm:px-3">
  <Navbar {isMobileMenuOpen} {toggleMobileMenu} />
  <main class:overflow-hidden={isMobileMenuOpen} class:h-screen={isMobileMenuOpen} class="pt-5 sm:pt-10">
    <slot />
  </main>
  <Footer />
  <ScrollToTop />
</div>
