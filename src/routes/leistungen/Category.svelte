<script lang="ts">
  import Service from "./Service.svelte";

  export let category: any;
  export let activeServiceId: any;
  export let toggleService: any; // Ensure toggleService is declared as a prop
</script>

<div class="flex w-full flex-wrap">
  {#if category.services.length == 0}
    <div class="pl-6 text-center">No services available</div>
  {:else}
    {#each category.services as service}
      <Service {service} {activeServiceId} {toggleService} />
    {/each}
  {/if}
</div>
