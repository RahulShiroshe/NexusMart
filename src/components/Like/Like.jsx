import React from "react";
import { useHistory } from "react-router-dom";
import { useLike } from "../../context/LikeContext";
import styles from "./Like.module.css";

const Like = () => {
  const { likeItems, removeFromLike } = useLike();
  const history = useHistory();

  const handlePurchase = (item) => {
    history.push({
      pathname: "/checkout",
      state: { product: item, selectedVariant: "Medium", quantity: 1 },
    });
  };

  return (
    <section className={styles.cartItems}>
      <div className="container d_flex">
        <div className={styles.likeDetails}>
          {likeItems.length === 0 && (
            <h1 className={styles.noItems}>No Items have been Liked Here</h1>
          )}
          {likeItems
            .slice()
            .reverse()
            .map((item) => (
              <div className={styles.likeItem} key={item.id}>
                <img src={item.image} alt="" className={styles.likeImage} />
                <button
                  className={styles.removeLike}
                  onClick={() => removeFromLike(item)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
                <div className={styles.likeInfo}>
                  <span className={styles.likeHeader}>{item.title}</span>
                  <div className={styles.likePrice}>
                    <span className={styles.price}>${item.price}</span>
                  </div>
                  <button
                    className={styles.purchaseButton}
                    onClick={() => handlePurchase(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Like;
