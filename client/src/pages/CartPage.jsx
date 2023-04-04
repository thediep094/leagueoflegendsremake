import React, { Fragment, useEffect } from "react";
import Header from "../sections/Header";
import Cart from "../sections/cart/Cart";

function CartPage() {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch(
  //         ``
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <div className="CartPage">
      <Header />
      <Cart />
    </div>
  );
}

export default CartPage;
