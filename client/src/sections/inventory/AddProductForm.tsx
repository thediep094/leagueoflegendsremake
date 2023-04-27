import React, { useState } from 'react';
import '../../styles/sections/inventory/AddProductForm.scss';

interface Product {
  id: number;
  name: string;
  image: string[];
  price: number;
  quantity: number;
}

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<string[]>([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const product = { id, name, image, price, quantity };
    onAddProduct(product);
    setName('');
    setImage([]);
    setPrice(0);
    setQuantity(0);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const urls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
        urls.push(url);
      }
      setImage(urls);
    } else {
      setImage([]);
    }
  };

  return (
    <div className="form-main">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" multiple onChange={handleImageChange} />
          {image.map((url, index) => (
            <img key={index} src={url} alt={`Product ${index + 1}`} />
          ))}
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            step="0.01"
            min="0"
            value={price}
            onChange={(event) => setPrice(parseFloat(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
