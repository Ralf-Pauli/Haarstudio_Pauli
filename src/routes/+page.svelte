<script lang="ts">
  import type { PageData } from "./$types";
  import { Button } from "$components/ui/button";
  import heroImage from "$lib/assets/hero.jpg";

  export let data: PageData;
</script>

<div class="flex flex-col items-stretch justify-center gap-4 h-4/5 max-w-5xl mx-auto font-montserrat">
  <!-- Hero Section -->
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img src={heroImage} alt="Hero Image" class="object-cover rounded-xl absolute max-w-5xl opacity-10" />
  <div class="relative h-5/6 text-white">
    <div class="flex flex-col items-center justify-center h-full bg-opacity-10 p-4 rounded-xl relative">
      <h1 class="text-4xl font-bold inline border-b-primary mb-2 underline decoration-primary decoration-4 underline-offset-4">Willkommen bei Haarstudio Pauli</h1>
      <p class="text-xl my-1">Erleben Sie Exzellenz und Präzision bei jedem Termin.</p>
      <Button href="/booking" class="text-base mt-4 bg-primary text-black font-bold p-2 px-4 rounded-md">Termin Buchen</Button>
    </div>
  </div>
</div>
