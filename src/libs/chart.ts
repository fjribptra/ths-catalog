export async function getUserProductsById(userId: string) {
    const response = await fetch(`${process.env.API_ENDPOINT}/api/cart/${userId}`);
    const data = await response.json();
    return data;
  }