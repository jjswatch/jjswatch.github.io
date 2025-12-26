const API_BASE = "/api";

async function apiGet(url) {
  const res = await fetch(API_BASE + url);
  return await res.json();
}
