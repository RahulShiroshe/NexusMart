import React, { createContext, useState, useContext, useEffect } from "react";

const LikeContext = createContext();

export const useLike = () => {
  return useContext(LikeContext);
};

export const LikeProvider = ({ children }) => {
  const [likeItems, setLikeItems] = useState(() => {
    const storedLikes = localStorage.getItem("likeItems");
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  useEffect(() => {
    localStorage.setItem("likeItems", JSON.stringify(likeItems));
  }, [likeItems]);

  const addToLike = (product, isLiked) => {
    if (isLiked) {
      setLikeItems((prev) => [...prev, product]);
    } else {
      setLikeItems((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const removeFromLike = (product) => {
    setLikeItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <LikeContext.Provider value={{ likeItems, addToLike, removeFromLike }}>
      {children}
    </LikeContext.Provider>
  );
};
