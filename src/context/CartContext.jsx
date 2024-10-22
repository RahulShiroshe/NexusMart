import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, variant, quantity) => {
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, variant, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, variant, quantity }];
      }
    });
  };

  const increaseQty = (product) => {
    setCartItems((prev) => {
      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQty = (product) => {
    setCartItems((prev) => {
      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQty, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
