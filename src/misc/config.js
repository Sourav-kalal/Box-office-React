const APP_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet (query) {
  const results = await fetch(`${APP_BASE_URL}${query}`).then(r => r.json());
  return results;
}
