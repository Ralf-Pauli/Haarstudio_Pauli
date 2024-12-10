import { strapiFetch } from "$lib/utils/api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const gallery = await strapiFetch(fetch, "api/gallery?populate=*");
  return { images: gallery.data.images };
};
