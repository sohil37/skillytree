import React from "react";
import styles from "../../stylesheets/components/buttons/curvedButton.module.css";

function CurvedLargeButton(props: {
  children: JSX.Element;
  width: number;
  height: number;
}) {
  return (
    <button
      className={styles.btn}
      style={{ height: props.height, width: props.width }}
    >
      {props.children}
    </button>
  );
}

export default CurvedLargeButton;
