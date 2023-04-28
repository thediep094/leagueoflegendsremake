import React from "react";
import "../../styles/sections/featuredProducts/productItem.scss";
import { IProduct } from "../../types/product";
type TProp = {
  data: IProduct;
};
const ProductItem = (data: TProp) => {
  return (
    <div className="productItem">
      <div className="productItem__img-wrapper">
        <img
          src={`data:image/jpeg;base64,${data.data.images[0].base64}`}
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
