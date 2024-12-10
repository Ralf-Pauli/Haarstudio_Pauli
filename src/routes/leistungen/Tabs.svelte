<script lang="ts">
  import Tab from "./Tab.svelte";
  import { Button } from "$lib/components/ui/button";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  export let categories: any;
  export let setActiveCategory: Function;

  let buttonRow: any;

  const scrollLeft = () => {
    buttonRow.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    buttonRow.scrollBy({ left: 100, behavior: "smooth" });
  };
</script>

<div class="overflow-hidden flex items-center">
  <Button class="md:hidden p-2 hover:bg-transparent" size="icon" variant="ghost" on:click={scrollLeft}>
    <ChevronLeft />
  </Button>
  <div bind:this={buttonRow} id="tabcon" class="flex md:flex-col items-start overflow-x-auto scroll-smooth">
    {#each categories as category}
      <Tab {category} {setActiveCategory} />
    {/each}
  </div>
  <Button class="md:hidden p-2 hover:bg-transparent" size="icon" variant="ghost" on:click={scrollRight}>
    <ChevronRight />
  </Button>
</div>
