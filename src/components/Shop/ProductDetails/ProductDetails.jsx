import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import ProductReviews from "./ProductReviews";
import { useHistory } from "react-router-dom";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const location = useLocation();
  const { product, products } = location.state || {};
  const defaultVariants = ["Small", "Medium", "Large"];
  const [selectedVariant, setSelectedVariant] = useState(defaultVariants[1]);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [relatedProductQuantities, setRelatedProductQuantities] = useState({});
  const history = useHistory();

  if (!product) {
    return <p>Something went wrong...</p>;
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const handleQtyChange = (productId, increment) => {
    setRelatedProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) + increment, 1),
    }));
  };

  const handleRelatedProductClick = (relatedProduct) => {
    history.push({
      pathname: `/product/${relatedProduct.id}`,
      state: { product: relatedProduct, products },
    });
  };

  const totalPrice = qty * product.price;

  const handlePurchase = () => {
    const quantity = qty;
    history.push({
      pathname: "/checkout",
      state: { product, selectedVariant, quantity },
    });
  };

  return (
    <div className={styles.productDetailsContainer}>
      <h2 className={styles.productTitle}>{product.title}</h2>
      <img
        className={styles.productDetailsImage}
        src={product.image}
        alt={product.title}
      />
      <p>{product.description}</p>

      {product.category !== "jewelery" &&
        product.category !== "electronics" && (
          <div className={styles.variantSelector}>
            <span>Select Variant: </span>
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
            >
              {defaultVariants.map((variant, index) => (
                <option key={index} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
        )}

      <div className={styles.price}>
        <h4>Price: ${totalPrice.toFixed(2)}</h4>
        <button onClick={() => addToCart(product, selectedVariant, qty)}>
          Add to Cart
        </button>
        <button className={styles.buyNowButton} onClick={handlePurchase}>
          Buy Now
        </button>
      </div>

      <div className={styles.cartControls}>
        <button onClick={() => setQty((q) => q - 1)} disabled={qty <= 1}>
          -
        </button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>

      <div className={styles.rating}>
        <div className="rate">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`${
                index < Math.floor(product.rating.rate)
                  ? "fa fa-star filled"
                  : index === Math.floor(product.rating.rate) &&
                    product.rating.rate - Math.floor(product.rating.rate) >= 0.5
                  ? "fa fa-star-half-alt half-filled"
                  : "fa fa-star"
              }`}
            ></i>
          ))}
        </div>
        <div>{product.rating.count} reviews</div>
      </div>
      <div className={styles.category}>
        <p>Category: {product.category}</p>
      </div>
      <ProductReviews />
      <div className={styles.relatedProducts}>
        <h3>Related Products</h3>
        <div className={styles.relatedProductList}>
          {relatedProducts.length > 0 &&
            relatedProducts.map((item) => {
              const relatedQty = relatedProductQuantities[item.id] || 1;
              const relatedTotalPrice = relatedQty * item.price;
              return (
                <div key={item.id} className={styles.relatedProductItem}>
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() => handleRelatedProductClick(item)}
                  />
                  <h4>{item.title}</h4>
                  <p>Price: ${relatedTotalPrice.toFixed(2)}</p>
                  <button
                    className={styles.relatedProductListButton}
                    onClick={() => addToCart(item, selectedVariant, relatedQty)}
                  >
                    Add to Cart
                  </button>
                  <div className={styles.cartControls}>
                    <button
                      onClick={() => handleQtyChange(item.id, -1)}
                      disabled={relatedQty <= 1}
                    >
                      -
                    </button>
                    <span>{relatedQty}</span>
                    <button onClick={() => handleQtyChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
