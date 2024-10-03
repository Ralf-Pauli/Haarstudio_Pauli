import { PUBLIC_API_TOKEN, PUBLIC_STRAPI_HOST } from "$env/static/public";

const DEFAULT_METHOD = "GET";

async function handleFetchError(response: Response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function strapiFetch(
  fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>,
  endpoint: string,
): Promise<any> {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${PUBLIC_API_TOKEN}`);

  const url = `${PUBLIC_STRAPI_HOST}/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: DEFAULT_METHOD,
      headers,
    });

    // Handle fetch error and parse JSON response
    return await handleFetchError(response);
  } catch (error) {
    console.error(error);
    throw error instanceof Error ? error : new Error("Invalid JSON response");
  }
}