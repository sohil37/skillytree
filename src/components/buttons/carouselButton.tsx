import React from "react";
import styles from "../../stylesheets/components/buttons/carouselButton.module.css";

function CarouselButton(props: { active?: boolean }) {
  return (
    <button
      className={`${styles.btn} ${props.active ? styles.active : ""}`}
    ></button>
  );
}

export default CarouselButton;
