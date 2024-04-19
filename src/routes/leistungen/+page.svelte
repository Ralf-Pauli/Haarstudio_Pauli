<script lang="ts">
  import { onMount } from "svelte";
  import Tabs from "./Tabs.svelte";
  import Category from "./Category.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { categories, tabsValueParam } = data;
  let activeCategoryId: number | null = null;
  let activeServiceId: number | null = null;

  onMount(() => {
    activeCategoryId = categories[0].id;
    // TODO: Set border for active tab button
    if (tabsValueParam) {
      const activeCategory = categories.find((category: any) => category.name === tabsValueParam);
      if (activeCategory) {
        setActiveCategory(activeCategory.id);
      }
    }
  });

  function setActiveCategory(categoryId: number) {
    activeCategoryId = categoryId;
  }

  function toggleService(serviceId: number) {
    activeServiceId = activeServiceId === serviceId ? null : serviceId;
  }
</script>

<div class="max-w-5xl mx-auto mt-10 flex gap-20">
  <Tabs {categories} {activeCategoryId} {setActiveCategory} />

  <div class="flex gap-3 pt-3">
    {#each categories as category}
      {#if activeCategoryId === category.id}
        <Category {category} {activeServiceId} {toggleService} />
      {/if}
    {/each}
  </div>
</div>
