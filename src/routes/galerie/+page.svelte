<script lang="ts">
  import type { PageData } from "./$types";

  import { PUBLIC_STRAPI_HOST } from "$env/static/public";

  export let data: PageData;
</script>

<div class="max-w-5xl mx-auto flex gap-20">
  <div class="columns-1 md:columns-3 gap-6">
    {#each data.images as image}
      <div class="p-3 md:p-0">
        <img class="md:mb-6 rounded-xl" src={PUBLIC_STRAPI_HOST + image.formats.small.url} alt={image.alt} />
      </div>
    {/each}
  </div>
</div>

