import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, title }) => (
    <button onClick={onClick} className={styles.button}>{title}</button>
);

export default Button;
