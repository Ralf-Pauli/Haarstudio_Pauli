<script lang="ts">
  import InfoCard from "$components/navbar/InfoCard.svelte";
  import addressIcon from "$lib/assets/maps-and-flags.png";
  import phoneIcon from "$lib/assets/phone-receiver-silhouette.png";
  import facebookLogo from "$lib/assets/Facebook_Logo_Primary.png"

  export let footer: any;
</script>
<footer class="w-full flex gap-16 mx-auto justify-between pt-4 inset-x-0 h-44 max-w-5xl sticky top-[100vh]">
      <InfoCard>
        <div slot="title">Kontakt</div>
        <div slot="content">
          <div class="flex h-full items-center gap-2">
            <img alt="Address Icon" class="h-[15px]" src={phoneIcon}>
            <a class="my-auto" href="tel:{footer.contact.phone_number}">{footer.contact.phone_number}</a>
          </div>
          <div class="mt-3">
            <a href="https://facebook.com/people/Haarstudio-Pauli/61553966530565/">
              <img alt="Facebook"
                   class="h-[20px]"
                   src="{facebookLogo}">
            </a>
          </div>
        </div>
      </InfoCard>
      <InfoCard>
        <p slot="title">Addresse</p>
        <div slot="content">
          <div class="flex flex-row items-center gap-2">
            <img alt="Address Icon" class="h-5" src={addressIcon}>
            <div>
              <p> {footer.address.street} {footer.address.house_number}</p>
              <p>{footer.address.zip_code} {footer.address.city}</p>
            </div>
          </div>
        </div>
      </InfoCard>
      <InfoCard>
        <div slot="title">Informationen</div>
        <div class="flex flex-col gap-1" slot="content">
          <a href="/kontakt">Kontakt</a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </InfoCard>
</footer>