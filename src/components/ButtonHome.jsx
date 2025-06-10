import React from "react";
import styles from "./ButtonHome.module.scss"; // ou use .css se preferir

function ButtonHome({ text, onClick, type = "button", className = "" }) {
  return (
    <button className={`${styles.customButton} ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default ButtonHome;