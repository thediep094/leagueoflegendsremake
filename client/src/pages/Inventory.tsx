import "../styles/base.scss"
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import '../styles/pages/Inventory.scss';


interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const initialItems: Item[] = [
  { id: 1, name: "Item 1", image: "item1.jpg", price: 10, quantity: 10 },
  { id: 2, name: "Item 2", image: "item2.jpg", price: 20, quantity: 5 },
  { id: 3, name: "Item 3", image: "item3.jpg", price: 30, quantity: 3 },
];

const Inventory = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [newItem, setNewItem] = useState<Item>({
    id: 0,
    name: "",
    image: "",
    price: 0,
    quantity: 0,
  });

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ id: 0, name: "", image: "", price: 0, quantity: 0 });
  };

  const handleDeleteItem = (itemId: number) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };
  

  return (
    <div className="inventory">
      <h1>Inventory</h1>
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Item</h2>
      <form>
        <label>ID:</label>
        <input
          type="number"
          value={newItem.id}
          onChange={(e) =>
            setNewItem({ ...newItem, id: parseInt(e.target.value) })
          }
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <br />
        <label>Image:</label>
        <input
          type="text"
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          value={newItem.price}
          onChange={(e) =>
            setNewItem({ ...newItem, price: parseInt(e.target.value) })
          }/>
          <br />
          <label>Quantity:</label>
          <input
            type="number"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
            }
          />
          <br />
          <button type="button" onClick={handleAddItem}>
            Add Item
          </button>
        </form>
      </div>
      );
    };
    
export default Inventory;