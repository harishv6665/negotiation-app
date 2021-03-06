import React from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = ({ title, temperature, children, onClose }) => (
    <div className={styles.overlay}>
        <div className={styles.modal}>
            <h4 className={styles.modal__title}>{title}</h4>
            <div className={styles.modal__body}>{children}</div>
            <footer className={styles.modal__footer}>
                <Button onClick={onClose} title="Done" />
                <p className={styles.modal__footer__msg}>Weather in London, GB: <strong>{temperature}&deg;C</strong></p>
            </footer>
        </div>
    </div>
)

export default Modal;
