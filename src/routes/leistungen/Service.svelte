<script lang="ts">
  import { Separator } from "$components/ui/separator";

  export let service: any, activeServiceId: any, toggleService: any;

  let formatPrice = (price: any) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };
</script>

<div class="w-1/2 px-6 pb-10">
  {#if service.sub_services.length > 0}
    <div class="flex gap-2 items-center">
      <div class="inline font-bold border-b-primary pb-1 mb-2 underline decoration-primary decoration-2 underline-offset-4">{service.name}</div>
    </div>
    <div class="flex flex-col gap-1 ml-6 mt-3">
      {#each service.sub_services as subService, index}
        <div class="flex">
          <div>{subService.name}</div>
          <div class="font-bold ml-auto">{formatPrice(subService.price)}</div>
        </div>
        {#if index !== service.sub_services.length - 1}
          <Separator class="bg-gray-700" />
        {/if}
      {/each}
    </div>
  {:else}
    <div class="flex items-center">
      <div class="inline">{service.name}</div>
      {#if service.price !== null}
        <div class="font-bold ml-auto">{formatPrice(service.price)}</div>
      {/if}
    </div>
  {/if}
</div>
