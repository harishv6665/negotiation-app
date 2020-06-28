import React from "react";
import styles from "./Input.module.css";

const Input = ({ value, onChange, placeholder }) => (
    <input
        className={styles.input}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export default Input;
