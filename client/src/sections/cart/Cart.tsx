import React, { useState } from "react";
import "../../styles/sections/cart/Cart.scss";
import ButtonShop from "../../components/button/ButtonShop";
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  onRemoveItem: (itemId: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleUpdateQuantity = (itemId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value);
    onUpdateQuantity(itemId, quantity);
  };

  const handleRemoveItem = (itemId: number) => {
    onRemoveItem(itemId);
  };

    const [shippingCost, setShippingCost] = useState(0);

    const calculateSubtotal = () => {
      return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    const calculateShipping = () => {
      return shippingCost;
    };
  
    const calculateTotal = () => {
      return calculateSubtotal() + calculateShipping();
    };
  
    const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setShippingCost(parseInt(e.target.value));
    }

  return (
    <div className="cart-container">
      <button className="cart-toggle-button" onClick={toggleCart}>
        Cart ({items.length})
      </button>
      {showCart && (
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div>{item.name}</div>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  max={10}
                  onChange={(e) => handleUpdateQuantity(item.id, e)}
                />
              </div>
              <div>${item.price}</div>
              <div>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
         
        </div>
      )}
       <div className="cart-shipping">
            <span>Estimated Shipping:</span>
            <div>
              <input
                type="radio"
                name="shipping"
                value="0"
                checked={shippingCost === 0}
                onChange={handleShippingChange}
              />
              <label>Free</label>
              <input
                type="radio"
                name="shipping"
                value="5"
                checked={shippingCost === 5}
                onChange={handleShippingChange}
              />
              <label>$5</label>
              <input
                type="radio"
                name="shipping"
                value="10"
                checked={shippingCost === 10}
                onChange={handleShippingChange}
              />
              <label>$10</label>
            </div>
          </div>
          <div className="cart-total">
            <span>Subtotal:</span>
            <strong>${calculateSubtotal()}</strong>
          </div>
          <div className="cart-total">
            <span>Shipping:</span>
            <strong>${calculateShipping()}</strong>
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <strong>${calculateTotal()}</strong>
          </div>
          <div className="cart-button">
              <ButtonShop name="Shop now" />
            </div>
    </div>
  );
};

export default Cart;
