<script lang="ts">
  import type { PageData } from "../../../.svelte-kit/types/src/routes/$types.js";
  import { PUBLIC_GOOGLE_MAPS_API_KEY, PUBLIC_PLACE_ID } from "$env/static/public";
  import { createLocalStorage } from "$lib/shared/stores/local-storage";
  import { onMount } from "svelte";
  import { Checkbox } from "$lib/components/ui/checkbox";

  export let data: PageData;
  let contactPage = data.contact_page;
  let loadGoogleMap = createLocalStorage<boolean>("load-google-map", false);
  let shouldLoad: boolean | null = false;
  let isLoading = true;
  let checked = false;

  onMount(() => {
    shouldLoad = loadGoogleMap.get() || false;
    isLoading = false;
  });

  function loadMap() {
    shouldLoad = true;
    let checkbox = document.getElementById("always-load-maps") as HTMLInputElement;
    console.log(checkbox);
    loadGoogleMap.set(checked);
  }
</script>

<!-- Map Section -->
<div class="map-container md:max-w-5xl h-2/6 mt-10 block relative mx-auto">
  {#if isLoading}
    <div class="w-full h-full inset-0 flex justify-center items-center">
      <div class="m-auto w-8 h-8 border-4 border-dashed rounded-full animate-spin border-t-primary" />
    </div>
  {:else if loadGoogleMap.get() || shouldLoad}
    <iframe
      title="Google Map"
      allowfullscreen
      class="w-full h-full"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key={PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:{PUBLIC_PLACE_ID}"
      style="border:0">
    </iframe>
  {:else}
    <div class="w-full h-full object-cover bg-[url('$lib/assets/map-background.svg')] bg-repeat-space opacity-5" />

    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#191719] bg-opacity-80 w-2/5">
      <div class="text-center text-white p-4">
        <p>
          Mit dem Laden der Karte akzeptieren Sie die Datenschutzerklärung von Google.<br />
          <a href="https://policies.google.com/privacy" class="text-blue-300 hover:text-blue-500" rel="nofollow noopener noreferrer" target="_blank">Mehr erfahren</a>
        </p>
        <p class="my-2">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={loadMap}>Karte laden</button>
        </p>
        <div class="flex justify-center gap-2">
          <Checkbox id="always-load-maps" bind:checked />
          <label for="always-load-maps" class="inline-block align-top leading-5"> Google Maps immer erlauben </label>
        </div>
      </div>
    </div>
  {/if}
</div>

<div class="contact-info mb-8 text-center flex justify-around mt-10 max-w-5xl mx-auto">
  <div>
    <h3 class="text-2xl font-semibold mb-2 underline decoration-primary decoration-2 underline-offset-4">Kontaktinformationen</h3>

    <div class="">
      <div class="mb-0.5 flex w-80">
        <strong class="inline">Adresse:</strong>
        <div class="ml-auto">
          {contactPage.address.street}
          {contactPage.address.house_number}
          , {contactPage.address.zip_code}
          {contactPage.address.city}
        </div>
      </div>

      <div class="flex w-80">
        <strong class="inline">Telefon:</strong>
        <a class="ml-auto" href="tel:{contactPage.details.phone_number}">{contactPage.details.phone_number}</a>
      </div>
    </div>
  </div>

  <div class="mb-0.5">
    <h3 class="text-2xl font-semibold mb-2 underline decoration-primary decoration-2 underline-offset-4">Öffnungszeiten</h3>
    {#each contactPage.opening_hours as openingHour}
      <div class="flex gap-3">
        <div class="font-bold inline">{openingHour.days}:</div>
        <div class="ml-auto">{openingHour.closed ? "Geschlossen" : `${openingHour.begin.slice(0, 5)} - ${openingHour.end.slice(0, 5)}`}</div>
      </div>
    {/each}
  </div>
</div>
