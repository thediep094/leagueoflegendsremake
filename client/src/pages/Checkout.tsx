import React, { Fragment, useEffect } from "react";
import ShippingAddress from "../sections/checkout/ShippingAddress";
import CheckoutBanner from "../sections/checkout/CheckoutBanner";
import ExpressCheckout from "../sections/checkout/ExpressCheckout";
import "../styles/pages/Checkout.scss"
import OrderSummary from "../sections/checkout/OrderSummary";

const products = 
[
  {
    id: 1,
    name: "The Mageseeker: A League of Legends Story Collector's Edition",
    image: "https://cdn.shopify.com/s/files/1/0055/9815/0690/products/1c403d1736899a47aa8e7c7fb74706ef_small.png?v=1681826504",
    tag: "North America / Switch",
    price: 9.99,
    quantity: 2,
  },
  {
    id: 2,
    name: "The Mageseeker: A League of Legends Story Collector's Edition",
    image: "https://cdn.shopify.com/s/files/1/0055/9815/0690/products/1c403d1736899a47aa8e7c7fb74706ef_small.png?v=1681826504",
    tag: "North America / Switch",
    price: 19.99,
    quantity: 1,
  },
];

const subtotal = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
const shippingFee = 0.0;
const total = subtotal + shippingFee;


const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-left">
        <div className="CheckoutBanner">
          <CheckoutBanner/>
          <div className="hide">
            <OrderSummary products={products}
              subtotal={subtotal}
              shippingFee={shippingFee}
              total={total}/>
          </div>
          </div>
       <div className="ExpressCheckout">
          <ExpressCheckout/>
       </div>
        <div className="ShippingAddress">
          <ShippingAddress/>
        </div>
      </div>
      <div className="Checkout-right">
        <OrderSummary products={products}
          subtotal={subtotal}
          shippingFee={shippingFee}
          total={total}/>
      </div>
    </div>
  );
};

export default Checkout;
