import React from 'react';
import '../../styles/sections/inventory/ProductList.scss';

interface Product {
  id: number;
  name: string;
  image: string[];
  price: number;
  quantity: number;
}

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDeleteProduct }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
              {product.image.map((image, index) => (
                  <img key={index} src={image} alt={product.name} width="100" height="100" />
                ))}
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
