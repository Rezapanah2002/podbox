export default async function fetchMenu() {
  const clientId = process.env.CLIENT_ID;
  const revalidationTime = process.env.REVALIDATION_TIME;
  const api = process.env.API_ADD;

  const res = await fetch(api, {
    method: "GET",
    headers: {
      "client-id": clientId,
    },
    next: { revalidate: revalidationTime },
  });

  const menu = await res.json();
  return menu;
}
