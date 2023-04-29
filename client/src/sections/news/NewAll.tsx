import React, { useEffect, useState } from "react";
import Aos from "aos";
import { newsLeft } from "../../data/newsLeft";
import { newsRight } from "../../data/newsRight";
import "../../styles/sections/news/newAll.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_IMAGES, API_LINK } from "../../default-value";
import { INew } from "../../types/new";
import Loading from "../../components/Loading";
const NewAll = () => {
  const [listNews, setListNews] = useState<INew[]>();
  const [loading, setLoading] = useState(false);
  const fetchNews = async () => {
    setLoading(true);
    const res = await axios(`${API_LINK}/new/`);
    setListNews(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
    fetchNews();
  }, []);
  return (
    <div className="newsAll">
      <div className="newsAll__tag">LATEST NEWS</div>
      <div className="newsAll__container">
        <div className="newsAll__container__left">
          {loading ? <Loading /> : null}
          {listNews?.map((item: INew, index: number) => {
            return (
              <div
                className="newsAll__container__left__item"
                key={item._id}
                data-aos="fade-right"
              >
                <Link to={`/new/${item._id}`}>
                  <div className="newsAll__container__left__item__img">
                    <img src={`${API_IMAGES}/news/${item.img}`} alt="" />
                    <div className="newsAll__container__left__item__img__border"></div>
                  </div>
                </Link>
                <div className="newsAll__container__left__item__title">
                  <p>{item.tags}</p>
                  <Link
                    to={`/new/${item._id}`}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    <h1>{item.title}</h1>
                  </Link>
                  <span className="newsAll__container__left__item__title-expect">
                    {item.expect}
                  </span>
                  <h2>{item.createdAt}</h2>
                </div>
              </div>
            );
          })}
        </div>

        <div className="newsAll__container__right">
          {newsRight.map((item, index) => {
            return (
              <div
                className="newsAll__container__right__item"
                key={newsRight[index].id}
                data-aos="fade-left"
              >
                <img src={newsRight[index].img} alt="" />
                <span>{newsRight[index].name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="newsAll__footer">
        <span>check out our other social channels</span>
      </div>
    </div>
  );
};

export default NewAll;
