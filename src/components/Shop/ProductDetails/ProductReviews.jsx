import React, { useState } from 'react';
import styles from './ProductReviews.module.css'; 

const ProductReviews = () => {
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5); 
  const [reviews, setReviews] = useState([
    { text: "Great product! Highly recommend it.", rating: 5 },
    { text: "Good value for money.", rating: 4 },
    { text: "Satisfactory performance, but could improve.", rating: 3 },
    { text: "Did not meet my expectations.", rating: 2 },
    { text: "Terrible! I want a refund.", rating: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      const newReviews = [...reviews, { text: newReview, rating: newRating }];
      setReviews(newReviews);
      setNewReview('');
      setNewRating(5); 
    }
  };

  return (
    <div className={styles.productReviews}>
      <h3>Customer Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className={styles.review}>
            <p>{review.text}</p>
            <span>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to review this product!</p>
      )}
      
      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Leave your review here..."
          required
        />
        
        <div className={styles.ratingSelection}>
          <span>Select Rating: </span>
          {[1, 2, 3, 4, 5].map(star => (
            <span 
              key={star} 
              className={`${styles.star} ${newRating >= star ? styles.selected : ''}`} 
              onClick={() => setNewRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ProductReviews;
