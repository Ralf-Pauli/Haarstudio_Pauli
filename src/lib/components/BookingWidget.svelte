<script lang="ts">
  import { onMount } from "svelte";

  export let settings = {
    themeColor: '#e1a847',
    textColor: '#1f1f1f',
    text: 'Jetzt Termin buchen',
    company: 'haarstudio-pauli',
    locale: 'de',
    position: 'left',
    selectLocation: false,
  };

  onMount(() => {
    window.shoreBookingSettings = settings;
    const script = document.createElement("script");
    script.src = "https://connect.shore.com/widget/booking.js";
    document.body.appendChild(script);
  });
</script>

<style>
    :global(.SBW-button > svg) {
        display: initial !important;
        vertical-align: baseline !important;
        margin-bottom: -3px;
        margin-right: 10px;
    }

    :global(img, svg, video, canvas, audio, iframe, embed, object) {
        display: initial;
        vertical-align: baseline;
    }
</style>