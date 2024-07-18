import { DEFAULT_URL } from '@/constants';

// Interfaces
import { IProduct } from '@/interfaces/product';

export async function fetchProducts(): Promise<IProduct[]> {
    const response = await fetch(`${DEFAULT_URL}/products`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
}

export default {};
  