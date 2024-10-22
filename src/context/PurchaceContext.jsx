import React, { createContext, useState, useContext, useEffect } from "react";

const PurchaceContext = createContext();

export const usePurchace = () => {
  return useContext(PurchaceContext);
};

export const PurchaceProvider = ({ children }) => {
  const [purchaceItems, setPurchaceItems] = useState(() => {
    const storedPurchases = localStorage.getItem("purchaceItems");
    return storedPurchases ? JSON.parse(storedPurchases) : [];
  });

  useEffect(() => {
    localStorage.setItem("purchaceItems", JSON.stringify(purchaceItems));
  }, [purchaceItems]);

  const addToPurchace = (product, variant, quantity) => {
    setPurchaceItems((prev) => {
      return [...prev, { ...product, variant, quantity }];
    });
  };

  const clearPurchaceItems = () => {
    setPurchaceItems([]);
    localStorage.removeItem("purchaceItems");
  };

  return (
    <PurchaceContext.Provider
      value={{ purchaceItems, addToPurchace, clearPurchaceItems }}
    >
      {children}
    </PurchaceContext.Provider>
  );
};
