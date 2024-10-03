<script lang="ts">
  import { strapiFetch } from "$lib/utils/api";

  import { PUBLIC_STRAPI_HOST } from "$env/static/public";

  async function getSocialMedia() {
    return await strapiFetch(fetch, "api/contact-page?fields[0]&populate[0]=social_media&populate[4]=social_media.icon").then((data) => data.data.social_media);
  }

  let socialMediaPromise = getSocialMedia();
</script>

<footer class="w-full flex gap-16 mx-auto justify-between pt-4 inset-x-0 h-16 max-w-5xl sticky top-[100vh] text-sm">
  <!--  TODO: use correct name -->
  <p>&copy; {new Date().getFullYear()} Haarstudio Pauli</p>
  <div>
    {#await socialMediaPromise then socialMedia}
      {#each socialMedia as item}
        <a href={item.url} target="_blank">
          <img src={PUBLIC_STRAPI_HOST + item.icon.formats.small.url} alt={item.name} class="inline mb-1 w-[16px] h-[16px] mr-[8px]" />
        </a>
      {/each}
    {:catch error}
      {error.message}
    {/await}
  </div>
  <div>
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
