<script lang="ts">
  import type { PageData } from "./$types";

  import { PUBLIC_STRAPI_HOST } from "$env/static/public";

  export let data: PageData;

  const allImages = data.images.map((image: any) => ({
    alt: image.alternativeText,
    src: PUBLIC_STRAPI_HOST + image.url,
    height: image.height,
    width: image.width,
  }));
</script>

<div class="max-w-5xl mx-auto flex gap-20">
  <div class="columns-1 md:columns-3 gap-6">
    {#each allImages as image}
      <div class="p-3 md:p-0">
        <img class="md:mb-6 rounded-xl" src={image.src} alt={image.alt} />
      </div>
    {/each}
  </div>
</div>

