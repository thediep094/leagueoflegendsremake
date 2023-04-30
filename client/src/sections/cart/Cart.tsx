import React, { useState, useEffect } from "react";
import "../../styles/sections/cart/cart.scss";
import ButtonShop from "../../components/button/ButtonShop";
import { IProduct } from "../../types/product";
import axios from "axios";
import { API_IMAGES, API_LINK } from "../../default-value";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const user = useSelector((state: RootState) => state.account.user);
  const [cartId, setCartId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${API_LINK}/cart/`,
        {
          verify_id: localStorage?.getItem("accessToken"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("accessToken")}`,
          },
        }
      );
      setData(res.data.cart.productList);
      console.log(res.data.cart);
      setCartId(res.data.cart._id);
      setTotalPrice(
        res.data.cart.productList.reduce(
          (acc: any, obj: any) => acc + obj.price * obj.quantity,
          0
        )
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleQuantity = (id: string, quantity: number) => {
    const updateData = async () => {
      setLoading(true);
      try {
        if (user) {
          const data = {
            productID: id,
            quantity: quantity,
          };
          const res = await axios.patch(
            `${API_LINK}/cart/updateQuantity/${cartId}`,
            data
          );
          fetchCart();
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    updateData();
  };

  const handleDelete = (id: string) => {
    const updateData = async () => {
      setLoading(true);
      try {
        if (user) {
          const data = {
            productID: id,
          };
          const res = await axios.patch(
            `${API_LINK}/cart/deleteProduct/${cartId}`,
            data
          );
          fetchCart();
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    updateData();
  };

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <div className="cart">
      <div className="container cart-wrapper">
        <div className="row cart-wrapper-row">
          <div className="cart-items col-lg-8 col-12">
            <h1>Cart({data && data.length ? data.length : 0})</h1>
            <div className="cart-items__wrapper">
              <div className="cart-items__wrapper-heading grid-row">
                <div className="product-column">Product</div>
                <div className="product-price">Price</div>
              </div>

              <div className="cart-items__tiems">
                {data && data.length > 0
                  ? data.map((item: IProduct) => {
                      console.log(item);
                      return (
                        <div className="grid-row">
                          <div className="cart-items__tiem product-column">
                            <Link
                              to={`/product/${item._id}`}
                              className="cart-items__item-img"
                            >
                              <img
                                src={`${API_IMAGES}/images/${item.images}`}
                                alt=""
                              />
                            </Link>

                            <div className="cart-items__item-info product-meta">
                              <Link
                                to={`/product/${item._id}`}
                                className="cart-items__item-info-title"
                              >
                                {item.name}
                              </Link>

                              <label className="cart-items__item-info-quantity">
                                Qty:{" "}
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantity(
                                      item._id,
                                      Number(e.target.value)
                                    )
                                  }
                                />
                              </label>
                            </div>
                          </div>

                          <div className="product-price">
                            <div className="cart-items__item-price">
                              ${Number(item.price) * Number(item.quantity)}
                            </div>

                            <div
                              className="cart-items__item-remove"
                              onClickCapture={() => {
                                handleDelete(item._id);
                              }}
                            >
                              Remove
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : "Cart Empty"}
              </div>
            </div>
          </div>
          <div className="cart-totals col-lg-4 col-12">
            <div className="cart-totals__info">
              <div className="cart-totals__info-heading">
                <div className="cart-totals__subtitle">
                  Subtotal({data && data.length ? data.length : 0} items)
                </div>
                <div className="cart-totals__price">${totalPrice}</div>
              </div>
            </div>

            {loading ? (
              <Loading />
            ) : (
              <Link to={"/checkout"}>
                <ButtonShop name={"CHECK OUT"} />
              </Link>
            )}

            <div className="cart-totals__message">
              Taxes and shipping are calculated at checkout.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
