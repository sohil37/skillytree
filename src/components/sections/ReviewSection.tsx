import React from "react";
import styles from "../../stylesheets/components/sections/reviewSection.module.css";
import ReviewsCarousel from "../carousels/ReviewsCarousel";

function ReviewSection() {
  return (
    <div className={`container ${styles.reviewSection}`}>
      <div className={styles.reviewsFromOurCustomers}>
        <h1 className={styles.reviewsFromOur}>REVIEWS FROM OUR</h1>
        &nbsp;&nbsp;
        <h1 className={styles.customers}>CUSTOMERS</h1>
      </div>
      <div className={styles.reviewCarousel}>
        <ReviewsCarousel />
      </div>
      <div className={styles.ellipse1}></div>
      <div className={styles.ellipse2}></div>
      <div className={styles.ellipse3}></div>
      <div className={styles.ellipse4}></div>
    </div>
  );
}

export default ReviewSection;
