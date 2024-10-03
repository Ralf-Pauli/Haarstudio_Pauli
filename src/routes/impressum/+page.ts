import type { PageLoad } from "./$types";
import { strapiFetch } from "$lib/utils/api";

export const load: PageLoad = async ({ fetch }) => {
  const imprintFetch = await strapiFetch(fetch, "api/imprint?populate=*");
  return { imprint: imprintFetch.data.imprint };
};
