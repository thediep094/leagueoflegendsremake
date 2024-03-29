import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/New.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_IMAGES, API_LINK } from "../default-value";
import { INew } from "../types/new";
import { IComment } from "../types/product";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
const New = () => {
  const { id } = useParams();
  const user = useSelector((state: RootState) => state.account.user);
  const [newData, setNewData] = useState<INew>();
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState<IComment[]>();
  const [currentComment, setCurrentComment] = useState("");

  const fetchData = async () => {
    const res = await axios.get(`${API_LINK}/new/${id}`);
    setNewData(res.data.data);
  };

  const fetchComments = async () => {
    const res = await axios.get(`${API_LINK}/comment-news/${id}`);
    setComments(res.data.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchData();
    fetchComments();
  }, []);

  const submitComment = async () => {
    try {
      if (user) {
        const res = await axios.post(`${API_LINK}/comment-news/${id}`, {
          userId: user?._id,
          rate: rating,
          cmt: currentComment,
        });
        setCurrentComment("");
        setRating(0);
      } else {
        alert("Bạn cần đăng nhập");
      }
    } catch (error) {
      console.log(error);
    }
    fetchComments();
  };
  return (
    <div className="new">
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

      <div className="new-comments">
        <div className="product__comments">
          <div className="product__comment">
            <input
              type="text"
              placeholder="Write comment here"
              onChange={(e: any) => setCurrentComment(e.target.value)}
            />
            <div className="product__stars">
              {[1, 2, 3, 4, 5].map((index) => {
                return index <= rating ? (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-star-good"
                    onClick={() => setRating(index)}
                  >
                    <path
                      d="M8.84456 0.749867C9.31736 -0.249956 10.6833 -0.249956 11.1552 0.749867L13.5477 5.8121L18.8951 6.62347C19.9527 6.78408 20.3739 8.14131 19.6096 8.92019L15.7392 12.8601L16.6529 18.4236C16.8342 19.5228 15.7286 20.361 14.7839 19.8421L9.99901 17.2149L5.2168 19.8421C4.2712 20.362 3.16652 19.5228 3.34693 18.4236L4.26054 12.8601L0.390161 8.92019C-0.374138 8.14038 0.0480039 6.785 1.10469 6.62347L6.45212 5.8121L8.84367 0.749867H8.84456Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-star-notgood"
                    onClick={() => setRating(index)}
                  >
                    <path
                      d="M7.3563 6.23926L9.47722 1.74987H9.47785L9.74858 1.17736C9.81277 1.0416 9.91094 1 10.0002 1C10.0894 1 10.1871 1.04147 10.2509 1.1767L10.2511 1.17716L12.6435 6.23939L12.8711 6.7209L13.3977 6.80079L18.745 7.61214C18.845 7.62732 18.9364 7.69464 18.9806 7.8368C19.0253 7.98044 18.9932 8.12029 18.8963 8.2194C18.8962 8.21942 18.8962 8.21944 18.8962 8.21946C18.8961 8.21957 18.896 8.21968 18.8959 8.21979L15.0259 12.1593L14.6702 12.5213L14.7525 13.0221L15.6661 18.5856L15.6662 18.5863C15.6934 18.7511 15.6281 18.8733 15.5362 18.943C15.4894 18.9785 15.4421 18.9949 15.4029 18.9987C15.3684 19.002 15.324 18.9979 15.2653 18.9656L15.2652 18.9655L10.4803 16.3383L9.99887 16.074L9.51751 16.3385L4.73531 18.9657L4.73503 18.9658C4.67602 18.9983 4.63148 19.0024 4.5972 18.9991C4.55811 18.9953 4.51097 18.9789 4.4642 18.9434C4.37226 18.8737 4.3066 18.751 4.33372 18.5856C4.33372 18.5856 4.33372 18.5856 4.33373 18.5856L5.24732 13.0221L5.32956 12.5213L4.97391 12.1593L1.10433 8.22021C1.10433 8.22021 1.10432 8.2202 1.10432 8.2202C1.00658 8.12047 0.974765 7.9805 1.01938 7.83715C1.06352 7.69534 1.15506 7.62751 1.25548 7.61204C1.25559 7.61202 1.25569 7.61201 1.2558 7.61199L6.60214 6.80079L7.12877 6.72088L7.3563 6.23926Z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                );
              })}
            </div>
            <div
              className="product__comment-user submit"
              onClick={() => submitComment()}
            >
              Submit
            </div>
          </div>
          <div className="product__comment-datas">
            {comments
              ? comments?.map((item: IComment) => {
                  return (
                    <div className="product__comment">
                      <div className="product__comment-content">{item.cmt}</div>

                      <div className="product__comment-user">
                        {item.ingame ? item.ingame : item.fullname} -{" "}
                        <span>
                          &nbsp; {item.rate}.0
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-star-good"
                          >
                            <path
                              d="M8.84456 0.749867C9.31736 -0.249956 10.6833 -0.249956 11.1552 0.749867L13.5477 5.8121L18.8951 6.62347C19.9527 6.78408 20.3739 8.14131 19.6096 8.92019L15.7392 12.8601L16.6529 18.4236C16.8342 19.5228 15.7286 20.361 14.7839 19.8421L9.99901 17.2149L5.2168 19.8421C4.2712 20.362 3.16652 19.5228 3.34693 18.4236L4.26054 12.8601L0.390161 8.92019C-0.374138 8.14038 0.0480039 6.785 1.10469 6.62347L6.45212 5.8121L8.84367 0.749867H8.84456Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
