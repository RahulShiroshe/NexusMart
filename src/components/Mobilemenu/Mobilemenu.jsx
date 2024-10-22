import React from "react";
import styles from "./Mobilemenu.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useLike } from "../../context/LikeContext";
import { useAccount } from "../../context/AccountContext";
import { useNotification } from "../../context/NotificationContext";
import { usePurchace } from "../../context/PurchaceContext";

const Mobilemenu = () => {
  const { cartItems } = useCart();
  const { likeItems } = useLike();
  const { userDetails } = useAccount();
  const { purchaceItems } = usePurchace();
  const { getUnreadCount } = useNotification();

  return (
    <div className={styles.mobileFooter}>
      <Link to="/" className={styles.icon}>
        <i className="fa-sharp fa-regular fa-home css-j" />
      </Link>
      <Link to="/like" className={styles.icon}>
        <i className="fa-sharp fa-regular fa-heart css-j">
          <span className={styles.number}>{likeItems.length}</span>
        </i>
      </Link>
      <Link to="/cart" className={styles.icon}>
        <i className="fa-regular fa-shopping-bag css-j">
          <span className={styles.number}>{cartItems.length}</span>
        </i>
      </Link>
      <Link to="/track-my-order" className={styles.icon}>
        <i className="far fa-shipping-fast css-j">
          <span className={styles.number}>{purchaceItems.length}</span>
        </i>
      </Link>
      <Link to="/MyNotifications" className={styles.icon}>
        <i className="fa-sharp fa-regular fa-bell css-j">
          <span className={styles.number}>{getUnreadCount()}</span>
        </i>
      </Link>
      <Link to="/Account" className={styles.icon}>
        {userDetails.profileImage ? (
          <img
            src={userDetails.profileImage}
            alt=""
            className={styles.profileImage}
          />
        ) : (
          <i className="far fa-circle-user css-j" />
        )}
      </Link>
    </div>
  );
};

export default Mobilemenu;
