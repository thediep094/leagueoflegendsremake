import React, { useEffect, useState } from "react";
import Header from "../sections/Header";
import "../styles/pages/Admin.scss";
import axios from "axios";
import { API_IMAGES, API_LINK } from "../default-value";
import { INew } from "../types/new";
import Loading from "../components/Loading";
import { IProduct } from "../types/product";
const ProductAdmin = () => {
  const [listNews, setListNews] = useState<IProduct[]>([]);
  const [idUpdate, setIdUpdate] = useState<string>("");
  const [data, setData] = useState({
    name: "",
    price: 0,
    compare_at_price: 0,
    description: "",
    estimate_ship_date: "",
    tags: "",
    images: [] as Array<File>,
    thumbnails: [] as Array<File>,
  });

  const [loading, setLoading] = useState(false);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setDataInputToUpdate = (item: IProduct) => {
    setData({
      ...data,
      name: item.name ? item.name : "",
      price: item.price ? item.price : 0,
      compare_at_price: item.compare_at_price ? item.compare_at_price : 0,
      description: item.description ? item.description : "",
      estimate_ship_date: item.estimate_ship_date
        ? item.estimate_ship_date
        : "",
      tags: item.tags ? item.tags : "",
    });
  };

  const fetchNews = async () => {
    setLoading(true);
    const res = await axios.get(`${API_LINK}/products/?page=1&limit=20`);
    setListNews(res.data.data);
    setLoading(false);
  };
  const handleFileInputChange = (event: any) => {
    const files = event.target.files;
    let fileArray = [];
    for (let i = 0; i < files.length; i++) {
      fileArray.push(files.item(i));
    }
    setData({ ...data, images: fileArray });
  };

  const handleFileInputChange2 = (event: any) => {
    const files = event.target.files;
    let fileArray = [];
    for (let i = 0; i < files.length; i++) {
      fileArray.push(files.item(i));
    }
    setData({ ...data, thumbnails: fileArray });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("compare_at_price", data.compare_at_price.toString());
    formData.append("description", data.description);
    formData.append("estimate_ship_date", data.estimate_ship_date);
    formData.append("tags", data.tags);
    for (let i = 0; i < data.images.length; i++) {
      formData.append("images", data.images[i]);
    }

    for (let i = 0; i < data.thumbnails.length; i++) {
      formData.append("thumbnails", data.thumbnails[i]);
    }

    const res = await axios.post(`${API_LINK}/products/create`, formData);
    fetchNews();
    setData({
      name: "",
      price: 0,
      compare_at_price: 0,
      description: "",
      estimate_ship_date: "",
      tags: "",
      images: [],
      thumbnails: [],
    });
  };

  const handleDelete = async (id: string) => {
    const res = await axios.delete(`${API_LINK}/products/${id}`);
    fetchNews();
  };

  const handleUpdate = async (id: string) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("compare_at_price", data.compare_at_price.toString());
    formData.append("description", data.description);
    formData.append("estimate_ship_date", data.estimate_ship_date);
    formData.append("tags", data.tags);
    for (let i = 0; i < data.images.length; i++) {
      formData.append("images", data.images[i]);
    }

    for (let i = 0; i < data.thumbnails.length; i++) {
      formData.append("thumbnails", data.thumbnails[i]);
    }
    const res = await axios.put(`${API_LINK}/products/update/${id}`, formData);
    fetchNews();
    setData({
      name: "",
      price: 0,
      compare_at_price: 0,
      description: "",
      estimate_ship_date: "",
      tags: "",
      images: [],
      thumbnails: [],
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
              <label htmlFor="title">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                placeholder="e.g. New about your website"
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="name">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={data.price}
                placeholder="price"
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="name">compare_at_price</label>
              <input
                type="number"
                id="compare_at_price"
                name="compare_at_price"
                value={data.compare_at_price}
                placeholder="compare_at_price"
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="compare_at_price">Description</label>
              <textarea
                id="description"
                placeholder="Description"
                value={data.description}
                name="description"
                onChange={(e: any) => handleInputChange(e)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="estimate_ship_date">estimate_ship_date</label>
              <textarea
                id="estimate_ship_date"
                placeholder="estimate_ship_date"
                value={data.estimate_ship_date}
                name="estimate_ship_date"
                onChange={(e: any) => handleInputChange(e)}
              ></textarea>
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
              <label htmlFor="image">Images</label>
              <input
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={(e: any) => handleFileInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="image">Thumbnails</label>
              <input
                type="file"
                id="thumbnails"
                name="thumbnails"
                accept="image/*"
                multiple
                onChange={(e: any) => handleFileInputChange2(e)}
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
            listNews.map((item: IProduct) => {
              return (
                <div className="newAdmin__item" key={item?._id}>
                  <img
                    src={`${API_IMAGES}/images/${item.images[0]}`}
                    className="newAdmin__item-img"
                    alt=""
                  />
                  <div className="newAdmin__item-title">{item?.name}</div>
                  <button
                    className="newAdmin__item-update"
                    onClick={() => {
                      setDataInputToUpdate(item);
                      setIdUpdate(item?._id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="newAdmin__item-delete"
                    onClick={() => handleDelete(item?._id)}
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

export default ProductAdmin;
