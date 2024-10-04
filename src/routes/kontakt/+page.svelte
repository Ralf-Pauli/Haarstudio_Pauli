<script lang="ts">
  import type { PageData } from "./$types";
  import { PUBLIC_STRAPI_HOST } from "$env/static/public";

  import Map from "$lib/components/Map.svelte";

  export let data: PageData;
  let contactPage = data.contact_page;
</script>

<Map />
<div class="contact-info my-10 sm:my-20 max-w-5xl mx-auto gap-10 sm:gap-4 flex flex-col sm:flex-row justify-between text-center">
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
        <a class="hover:underline" href="tel:{contactPage.details.phone_number}">{contactPage.details.phone_number}</a>
      </div>
    </div>
  </div>

  <div>
    <h4 class="mb-3 text-xl font-semibold underline decoration-primary decoration-1 underline-offset-3">Social Media</h4>
    <div class="flex flex-col gap-2">
      {#each contactPage.social_media as socialMedia}
        <div>
          <a href={socialMedia.url} target="_blank" class="hover:underline">
            <img src={PUBLIC_STRAPI_HOST + socialMedia.icon.formats.small.url} alt={socialMedia.name} class="h-4 inline mb-1 mr-2" />
            {socialMedia.name}
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
      <a href="/impressum" class="hover:underline">Impressum</a>
      <a href="/datenschutz" class="hover:underline">Datenschutz</a>
    </div>
  </div>
</div>
