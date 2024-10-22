import React, { useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import "./Search.css";
import { Link } from "react-router-dom";
import { useLike } from "../../context/LikeContext";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
import { useAccount } from "../../context/AccountContext";
import { useNotification } from "../../context/NotificationContext";
import { usePurchace } from "../../context/PurchaceContext";

const Search = () => {
  const { cartItems } = useCart();
  const { likeItems } = useLike();
  const { userDetails } = useAccount();
  const { searchTerm, setSearchTerm } = useSearch();
  const { purchaceItems } = usePurchace();
  const { getUnreadCount } = useNotification();

  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      search.classList.toggle("active", window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="search background">
      <div className="container-h c_flex">
        <div className="logo width">
          <a href="/">
            {" "}
            <img src={logo} alt="" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="search-box f_flex">
          <input
            type="text"
            placeholder="Search products here . . ."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fa fa-search" style={{ margin: "0 10px" }}></i>
        </form>
        <div className="icon f_flex width">
          <div className="cart">
            <Link to="/">
              <i className="fa-sharp fa-solid fa-home icon-circle" />
            </Link>
          </div>
          <div className="cart">
            <Link to="/track-my-order">
              <i className="fas fa-shipping-fast icon-circle" />
              <span>{purchaceItems.length}</span>
            </Link>
          </div>
          <div className="cart">
            <Link to="/MyNotifications">
              <i className="fa-sharp fa-solid fa-bell icon-circle" />
              <span>{getUnreadCount()}</span>
            </Link>
          </div>
          {/* Like */}
          <div className="cart">
            <Link to="/like">
              <i className="fa-sharp fa-solid fa-heart icon-circle" />
              <span>{likeItems.length}</span>
            </Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <i className="fa-solid fa-shopping-bag icon-circle" />
              <span>{cartItems.length}</span>
            </Link>
          </div>
          <div className="user">
            <Link to="/Account">
              {userDetails.profileImage ? (
                <img
                  src={userDetails.profileImage}
                  alt=""
                  className="icon-circle"
                  style={{ height: "44px" }}
                />
              ) : (
                <i className="fa fa-user icon-circle" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
