export default async function fetchMenu() {
  const clientId = process.env.CLIENT_ID;
  const revalidationTime = process.env.REVALIDATION_TIME;

  const res = await fetch(
    `https://rad-services.pod.ir/api/cms/tag-categories/tree/list/3439`,
    {
      method: "GET",
      headers: {
        "client-id": clientId,
      },
      next: { revalidate: revalidationTime },
    }
  );

  const menu = await res.json();
  return menu;
}
