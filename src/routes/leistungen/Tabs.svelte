<script lang="ts">
  export let categories: any;
  export let activeCategoryId: any;
  export let setActiveCategory: any;
</script>

<div class="flex flex-col items-start">
  {#each categories as category}
    <button
      class="m-2 p-1 pl-2 w-full text-left border-solid border-l-2 border-transparent"
      on:click={(value) => {
        setActiveCategory(category.id);
        value.originalTarget.parentElement.childNodes.forEach((node) => {
          node.classList.replace("border-primary", "border-transparent");
        });
        value.originalTarget.classList.replace("border-transparent", "border-primary");
      }}>
      {category.name}
    </button>
  {/each}
</div>
