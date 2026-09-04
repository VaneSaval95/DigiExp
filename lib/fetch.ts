export async function postJson(url: string, object: Record<string, any>) {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (e) {
    console.error("postJson", e);
  }
  return null;
}
