
export async function fetchApi() {
    const response = await fetch('https://isko88.github.io/apipizza.json');
    // waits until the request completes...
    return response.json()
  }