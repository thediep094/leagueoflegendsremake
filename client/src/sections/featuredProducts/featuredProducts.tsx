import React from "react";
import ProductItem from "./productItem";
import { IProduct } from "../../types/product";
import "../../styles/sections/featuredProducts/featuredProduct.scss";
const FeaturedProducts = () => {
  const testData = [
    {
      id: 1,
      img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png?auto=webp&width=349&quality=85",
      name: "Good Smile Star Guardian Ahri 1/7 Scale Statue",
      price: 214.99,
      tags: [
        {
          title: "preorder",
          color: "#ffffff",
          background: "#cd3b37",
        },
        {
          title: "preorder2",
          color: "#cd3b37",
          background: "#ffffff",
        },
      ],
    },
    {
      id: 2,
      img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png?auto=webp&width=349&quality=85",
      name: "Good Smile Star Guardian Ahri 1/7 Scale Statue",
      price: 214.99,
      tags: [
        {
          title: "preorder",
          color: "#ffffff",
          background: "#cd3b37",
        },
      ],
    },
    {
      id: 3,
      img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png?auto=webp&width=349&quality=85",
      name: "Good Smile Star Guardian Ahri 1/7 Scale Statue",
      price: 214.99,
      tags: [
        {
          title: "preorder",
          color: "#ffffff",
          background: "#cd3b37",
        },
      ],
    },
    {
      id: 4,
      img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png?auto=webp&width=349&quality=85",
      name: "Good Smile Star Guardian Ahri 1/7 Scale Statue",
      price: 214.99,
      tags: [
        {
          title: "preorder",
          color: "#ffffff",
          background: "#cd3b37",
        },
      ],
    },
    {
      id: 5,
      img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png?auto=webp&width=349&quality=85",
      name: "Good Smile Star Guardian Ahri 1/7 Scale Statue",
      price: 214.99,
      tags: [
        {
          title: "preorder",
          color: "#ffffff",
          background: "#cd3b37",
        },
      ],
    },
  ];
  return (
    <div className="featuredProduct">
      <div className="container">
        <div className="row">
          {testData.map((item, index) => {
            return (
              <div
                className="col-12 col-lg-3"
                key={index}
                style={{
                  marginBottom: "10px",
                }}
              >
                <a href={`/product/${item.id}`}>
                  <ProductItem data={item as IProduct} key={index} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
