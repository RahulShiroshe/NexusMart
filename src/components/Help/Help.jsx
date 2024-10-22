import React from "react";
import styles from "./Help.module.css";

const Help = () => {
  return (
    <div className={styles.helpContainer}>
      <h1 className={styles.title}>Help & Support</h1>
      <p className={styles.description}>
        We are here to assist you with any questions or concerns you may have
        regarding our products, orders, or services.
      </p>

      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <p className={styles.contactText}>
          If you need further assistance, feel free to reach out to our support
          team via the following methods:
        </p>
        <ul className={styles.contactList}>
          <li>
            Email:{" "}
            <a href="mailto:support@ecommerce.com">support@nexusmart.com</a>
          </li>
          <li>Phone: +1 (800) 123-4567</li>
          <li>Live Chat: Available 24/7 on our website</li>
          <li>Mailing Address: 123 nexusmart St, Shop City, EC 45678</li>
        </ul>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>How can I track my order?</h3>
          <p className={styles.answer}>
            You can track your order by visiting the "Track My Orders" section
            in your account.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>What is your return policy?</h3>
          <p className={styles.answer}>
            We accept returns within 30 days of delivery. Please ensure the
            product is in its original condition.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>How long does shipping take?</h3>
          <p className={styles.answer}>
            Shipping usually takes between 5-7 business days, depending on your
            location.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            Do you offer international shipping?
          </h3>
          <p className={styles.answer}>
            Yes, we offer international shipping to select countries. Shipping
            fees and times vary by destination.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            What payment methods do you accept?
          </h3>
          <p className={styles.answer}>
            We accept all major credit cards, debit cards, PayPal, and other
            secure payment options.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            How can I cancel or change my order?
          </h3>
          <p className={styles.answer}>
            You can cancel or modify your order within 24 hours of placing it by
            contacting our support team.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            Is my personal information secure?
          </h3>
          <p className={styles.answer}>
            Yes, we take your privacy seriously and use advanced security
            measures to protect your personal data.
          </p>
        </div>

        {/* Additional Questions */}
        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            What should I do if I receive a defective item?
          </h3>
          <p className={styles.answer}>
            If you receive a defective item, please contact our support team
            within 7 days of delivery for a replacement or refund.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            Can I change my shipping address after placing an order?
          </h3>
          <p className={styles.answer}>
            You can change your shipping address within 24 hours of placing your
            order by contacting our support team.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>Do you offer gift cards?</h3>
          <p className={styles.answer}>
            Yes, we offer gift cards that can be purchased on our website. They
            can be redeemed during checkout.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            How do I leave a review for a product?
          </h3>
          <p className={styles.answer}>
            You can leave a review by visiting the product page and clicking on
            the "Write a Review" section.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>
            What happens if my order is lost in transit?
          </h3>
          <p className={styles.answer}>
            If your order is lost in transit, please contact our support team,
            and we will investigate the issue and ensure you receive your order
            or a refund.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Help;
