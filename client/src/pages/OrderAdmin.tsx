import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_LINK } from "../default-value";
import "../styles/pages/Admin.scss";
import Loading from "../components/Loading";

const OrderAdmin = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${API_LINK}/order/all`);
    setData(res.data.data);
    setLoading(false);
  };
  const updateStatus = async (orderId: string, newStatus: string) => {
    try {
      const res = await axios.patch(`${API_LINK}/order/setStatus`, {
        orderId,
        status: newStatus,
      });
      console.log(res.data);
      fetchData(); // Refresh the data after updating status
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear().toString().slice(-2); // Extract last two digits of the year

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="newAdmin">
      <div className="container">
        <div className="newAdmin__lists">
          {loading ? (
            <Loading />
          ) : (
            data.map((item) => {
              return (
                <div className="newAdmin__item-order">
                  <div className="newAdmin__order-item">
                    <div className="newAdmin__item-title">
                      {item?.userID?.username}
                    </div>
                    <div className="newAdmin__item-time">
                      {formatTime(item?.createdAt)}
                    </div>

                    <div className="newAdmin__item-price">{item?.total}$</div>
                    <div
                      className={`newAdmin__item-status ${
                        item?.status === "done"
                          ? "done"
                          : item?.status === "delivery"
                          ? "delivery"
                          : "new"
                      }`}
                    >
                      {item?.status === "done"
                        ? "Done"
                        : item?.status === "delivery"
                        ? "Delivery"
                        : "New"}
                    </div>

                    <button
                      className="newAdmin__item-done"
                      onClick={() => updateStatus(item._id, "done")}
                    >
                      Done
                    </button>
                    <button
                      className="newAdmin__item-delivery"
                      onClick={() => updateStatus(item._id, "delivery")}
                    >
                      Delivery
                    </button>
                    <button
                      className="newAdmin__item-new"
                      onClick={() => updateStatus(item._id, "new")}
                    >
                      New
                    </button>
                  </div>

                  <div className="newAdmin__product-items">
                    {item?.items?.map((product: any) => {
                      return (
                        <div className="newAdmin__product-item">
                          <span>Id: {product?.product._id}</span>

                          <span>Name: {product?.product.name}</span>
                          <span>Price: {product?.price}</span>
                          <span>Quantity: {product?.quantity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderAdmin;
