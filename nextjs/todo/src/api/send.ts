export default async function send(
  address: string,
  method: string = "GET",
  body?: object
) {
  try {
    const init = {
      headers: new Headers({
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        "Content-Type": "application/json",
      }),
      method: method,
      body: JSON.stringify(body),
    };

    let response: any;

    response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}${address}`,
      init
    );

    const data = await response.json();

    return data;
  } catch (e) {
    throw e;
  }
}
