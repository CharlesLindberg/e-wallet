import React from "react";
import styles from "./Card.module.css";

const Card = ({
  cardIssuer,
  cardNumber,
  cardHolder,
  expireMonth,
  expireYear,
}) => {
  return (
    <div className={`${styles.card} ${styles[cardIssuer.toLowerCase()]} `}>
      <div className={styles.cardIssuer}>{cardIssuer}</div>
      <div className={styles.cardNumber}>{cardNumber}</div>
      <div className={styles.cardHolder}>{cardHolder}</div>
      <div className={styles.expirationDate}>
        <span>
          Giltig till: {expireMonth} / {expireYear}
        </span>
      </div>
    </div>
  );
};

export default Card;
