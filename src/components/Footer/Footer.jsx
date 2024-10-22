import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <p className={styles.description}>
            Your trusted online marketplace in world, offering a wide range of
            products from groceries to gadgets. Shop the best deals and enjoy a
            seamless experience.
          </p>
          <div className={styles.appLinks}>
            <div className={styles.appLink}>
              <i className="fa-brands fa-google-play"></i>
              <span>Download on Google Play</span>
            </div>
            <div className={styles.appLink}>
              <i className="fa-brands fa-app-store-ios"></i>
              <span>Get it on the App Store</span>
            </div>
          </div>
        </div>

        <div className={styles.footerRow}>
          <div className={styles.footerSection}>
            <h2>About NexusMart</h2>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link to="/">Our Story</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/">Careers</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/">Sustainability Initiatives</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/">Affiliate Program</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h2>Customer Support</h2>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link to="/Help">FAQs</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/track-my-order">Shipping Information</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/track-my-order">Order Tracking</Link>
              </li>
              <li className={styles.linkItem}>
                <Link to="/">Refund Policy</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h2>Contact Us</h2>
            <ul className={styles.contactInfo}>
              <li>
                412, Phoenix Market City, Kurla, Mumbai, Maharashtra 400070
              </li>
              <li>Email: help@nexusmart.com</li>
              <li>Customer Service: +1 800 555 6789</li>
              <li>WhatsApp: +1 321 654 9870</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
