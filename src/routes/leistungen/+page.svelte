<script lang="ts">
  import { onMount } from "svelte";
  import Tabs from "./Tabs.svelte";
  import Category from "./Category.svelte";
  import type { PageData } from "./$types";
  import { browser } from "$app/environment";

  export let data: PageData;
  let { categories, tabsValueParam } = data;
  let activeCategoryId: number | null = null;
  let activeServiceId: number | null = null;

  onMount(() => {
    (() => {
      setActiveCategory(categories[0].id);
    })();

    if (tabsValueParam) {
      const activeCategory = categories.find((category: any) => category.name === tabsValueParam);
      if (activeCategory) {
        setActiveCategory(activeCategory.id);
      }
    }
  });

  $: {
    if (browser) {
      const tabContainer = document.getElementById("tabcon");

      if (tabContainer) {
        tabContainer.childNodes.forEach((node: any) => {
          if (node.classList === undefined) return;
          if (getActiveCategory().name === node.textContent.trim()) {
            node.classList.replace("border-transparent", "border-primary");
          } else node.classList.replace("border-primary", "border-transparent");
        });
      }
    }
  }

  function getActiveCategory() {
    return categories.find((c: any) => c.id === activeCategoryId) || categories[0];
  }

  function setActiveCategory(categoryId: number) {
    activeCategoryId = categoryId;
  }

  function toggleService(serviceId: number) {
    activeServiceId = activeServiceId === serviceId ? null : serviceId;
  }
</script>

<div class="max-w-5xl mx-auto mt-10 flex gap-20">
  <Tabs {categories} {setActiveCategory} />
  <div class="flex gap-3 pt-3 w-full">
    {#key activeCategoryId}
      {#if activeCategoryId === null}
        <div class="m-auto w-16 h-16 border-8 border-dashed rounded-full animate-spin border-gray-500" />
      {:else}
        <Category category={getActiveCategory()} {activeServiceId} {toggleService} />
      {/if}
    {/key}
  </div>
</div>
