// Product
import Product from '@/modules/products/components/Product';

// api
import  { fetchProducts } from '@/modules/products/api';   

// Interfaces
import { IProduct } from '@/interfaces/product';


const Products = async () => {
  let products: IProduct[] = [];
  let error: string | null = null;
  
  try {
    const result: IProduct[] = await fetchProducts();
    products = result;
  } catch (err: any) {
    error = err.message;
  }
  
  if (error) {
    return <div className="text-red-500">Oops, an error occurred. Please try later</div>;
  }
  
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            price={product.price}
            image={product.image}
            title={product.title}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};
  
  export default Products;
