import React, { useState } from "react";
import "../../styles/sections/checkout/ShippingAddress.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { API_LINK } from "../../default-value";
import { IProduct } from "../../types/product";
import { useNavigate } from "react-router-dom";

type IShippingAddress = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
};

const ShippingAddress = ({ products, total, cartId }: any) => {
  const user = useSelector((state: RootState) => state.account.user);
  const navigator = useNavigate();
  const [shippingAddress, setShippingAddress] = useState<IShippingAddress>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    const itemsCart = products.map((product: IProduct) => ({
      product: product._id,
      quantity: product.quantity,
      price: product.price,
    }));
    const body = {
      userID: user?._id,
      items: itemsCart,
      total: total,
      status: true,
    };

    try {
      const res = await axios.post(`${API_LINK}/order/`, body);
      const res2 = await axios.patch(`${API_LINK}/cart/clear/${cartId}`);
      alert("Payment successfully");
      navigator("/");
    } catch (error) {
      alert("Payment failure");
    }
  };

  return (
    <div className="form-shiping-address">
      <form className="contact-information">
        <label className="content-header1">Contact information</label>
        <label className="email">
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={user?.mail}
          />
        </label>
        <label className="checkbox">
          <input type="checkbox" name="newsletter" />
          <p> Keep me up to date on news and exclusive offers</p>
        </label>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="content">
          <label className="content-header">Shipping Address</label>
          <div className="name">
            <label>
              <input
                type="text"
                name="fullname"
                placeholder="fullname"
                value={user?.fullname}
                required
                disabled
              />
            </label>
            <label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={user?.username}
                required
                disabled
              />
            </label>
          </div>
          <label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={shippingAddress.phone}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="button" onClick={() => handleSubmit()}>
          <div>Complete Payment</div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
