import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { IProduct } from "../../types/product";
import "../../styles/sections/featuredProducts/featuredProduct.scss";
import axios from "axios";
import { API_LINK } from "../../default-value";
import Loading from "../../components/Loading";
const FeaturedProducts = () => {
  const [data, setData] = useState<IProduct[]>();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${API_LINK}/products?page=1&limit=20`);
    setData(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="featuredProduct">
      <div className="container">
        <div
          className="row"
          style={{
            position: "relative",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            data?.map((item: IProduct, index: any) => {
              return (
                <div
                  className="col-12 col-lg-3"
                  key={index}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <a href={`/product/${item._id}`}>
                    <ProductItem data={item as IProduct} key={index} />
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
