import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./PurchaseSuccess.module.css";

const PurchaseSuccess = () => {
  const history = useHistory();

  return (
    <div className={styles.successContainer}>
      <h2>Purchase Successful!</h2>
      <p>Thank you for your purchase.</p>
      <button
        onClick={() => history.push("/")}
        className={styles.backToShopButton}
      >
        Back to Shop
      </button>
      <button
        onClick={() => history.push("/track-my-order")}
        className={styles.backToShopButton}
      >
        Track My Order
      </button>
    </div>
  );
};

export default PurchaseSuccess;
