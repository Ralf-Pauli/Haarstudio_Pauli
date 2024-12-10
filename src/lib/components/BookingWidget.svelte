<script lang="ts">
  import { onMount } from "svelte";

  export let settings = {
    themeColor: "#e1a847",
    textColor: "#1f1f1f",
    text: "Jetzt Termin buchen",
    company: "haarstudio-pauli",
    locale: "de",
    position: "left",
    selectLocation: false,
  };

  let widgetLoaded = false;

  onMount(() => {
    window.shoreBookingSettings = settings;

    const script = document.createElement("script");
    script.src = `https://connect.shore.com/widget/booking.js?v=${Date.now()}`;

    script.onload = () => {
      widgetLoaded = true;
      console.log("Widget successfully loaded.");
    };

    script.onerror = (event) => {
      console.error("Widget could not be loaded. Details:", event);
    };

    document.body.appendChild(script);
  });
</script>

{#if widgetLoaded}
  <div class="widget-container">

  </div>
{:else}
  <div class="placeholder">

    <p>Widget wird geladen...</p>
  </div>
{/if}
