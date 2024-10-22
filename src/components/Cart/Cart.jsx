import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();
  const history = useHistory();
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const handlePurchase = (item) => {
    history.push({
      pathname: "/checkout",
      state: {
        product: item,
        selectedVariant: item.variant,
        quantity: item.quantity,
      },
    });
  };

  return (
    <section className={styles.cartItems}>
      <div className="container d_flex">
        <div className={styles.cartDetails}>
          {cartItems.length === 0 && (
            <h1 className={styles.noItems}>
              No Items have been added to Cart
            </h1>
          )}
          {cartItems
            .slice()
            .reverse()
            .map((item) => {
              const productQty = item.price * item.quantity;
              return (
                <div className={styles.cartItem} key={item.id}>
                  <img src={item.image} alt="" className={styles.cartImg} />
                  <button
                    className={styles.removeCartButton}
                    onClick={() => removeFromCart(item)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <div className={styles.cartInfo}>
                    <span className={styles.cartHeader}>{item.title}</span>
                    <div className={styles.cartInfoPrice}>
                      <span className={styles.cartQty}>
                        {" "}
                        ${item.price} x {item.quantity}
                      </span>
                      <span className={styles.cartPrice}>
                        ${productQty.toFixed(2)}
                      </span>
                    </div>
                    {item.category !== "jewelery" &&
                      item.category !== "electronics" && (
                        <div className={styles.cartQty}>{item.variant}</div>
                      )}
                    <div className={styles.cartTotal}>
                      <button
                        className={styles.decCart}
                        onClick={() => decreaseQty(item)}
                        disabled={item.quantity <= 1}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className={styles.cartItemQty}>
                        {item.quantity}
                      </span>
                      <button
                        className={styles.incCart}
                        onClick={() => increaseQty(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <button
                      className={styles.purchaseButton}
                      onClick={() => handlePurchase(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {cartItems.length !== 0 && (
          <div className={styles.cartSummary}>
            <div className={styles.summaryContainer}>
              <span className={styles.headerText}>Cart Summary</span>
              <hr className={styles.horizontalRule} />
              <div className={styles.totalPriceContainer}>
                <span className={styles.totalText}>Total Price :</span>
                <span className={styles.totalPriceText}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
