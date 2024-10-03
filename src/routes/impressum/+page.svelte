<script lang="ts">
  import type { PageData } from "./$types";
  import { marked } from "marked";

  export let data: PageData;

  let imprintMarkdown = data.imprint;
</script>

<article class="prose prose-stone dark:prose-invert max-w-5xl mx-auto mt-10">
  {@html marked.parse(imprintMarkdown)}
</article>
