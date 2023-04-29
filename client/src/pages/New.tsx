import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/New.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_IMAGES, API_LINK } from "../default-value";
import { INew } from "../types/new";
const New = () => {
  const { id } = useParams();
  const [newData, setNewData] = useState<INew>();
  const fetchData = async () => {
    const res = await axios.get(`${API_LINK}/new/${id}`);
    setNewData(res.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="new">
      <Header />
      <div className="new-content">
        <div className="new__heading">
          <div className="new__heading-img-blur">
            <img src={`${API_IMAGES}/news/${newData?.img}`} alt="" />
          </div>
          <div className="new__heading-info">
            <div className="new__heading-info-img">
              <img src={`${API_IMAGES}/news/${newData?.img}`} alt="" />
            </div>
            <div className="new__heading-info-title">{newData?.title}</div>
            <div className="new__heading-info-subtitle">
              {newData?.subtitle}
            </div>
            <div className="new__heading-bottom">
              <div className="new__heading-date">{newData?.createdAt}</div>

              <div className="new__heading-author">
                <div className="new__heading-author-tag">{newData?.tags}</div>
                <div className="new__heading-author-name">
                  <span>AUTHOR</span>
                  {newData?.author}
                </div>
              </div>
            </div>
          </div>
        </div>
        {newData?.description ? (
          <div
            className="new__content-wrapper"
            dangerouslySetInnerHTML={{ __html: newData.description }}
          ></div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default New;
