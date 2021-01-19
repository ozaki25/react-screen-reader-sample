export async function getItems() {
  const res = await fetch('https://qiita.com/api/v2/items');
  const json = await res.json();
  return json;
}
