import React, { useState, useEffect } from "react";
import "./style.css";
import { useLike } from "../../../context/LikeContext";
import { useSearch } from "../../../context/SearchContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const { addToLike, likeItems } = useLike();
  const { searchTerm } = useSearch();
  const [records, setRecords] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [priceRangeFilter, setPriceRangeFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    const debounceFetch = setTimeout(async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          signal,
        });
        setRecords(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.error("API call failed: ", error);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(debounceFetch);
      controller.abort();
    };
  }, [searchTerm]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategoryFilter((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (event) => {
    const range = event.target.value;
    setPriceRangeFilter((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const applyPriceRange = (price) => {
    if (priceRangeFilter.includes("0-50") && price <= 50) return true;
    if (priceRangeFilter.includes("50-100") && price > 50 && price <= 100)
      return true;
    if (priceRangeFilter.includes("100-200") && price > 100 && price <= 200)
      return true;
    if (priceRangeFilter.includes("200+") && price > 200) return true;
    return priceRangeFilter.length === 0;
  };

  const filteredRecords = records.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter.length === 0 || categoryFilter.includes(item.category)) &&
      applyPriceRange(item.price)
  );

  const sortedRecords = filteredRecords.sort((a, b) => {
    switch (sortCriteria) {
      case "priceHigh":
        return b.price - a.price;
      case "priceLow":
        return a.price - b.price;
      case "ratingHigh":
        return b.rating.rate - a.rating.rate;
      case "ratingLow":
        return a.rating.rate - b.rating.rate;
      default:
        return 0;
    }
  });

  const handleLikeToggle = (event, item) => {
    event.stopPropagation();
    const isLiked = likeItems.some((likedItem) => likedItem.id === item.id);
    addToLike(item, !isLiked);
  };

  const handleProductClick = (product) => {
    history.push({
      pathname: `/product/${product.id}`,
      state: { product, products: records },
    });
  };

  return (
    <section className="shop">
      <div className="container">
        <div className="contentWidth">
          <div className="filter-sort-container">
            <div className="dropdown">
              <button className="dropbtn">
                <i className="fa-sharp fa-regular fa-arrow-up-arrow-down"></i>{" "}
                Sort
              </button>
              <div className="dropdown-content">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="default"
                      checked={sortCriteria === "default"}
                      onChange={(e) => setSortCriteria(e.target.value)}
                    />
                    Default
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="priceHigh"
                      checked={sortCriteria === "priceHigh"}
                      onChange={(e) => setSortCriteria(e.target.value)}
                    />
                    Price: High to Low
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="priceLow"
                      checked={sortCriteria === "priceLow"}
                      onChange={(e) => setSortCriteria(e.target.value)}
                    />
                    Price: Low to High
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="ratingHigh"
                      checked={sortCriteria === "ratingHigh"}
                      onChange={(e) => setSortCriteria(e.target.value)}
                    />
                    Rating: High to Low
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      value="ratingLow"
                      checked={sortCriteria === "ratingLow"}
                      onChange={(e) => setSortCriteria(e.target.value)}
                    />
                    Rating: Low to High
                  </label>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn">
                <i className="fa-regular fa-filter-list"></i> Filter
              </button>
              <div className="dropdown-content">
                <div>
                  <label>Categories:</label>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="electronics"
                        checked={categoryFilter.includes("electronics")}
                        onChange={handleCategoryChange}
                      />
                      Electronics
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="jewelery"
                        checked={categoryFilter.includes("jewelery")}
                        onChange={handleCategoryChange}
                      />
                      Jewelery
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="men's clothing"
                        checked={categoryFilter.includes("men's clothing")}
                        onChange={handleCategoryChange}
                      />
                      Men's Clothing
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="women's clothing"
                        checked={categoryFilter.includes("women's clothing")}
                        onChange={handleCategoryChange}
                      />
                      Women's Clothing
                    </label>
                  </div>
                </div>

                <div>
                  <label>Price Range:</label>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="0-50"
                        checked={priceRangeFilter.includes("0-50")}
                        onChange={handlePriceRangeChange}
                      />
                      $0 - $50
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="50-100"
                        checked={priceRangeFilter.includes("50-100")}
                        onChange={handlePriceRangeChange}
                      />
                      $50 - $100
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="100-200"
                        checked={priceRangeFilter.includes("100-200")}
                        onChange={handlePriceRangeChange}
                      />
                      $100 - $200
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        value="200+"
                        checked={priceRangeFilter.includes("200+")}
                        onChange={handlePriceRangeChange}
                      />
                      $200+
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-content grid1">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p> something went wrong </p>
            ) : sortedRecords.length > 0 ? (
              sortedRecords.map((shopItem) => (
                <div
                  className="box"
                  key={shopItem.id}
                  onClick={() => handleProductClick(shopItem)}
                >
                  <div className="product mtop">
                    <div className="img">
                      <span className="discount">30% Off</span>
                      <img
                        src={shopItem.image}
                        alt={shopItem.title}
                        className="shop-img"
                      />
                      <div className="product-like">
                        <i
                          className={`fa-regular fa-heart ${
                            likeItems.some((item) => item.id === shopItem.id)
                              ? "liked"
                              : ""
                          }`}
                          onClick={(e) => handleLikeToggle(e, shopItem)}
                        ></i>
                      </div>
                    </div>
                    <div className="product-details">
                      <h3 className="small-title">{shopItem.title}</h3>
                      <div className="rate">
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`${
                              index < Math.floor(shopItem.rating.rate)
                                ? "fa fa-star filled"
                                : index === Math.floor(shopItem.rating.rate) &&
                                  shopItem.rating.rate -
                                    Math.floor(shopItem.rating.rate) >=
                                    0.5
                                ? "fa fa-star-half-alt half-filled"
                                : "fa fa-star"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <div>{shopItem.rating.count} reviews</div>
                      <div>{shopItem.category}</div>
                      <div className="price">
                        <h4>${shopItem.price} </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Shop;
