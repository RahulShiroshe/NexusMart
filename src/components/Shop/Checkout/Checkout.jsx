import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./Checkout.module.css";
import { useAccount } from "../../../context/AccountContext";
import { usePurchace } from "../../../context/PurchaceContext";
import { useNotification } from "../../../context/NotificationContext";
import cards from "../../../assets/images/credit-card.png";
import upi from "../../../assets/images/upi.png";
import netBanking from "../../../assets/images/net-banking.png";

const Checkout = () => {
  const location = useLocation();
  const history = useHistory();
  const { isSignedUp } = useAccount();
  const { product, selectedVariant, quantity } = location.state || {};
  const { addToPurchace } = usePurchace();
  const { addNotification } = useNotification();

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) {
    return <p>Something went wrong ...</p>;
  }

  const handleConfirmPurchase = () => {
    if (isSignedUp) {
      setShowPaymentOptions(true);
    } else {
      alert("Please register first to purchase this product.");
      history.push("/account");
    }
  };

  const handlePaymentConfirm = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTimeout(() => {
      addToPurchace(product, selectedVariant, quantity);
      setShowPaymentOptions(false);

      // Add new notification
      const newNotification = {
        id: Date.now(),
        message: `Your purchase of ${product.title} has been successful!`,
        date: new Date().toISOString().split("T")[0],
        read: false,
      };
      addNotification(newNotification);

      history.push("/purchase-success");
    }, 500);
  };

  const handlePaymentCancel = () => {
    setShowPaymentOptions(false);
  };

  return (
    <div className={styles.checkoutContainer}>
      <h2>Checkout</h2>
      <div className={styles.checkoutSummary}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          {product.category !== "jewelery" &&
            product.category !== "electronics" && (
              <p>Variant: {selectedVariant}</p>
            )}
          <p>Quantity: {quantity}</p>
          <p>Total: ${(product.price * quantity).toFixed(2)}</p>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button
          onClick={handleConfirmPurchase}
          className={styles.confirmButton}
        >
          Confirm Purchase
        </button>
        <button
          onClick={() => history.goBack()}
          className={styles.cancelButton}
        >
          Cancel
        </button>
      </div>

      {showPaymentOptions && (
        <div className={styles.paymentPopup}>
          <div className={styles.popupContent}>
            <h4>Please proceed with your payment of the total amount</h4>
            <h1>${(product.price * quantity).toFixed(2)}</h1>
            <div className={styles.paymentOptions}>
              <h2>Select Payment Method</h2>
              <div
                className={styles.paymentIcons}
                onClick={handlePaymentConfirm}
              >
                <h4>Cards</h4>
                <img src={cards} alt="cards" className={styles.paymentIcon} />
              </div>
              <div
                className={styles.paymentIcons}
                onClick={handlePaymentConfirm}
              >
                <h4>UPI</h4>
                <img src={upi} alt="UPI" className={styles.paymentIcon} />
              </div>
              <div
                className={styles.paymentIcons}
                onClick={handlePaymentConfirm}
              >
                <h4>Net Banking</h4>
                <img
                  src={netBanking}
                  alt="Net Banking"
                  className={styles.paymentIcon}
                />
              </div>
              <button
                onClick={handlePaymentCancel}
                className={styles.cancelButton}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
