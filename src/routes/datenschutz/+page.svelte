<script lang="ts">
  import type { PageData } from "./$types";
  import { marked } from "marked";

  export let data: PageData;

  let privacyMarkdown = data.privacy;
</script>

<article class="prose prose-stone dark:prose-invert max-w-5xl mx-auto">
  {@html marked.parse(privacyMarkdown)}
</article>
