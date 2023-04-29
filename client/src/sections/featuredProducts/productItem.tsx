import React from "react";
import "../../styles/sections/featuredProducts/productItem.scss";
import { IProduct } from "../../types/product";
import { API_IMAGES } from "../../default-value";
type TProp = {
  data: IProduct;
};
const ProductItem = (data: TProp) => {
  return (
    <div className="productItem">
      <div className="productItem__img-wrapper">
        <img
          src={`${API_IMAGES}/images/${data.data.images[0]}`}
          alt=""
          className="productItem__img"
        />
        <div className="productItem__tags">
          <div
            className="productItem__tag"
            style={{
              backgroundColor: `#cd3b37`,
              color: `#ffffff`,
            }}
          >
            {data.data.tags}
          </div>
        </div>
      </div>
      <div className="productItem__title">{data.data.name}</div>
      <div className="productItem__price">${data.data.price}</div>
    </div>
  );
};

export default ProductItem;
