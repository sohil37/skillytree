import React from "react";
import styles from "../../stylesheets/components/buttons/roundedButton.module.css";

function RoundedLargeButton(props: {
  style: {
    height: number;
    width: number;
  };
  children: string;
}) {
  return (
    <button style={props.style} className={styles.btn}>
      {props.children}
    </button>
  );
}

export default RoundedLargeButton;
