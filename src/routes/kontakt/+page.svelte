<script lang="ts">
  import type { PageData } from "../../../.svelte-kit/types/src/routes/$types.js";
  import { PUBLIC_GOOGLE_MAPS_API_KEY, PUBLIC_PLACE_ID, PUBLIC_STRAPI_HOST } from "$env/static/public";
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
<div class="map-container w-screen md:max-w-5xl h-2/6 mt-10 block relative mx-auto">
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
    <div class="w-[100%] h-full object-cover bg-[url('$lib/assets/map-background.svg')] bg-repeat-space opacity-20 dark:opacity-5 bg-center" />

    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#191719] bg-opacity-20 dark:bg-opacity-80 w-full sm:w-2/5">
      <div class="text-center text-black dark:text-white p-4">
        <p>
          Mit dem Laden der Karte akzeptieren Sie die Datenschutzerklärung von Google.<br />
          <a
            href="https://policies.google.com/privacy"
            class="dark:text-blue-300 dark:hover:text-blue-500 text-blue-500 hover:text-blue-700"
            rel="nofollow noopener noreferrer"
            target="_blank">Mehr erfahren</a>
        </p>
        <p class="my-2">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={loadMap}>Karte laden</button>
        </p>
        <div class="flex justify-center gap-2">
          <Checkbox aria-label="Always load maps" id="always-load-maps" bind:checked />
          <label for="always-load-maps" class="inline-block align-top leading-5"> Google Maps immer erlauben </label>
        </div>
      </div>
    </div>
  {/if}
</div>

<div class="contact-info sm:my-20 max-w-5xl mx-auto gap-4 flex flex-col sm:flex-row justify-between">
  <div>
    <h4 class="mb-3 text-xl font-semibold decoration-primary underline decoration-1 underline-offset-3">Kontakt</h4>
    <div>
      <div class="flex flex-col mb-1">
        <p class="dark:text-zinc-400 text-zinc-600">Anschrift:</p>
        <div>
          {contactPage.address.street}
          {contactPage.address.house_number},
          {contactPage.address.zip_code}
          {contactPage.address.city}
        </div>
      </div>
      <div class="flex flex-col mb-1">
        <p class="dark:text-zinc-400 text-zinc-600">Telefon:</p>
        <a href="tel:{contactPage.details.phone_number}">{contactPage.details.phone_number}</a>
      </div>
    </div>
  </div>

  <div>
    <h4 class="mb-3 text-xl font-semibold underline decoration-primary decoration-1 underline-offset-3">Social Media</h4>
    <div class="flex flex-col gap-2">
      {#each contactPage.social_media as socialMedia}
        <div class="">
          <a href={socialMedia.url} target="_blank">
            <img src={PUBLIC_STRAPI_HOST + socialMedia.icon.formats.small.url} alt={socialMedia.name} class="h-[1em] inline mb-1 mr-[8px]" />{socialMedia.name}
          </a>
        </div>
      {/each}
    </div>
  </div>

  <div>
    <h4 class="mb-3 text-xl font-semibold underline decoration-primary decoration-1 underline-offset-3">Öffnungszeiten</h4>
    <div class="flex flex-col gap-1">
      {#each contactPage.opening_hours as openingHour}
        <div class="">
          <div class="dark:text-zinc-400 text-zinc-600">{openingHour.days}:</div>
          <div>{openingHour.closed ? "Geschlossen" : `${openingHour.begin.slice(0, 5)} - ${openingHour.end.slice(0, 5)}`}</div>
        </div>
      {/each}
    </div>
  </div>

  <div>
    <h4 class="mb-3 text-xl font-semibold underline decoration-primary decoration-1 underline-offset-3">Rechtliches</h4>
    <div class="flex flex-col gap-1">
      <a href="/impressum">Impressum</a>
      <a href="/datenschutz">Datenschutz</a>
    </div>
  </div>
</div>

