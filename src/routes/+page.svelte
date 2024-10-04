<script lang="ts">
  import type { PageData } from "./$types";

  import { Button } from "$components/ui/button";

  export let data: PageData;
  let { categories } = data;

  // Break categories into rows with a fixed number of columns per row
  const columnsPerRow = 2; // Adjust this value for different numbers of columns
  const categoryRows: any[] = [];
  for (let i = 0; i < categories.length; i += columnsPerRow) {
    categoryRows.push(categories.slice(i, i + columnsPerRow));
  }
</script>

<div class="flex flex-col gap-5">
  <section class="relative flex justify-center items-center">
    <div class="w-4/5 h-[40rem] max-h-screen max-w-5xl mx-auto relative">
      <enhanced:img src="$lib/assets/hero.jpg" alt="Hero Image" class="w-full h-full object-cover rounded-xl absolute opacity-10" />
      <div class="relative h-full text-white">
        <div class="flex flex-col items-center justify-center h-full bg-opacity-10 p-4 rounded-xl relative">
          <h1 class="text-4xl font-bold inline border-b-primary mb-2 underline decoration-primary decoration-4 underline-offset-4">Willkommen bei Haarstudio Pauli</h1>
          <p class="text-xl my-1">Erleben Sie Exzellenz und Präzision bei jedem Termin.</p>
          <Button href="/booking" class="text-base mt-4 bg-primary text-black font-bold p-2 px-4 rounded-md">Termin Buchen</Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <div class="max-w-5xl mx-auto mb-10 p-4">
    <h2 class="text-2xl font-bold text-center mb-8">Unsere Leistungen</h2>
    <div class="space-y-6">
      {#each categoryRows as row}
        <div class="flex flex-wrap justify-center gap-6">
          {#each row as category}
            <a href="/leistungen?tab={category.name}" class="flex flex-col items-center text-center w-60">
              <div class="flex flex-col items-center text-center w-60">
                <div class="text-lg font-bold border-b-primary pb-1 underline decoration-primary decoration-2 underline-offset-4">{category.name}</div>
                <img class="w-full h-40 object-cover rounded-md mt-2" src="https://picsum.photos/150" alt={category.name} />
              </div>
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

