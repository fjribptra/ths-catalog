export async function getUserProductsById(userId: string) {
    const response = await fetch(`http://localhost:3000/api/cart/${userId}`);
    const data = await response.json();
    return data;
  }