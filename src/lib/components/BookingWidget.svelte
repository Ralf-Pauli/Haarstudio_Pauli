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
    script.src = `https://connect.shore.com/widget/booking.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  });
</script>