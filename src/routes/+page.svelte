<script lang="ts">
  import type { PageData } from "./$types";
  import * as HCard from "$components/ui/hcard";
  import { Button } from "$components/ui/button";

  export let data: PageData;
  let { categories } = data;
  const categoriesPerRow = 3;
  const rows = Math.ceil(categories.length / categoriesPerRow);

  const splitCategories = Array.from({ length: rows }, (_, i) => categories.slice(i * categoriesPerRow, i * categoriesPerRow + categoriesPerRow));
</script>

<div class="flex flex-col items-stretch justify-center gap-4 max-w-5xl mx-auto font-montserrat">
  <!-- Hero Section -->
  <div class="relative h-96 text-white">
    <img class="absolute inset-0 w-full h-full object-cover grayscale" alt="Hero Section" src="https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/407842610_122105315768132217_7661536591112159199_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9nAtmC6ApV0Q7kNvgEOP9Dv&_nc_ht=scontent-muc2-1.xx&oh=00_AfCMh_ywVCZdFBvqD8MED2-USvE7KCEX_odvBjh9LSlziA&oe=6636EB0C">
    <div class="flex flex-col items-center justify-center h-full bg-black bg-opacity-40 p-4 relative">
      <h1 class="text-4xl font-bold">Willkommen bei Haarstudio Pauli</h1>
      <p class="text-xl mt-2">Erleben Sie Exzellenz und Präzision bei jedem Termin.</p>
      <Button href="/booking" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Termin Buchen
      </Button>
    </div>
  </div>

  <!-- Leistungen  -->
  <h2 class="font-bold">Unsere Leistungen</h2>
  {#each splitCategories as row}
    <div class="flex justify-center gap-4">
      {#each row as category}
        <HCard.Root img="https://picsum.photos/150" href="/leistungen?tab={category.name}">
          <HCard.Title>{category.name}</HCard.Title>
          <HCard.Description>very important description</HCard.Description>
        </HCard.Root>
      {/each}
    </div>
  {/each}

  <!-- Facebook Carousel -->


</div>
