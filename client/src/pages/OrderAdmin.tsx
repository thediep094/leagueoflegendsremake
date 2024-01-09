import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_LINK } from "../default-value";
import "../styles/pages/Admin.scss";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

const OrderAdmin = () => {
  const user = useSelector((state: RootState) => state.account.user);
  const navigation = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>("newest");

  const fetchData = async () => {
    setLoading(true);
    try {
      const url = filterStatus
        ? `${API_LINK}/order/all?filter=${filterStatus}&sortBy=${sortOption}`
        : `${API_LINK}/order/all?sortBy=${sortOption}`;

      const res = await axios.get(url);
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
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

  const delteteOrder = async (orderId: string) => {
    try {
      await axios.delete(`${API_LINK}/order/${orderId}`);

      alert("delete success");
      fetchData();
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterStatus, sortOption]);
  useEffect(() => {
    if (user?.role != "admin") {
      navigation("/");
    }
  }, [user]);
  return (
    <div className="newAdmin">
      <div className="container">
        <div className="filter">
          <label>Filter by Status:</label>
          <select
            value={filterStatus || ""}
            onChange={(e) => setFilterStatus(e.target.value || null)}
          >
            <option value="">All</option>
            <option value="new">New</option>
            <option value="delivery">Delivery</option>
            <option value="done">Done</option>
          </select>

          <label>Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="status">Status</option>
          </select>
        </div>
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
                    <button
                      className="newAdmin__item-delete"
                      style={{
                        marginTop: 0,
                      }}
                      onClick={() => delteteOrder(item._id)}
                    >
                      Delete
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
