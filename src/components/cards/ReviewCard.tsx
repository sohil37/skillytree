import React from "react";
import styles from "../../stylesheets/components/cards/reviewCard.module.css";

function ReviewCard(props: {
  customerAvatarUrl: string;
  name: string;
  email: string;
  review: string;
}) {
  return (
    <div className={`${styles.glass} ${styles.reviewCard}`}>
      <div className={styles.customerInfoContainer}>
        <img src={props.customerAvatarUrl} alt="customer avatar" />
        <div className={styles.customerInfo}>
          <h3 className={styles.name}>{props.name}</h3>
          <p className={styles.email}>{props.email}</p>
        </div>
      </div>
      <p className={styles.review}>{props.review}</p>
    </div>
  );
}

export default ReviewCard;
