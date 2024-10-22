import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAccount } from "../../context/AccountContext";
import { useNotification } from "../../context/NotificationContext";
import { usePurchace } from "../../context/PurchaceContext";
import styles from "./Account.module.css";

const Account = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const {
    isSignedUp,
    userDetails,
    signedUpUser,
    logoutUser,
    updateUserProfileImage,
  } = useAccount();
  const { addNotification, clearNotifications } = useNotification();
  const { clearPurchaceItems } = usePurchace();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
    }
  };

  const handleSignedUp = (e) => {
    e.preventDefault();
    signedUpUser(formData.name, formData.email, formData.profileImage);

    addNotification({
      id: new Date().getTime(),
      message: `Welcome, ${formData.name}! Your account has been created successfully.`,
      date: new Date().toISOString().slice(0, 10),
      read: false,
    });

    history.goBack();
    setFormData({ name: "", email: "", password: "", profileImage: null });
  };

  const handleLogout = () => {
    logoutUser();
    clearNotifications();
    clearPurchaceItems();
    history.push("/");
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateUserProfileImage(imageUrl);

      addNotification({
        id: new Date().getTime(),
        message: "Your profile image was updated successfully!",
        date: new Date().toISOString().slice(0, 10),
        read: false,
      });
    }
  };

  return (
    <div className={styles.accountWrapper}>
      {isSignedUp ? (
        <div className={styles.userDetails}>
          {userDetails.profileImage && (
            <div className={styles.profileImageWrapper}>
              <img
                src={userDetails.profileImage}
                alt=""
                className={styles.profileImage}
              />
            </div>
          )}

          {userDetails.profileImage && (
            <div className={styles.updateProfileImage}>
              <label htmlFor="updateProfileImage">Edit Image:</label>
              <input
                type="file"
                id="updateProfileImage"
                name="updateProfileImage"
                accept="image/*"
                onChange={handleUpdateImage}
              />
            </div>
          )}

          <h2 className={styles.accountHeading}>
            Welcome, {userDetails.name}!
          </h2>
          <p>Email: {userDetails.email}</p>
          <button className={styles.accountButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSignedUp} className={styles.registrationForm}>
          <h2 className={styles.accountHeading}>Create Account</h2>
          <div className={styles.accountFormGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.accountFormGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.accountFormGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.accountFormGroup}>
            <label htmlFor="profileImage">Profile Image:</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          {formData.profileImage && (
            <img
              src={formData.profileImage}
              alt="Profile Preview"
              className={styles.profilePreview}
            />
          )}
          <button type="submit" className={styles.accountButton}>
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default Account;
