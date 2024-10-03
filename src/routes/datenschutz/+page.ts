import type { PageLoad } from "./$types";
import { strapiFetch } from "$lib/utils/api";

export const load: PageLoad = async ({ fetch }) => {
  const privacyFetch = await strapiFetch(fetch, "api/privacy?populate=*");
  return { privacy: privacyFetch.data.privacy };
};
