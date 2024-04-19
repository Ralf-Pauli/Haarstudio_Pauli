<script lang="ts">
  import type { PageData } from "../../../.svelte-kit/types/src/routes/$types.js";
  import { PUBLIC_GOOGLE_MAPS_API_KEY, PUBLIC_PLACE_ID, PUBLIC_STRAPI_HOST } from "$env/static/public";
  import placeholderImage from "$lib/assets/31.jpg";
  import { createLocalStorage } from "$lib/shared/stores/local-storage";
  import { onMount } from "svelte";
  import { Spinner } from 'flowbite-svelte';

  export let data: PageData;
  let contactPage = data.contact_page;
  let loadGoogleMap = createLocalStorage<boolean>("load-google-map", false);
  let shouldLoad: boolean | null = false;
  let isLoading = true;

  onMount(() => {
    shouldLoad = loadGoogleMap.get();
    isLoading = false;
  });

  function handleAlwaysLoadChange(event: Event) {
    const target = event.target as HTMLInputElement;
    loadGoogleMap.set(target.checked);
  }
</script>


<!-- Map Section -->
<div class="map-container w-3/5 h-2/5 block relative mx-auto">
  {#if isLoading}
    <div class="w-full h-full bg-secondary inset-0 flex justify-center items-center">
      <Spinner class="text-center fill-primary absolute"/>
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
    <img class="w-full h-full object-cover" src={placeholderImage} alt="">

    <div class="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50">
      <div class="text-center text-white p-4">
        <p>Mit dem Laden der Karte akzeptieren Sie die Datenschutzerklärung von Google.<br>
          <a href="https://policies.google.com/privacy" class="text-blue-300 hover:text-blue-500"
             rel="nofollow noopener noreferrer" target="_blank">Mehr erfahren</a>
        </p>
        <p class="my-2">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  on:click={() => shouldLoad = true}>Karte laden
          </button>
        </p>
        <div class="flex justify-center">
          <label class="flex items-center">
            <input type="checkbox" class="mr-2" on:change="{handleAlwaysLoadChange}" checked="{loadGoogleMap.get()}">
            <small>Google Maps immer entsperren</small>
          </label>
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- Contact Information -->
<div class="contact-info mb-8 text-center">
  <h2 class="text-2xl font-bold mb-4">Kontaktinformationen</h2>
  <!-- Address -->
  <div class="address mb-4">
    <p><strong>Adresse:</strong> {contactPage.address.street} {contactPage.address.house_number}
      , {contactPage.address.zip_code} {contactPage.address.city}</p>
  </div>
  <!-- Phone Number -->
  <div class="phone mb-4">
    <p><strong>Telefon:</strong> <a href="tel:{contactPage.details.phone_number}">{contactPage.details.phone_number}</a>
    </p>
  </div>
  <!-- Opening Hours -->
  <div class="opening-hours">
    <h3 class="text-xl font-semibold mb-2">Öffnungszeiten</h3>
    {#each contactPage.opening_hours as openingHour}
      <p>
        {openingHour.days} : {openingHour.closed ? 'Geschlossen' : `${openingHour.begin.slice(0, 5)} - ${openingHour.end.slice(0, 5)}`}
      </p>
    {/each}
  </div>
</div>

<div>
  {#each contactPage.social_media as social_media}
    <a href="{social_media.url}">
      <img src="{PUBLIC_STRAPI_HOST}{social_media.icon.formats.thumbnail.url}" class="object-contain h-[30px]"
           alt="{social_media.name}"></a>
  {/each}
</div>
