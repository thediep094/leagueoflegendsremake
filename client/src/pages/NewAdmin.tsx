import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import "../styles/pages/Admin.scss";
import axios from "axios";
import { API_IMAGES, API_LINK } from "../default-value";
import { INew } from "../types/new";
import Loading from "../components/Loading";
const NewAdmin = () => {
  const [listNews, setListNews] = useState<INew[]>([]);
  const [idUpdate, setIdUpdate] = useState<string>("");
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    expect: "",
    author: "",
    tags: "",
    img: null,
  });

  const [loading, setLoading] = useState(false);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setDataInputToUpdate = (item: INew) => {
    setData({
      ...data,
      title: item.title ? item.title : "",
      subtitle: item.subtitle ? item.subtitle : "",
      description: item.description ? item.description : "",
      expect: item.expect ? item.expect : "",
      author: item.author ? item.author : "",
      tags: item.tags ? item.tags : "",
    });
  };

  const fetchNews = async () => {
    setLoading(true);
    const res = await axios.get(`${API_LINK}/new/`);
    setListNews(res.data.data);
    setLoading(false);
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    setData({ ...data, img: file });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("description", data.description);
    formData.append("expect", data.expect);
    formData.append("author", data.author);
    formData.append("tags", data.tags);
    if (data.img) {
      formData.append("img", data.img);
    }

    const res = await axios.post(`${API_LINK}/new/`, formData);
    fetchNews();
    setData({
      title: "",
      subtitle: "",
      description: "",
      expect: "",
      author: "",
      tags: "",
      img: null,
    });
  };

  const handleDelete = async (id: string) => {
    const res = await axios.delete(`${API_LINK}/new/${id}`);
    fetchNews();
  };

  const handleUpdate = async (id: string) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("description", data.description);
    formData.append("expect", data.expect);
    formData.append("author", data.author);
    formData.append("tags", data.tags);
    if (data.img) {
      formData.append("img", data.img);
    }
    const res = await axios.put(`${API_LINK}/new/${id}`, formData);
    fetchNews();
    setData({
      title: "",
      subtitle: "",
      description: "",
      expect: "",
      author: "",
      tags: "",
      img: null,
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="newAdmin">
      <Header />
      <div className="container">
        <div className="newAdmin__add">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={data.title}
                placeholder="e.g. New about your website"
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={data.subtitle}
                placeholder="Subtitle"
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Description"
                value={data.description}
                name="description"
                onChange={(e: any) => handleInputChange(e)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="description">Expect</label>
              <textarea
                id="expect"
                placeholder="Expect"
                value={data.expect}
                name="expect"
                onChange={(e: any) => handleInputChange(e)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                id="author"
                name="author"
                value={data.author}
                placeholder="Author"
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={data.tags}
                placeholder="Tag"
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={(e: any) => handleFileInputChange(e)}
              />
            </div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>

            <button
              className="update"
              type="submit"
              onClick={() => handleUpdate(idUpdate)}
            >
              Update
            </button>
          </form>
        </div>

        <div className="newAdmin__lists">
          {loading ? (
            <Loading />
          ) : listNews ? (
            listNews.map((item: INew) => {
              return (
                <div className="newAdmin__item" key={item._id}>
                  {/* <div className="newAdmin__item-checkbox">
                      <input type="checkbox" />
                    </div> */}
                  <img
                    src={`${API_IMAGES}/news/${item.img}  `}
                    className="newAdmin__item-img"
                    alt=""
                  />
                  <div className="newAdmin__item-title">{item.title}</div>
                  <button
                    className="newAdmin__item-update"
                    onClick={() => {
                      setDataInputToUpdate(item);
                      setIdUpdate(item._id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="newAdmin__item-delete"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NewAdmin;
