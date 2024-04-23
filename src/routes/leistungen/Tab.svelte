<script lang="ts">
  export let category: any;
  export let setActiveCategory: Function;
</script>

<button class="m-2 p-1 pl-2 w-full text-left border-solid border-l-2 border-transparent" on:click={setActiveCategory(category.id)}>
  {category.name}
</button>
