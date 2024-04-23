<script lang="ts">
  import Tab from "./Tab.svelte";

  export let categories: any;
  export let setActiveCategory: Function;
</script>

<div id="tabcon" class="flex flex-col items-start">
  {#each categories as category}
    <Tab {category} {setActiveCategory} />
  {/each}
</div>
