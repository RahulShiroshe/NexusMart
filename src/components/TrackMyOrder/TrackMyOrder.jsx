import React, { useState } from "react";
import styles from "./TrackMyOrder.module.css";
import { usePurchace } from "../../context/PurchaceContext";

const TrackMyOrder = () => {
  const { purchaceItems } = usePurchace();
  const [openOrderDetails, setOpenOrderDetails] = useState(null);

  const toggleOrderDetails = (id) => {
    setOpenOrderDetails(openOrderDetails === id ? null : id);
  };

  const getCurrentDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  };

  const estimatedDeliveryTime = "2-3 days";

  return (
    <section className={styles.orderSection}>
      <div className={`${styles.orderContainer} d_flex`}>
        <div className={styles.orderDetailsContainer}>
          {purchaceItems.length === 0 ? (
            <h1 className={styles.noItemsMessage}>
              No Items have been ordered.
            </h1>
          ) : (
            purchaceItems
              .slice()
              .reverse()
              .map((item, index) => {
                const orderId = `${item.id}-${index}`;
                return (
                  <div className={styles.orderCard} key={orderId}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.orderImage}
                    />
                    <div className={styles.orderInfo}>
                      <span className={styles.orderTitle}>{item.title}</span>
                      <div className={styles.orderPriceContainer}>
                        <div className={styles.orderPrice}>
                          {" "}
                          <span>Price:</span> ${item.price}
                        </div>
                        <div className={styles.orderQuantity}>
                          {" "}
                          <span>Quantity:</span> {item.quantity}
                        </div>
                        <div className={styles.orderTotalPrice}>
                          {" "}
                          <span>Total:</span> $
                          {(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      {item.category !== "jewelery" &&
                        item.category !== "electronics" && (
                          <p>
                            <span>Variant:</span> {item.variant}
                          </p>
                        )}
                      <div
                        onClick={() => toggleOrderDetails(orderId)}
                        className={styles.orderToggle}
                      >
                        <span>
                          {openOrderDetails === orderId
                            ? "Read Less"
                            : "Read More"}
                        </span>
                      </div>
                      {openOrderDetails === orderId && (
                        <div className={styles.orderDetailsContent}>
                          <h4>Order Confirmation:</h4>
                          <p>Date: {getCurrentDate()}</p>
                          <p>Your order has been placed.</p>
                          <p>Seller has processed your order.</p>
                          <p>
                            Your item has been picked up by the courier partner.
                          </p>

                          <h4>Shipped:</h4>
                          <p>Date: {getCurrentDate()}</p>
                          <p>Ekart Logistics - FMPC2038476235</p>
                          <p>
                            Your item has been received in the nearest hub to
                            you.
                          </p>

                          <h4>Out For Delivery:</h4>
                          <p>
                            Status: Pending (Expected delivery:{" "}
                            {estimatedDeliveryTime})
                          </p>

                          <h4>Delivered:</h4>
                          <p>
                            Status: Pending (Expected time:{" "}
                            {estimatedDeliveryTime})
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackMyOrder;
