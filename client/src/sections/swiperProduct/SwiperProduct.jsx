import Swiper from "swiper";
import "swiper/swiper.min.css";
import "../../styles/sections/swiperProduct/SwiperProduct.scss";
import React, { useEffect, useRef } from "react";

const SwiperProduct = () => {
  const swiperRef = useRef(null);
  let swiper;

  useEffect(() => {
    if (swiperRef.current) {
      swiper = new Swiper(swiperRef.current, {
        // Add your options here
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt1dc468f06743f7cc/63517745d27c4a22ea5bd494/Valorant_Secretlab_In-Game_Client_Promo_Banner_(2560x1098).jpg?auto=webp&width=1242&quality=85"
            alt="1"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fkyou.id%2Fitems%2F103711%2Fpvc-figure-17-star-guardian-zoe-league-of-legends&psig=AOvVaw1Hw8naxO1osLxkTwgJejtv&ust=1680715268614000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJj19rbekP4CFQAAAAAdAAAAABAE"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          https://images.goodsmile.info/cgm/images/product/20220705/12942/101405/large/452e69c4f154caa36628bb4dedda8b92.jpg
        </div>
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SwiperProduct;
