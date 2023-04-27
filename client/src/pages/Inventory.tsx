import React, { useState } from 'react';
import ProductList from '../sections/inventory/ProductList';
import AddProductForm from '../sections/inventory/AddProductForm';

interface Product {
  id: number;
  name: string;
  image: string[];
  price: number;
  quantity: number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    image:['https://via.placeholder.com/100x100.png',
    'https://via.placeholder.com/100x100.png'],
    price: 10,
    quantity: 5,
  },
  {
    id: 2,
    name: 'Product 2',
    image: ['https://via.placeholder.com/100x100.png',
    'https://via.placeholder.com/100x100.png'],
    price: 20,
    quantity: 10,
  },
];

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (id: number) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return (
    <div>
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default App;
