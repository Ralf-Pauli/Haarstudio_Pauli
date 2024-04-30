<script lang="ts">
  import { PUBLIC_STRAPI_HOST } from "$env/static/public";
  import type { PageData } from "../$types";

  export let data: PageData;

  const allImages = data.images.map((image: any) => ({
    alt: image.alternativeText,
    src: PUBLIC_STRAPI_HOST + image.url,
    height: image.height,
    width: image.width,
  }));
</script>

<div class="max-w-5xl mx-auto mt-10 flex gap-20">
  <div class="columns-3 gap-5">
    {#each allImages as image}
        <img class="mb-5" src={image.src} alt={image.alt}>
    {/each}
  </div>
</div>