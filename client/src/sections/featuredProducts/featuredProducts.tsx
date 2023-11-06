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
  const [tagFilter, setTagFilter] = useState(""); // State for tag filtering
  const [searchQuery, setSearchQuery] = useState(""); // State for search
  const [page, setPage] = useState(1);
  const [allTags, setAllTags] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_LINK}/products`, {
        params: {
          page: page,
          limit: 8,
          tag: tagFilter, // Send the tag filter as a query parameter
          search: searchQuery, // Send the search query as a query parameter
        },
      });
      setData(res.data.data);

      const fetchAllTags = async () => {
        try {
          const res = await axios.get(`${API_LINK}/products/tags`);
          setAllTags(res.data.data);
        } catch (error) {
          console.error("Error fetching tags:", error);
        }
      };

      fetchAllTags();
      setLoading(false);
    } catch (error) {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, tagFilter, searchQuery]); // Add tagFilter and searchQuery as dependencies

  const handleTagFilterChange = (e: any) => {
    setTagFilter(e.target.value);
  };

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="featuredProduct">
      <div className="container">
        <div className="filter-section">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <select value={tagFilter} onChange={handleTagFilterChange}>
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <button onClick={handleSearchSubmit}>Search</button>
        </div>
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
        <div className="pagination">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
            Previous
          </button>
          <span>Page {page}</span>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
