<script lang="ts">
  import { strapiFetch } from "$lib/utils/api";

  import { PUBLIC_STRAPI_HOST } from "$env/static/public";

  async function getSocialMedia() {
    return await strapiFetch(fetch, "api/contact-page?fields[0]&populate[0]=social_media&populate[4]=social_media.icon").then((data) => data.data.social_media);
  }

  let socialMediaPromise = getSocialMedia();
</script>

<footer class="w-full grid grid-cols-3 mx-auto pt-4 inset-x-0 h-16 max-w-5xl sticky top-[100vh] text-sm">
  <!--  TODO: use correct name -->
  <p class="flex-shrink-0">&copy; {new Date().getFullYear()} Haarstudio Pauli</p>
  <div class="mx-auto">
    {#await socialMediaPromise then socialMedia}
      {#each socialMedia as item}
        <a href={item.url} target="_blank">
          <img src={PUBLIC_STRAPI_HOST + item.icon.formats.small.url} alt={item.name} class="inline w-[16px] h-[16px] mx-1" />
        </a>
      {/each}
    {/await}
  </div>
  <div class="ml-auto">
    <a href="/impressum">Impressum</a>
    <span>|</span>
    <a href="/datenschutz">Datenschutzerklärung</a>
  </div>
</footer>

<style>
  footer > div > a:hover {
    text-decoration: underline;
  }
</style>
