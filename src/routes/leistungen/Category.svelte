<script lang="ts">
  import Service from "./Service.svelte";

  export let category: any;
  export let activeServiceId: any;
  export let toggleService: any; // Ensure toggleService is declared as a prop
</script>

<div class="flex flex-col gap-4">
  {#each category.services as service}
    <Service {service} {activeServiceId} {toggleService} />
  {/each}
  {#if category.services.length == 0}
    <div class="text-center">No services available</div>
  {/if}
</div>
