import React, { createContext, useState, useEffect, useContext } from "react";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    profileImage: null,
  });

  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
      setIsSignedUp(true);
    }
  }, []);

  const signedUpUser = (name, email, profileImage) => {
    const newUserDetails = { name, email, profileImage };
    localStorage.setItem("userDetails", JSON.stringify(newUserDetails));
    setUserDetails(newUserDetails);
    setIsSignedUp(true);
  };

  const updateUserProfileImage = (newImage) => {
    setUserDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, profileImage: newImage };
      localStorage.setItem("userDetails", JSON.stringify(updatedDetails));
      return updatedDetails;
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("userDetails");
    setUserDetails({ name: "", email: "", profileImage: null });
    setIsSignedUp(false);
  };

  return (
    <AccountContext.Provider
      value={{
        isSignedUp,
        userDetails,
        signedUpUser,
        updateUserProfileImage,
        logoutUser,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
