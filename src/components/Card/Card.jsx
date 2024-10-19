import React from "react";
import styles from "./Card.module.css";
import visaLogo from "../../assets/visa.svg";
import amexLogo from "../../assets/Amex.svg";
import masterCardLogo from "../../assets/MasterCard.svg.webp";
import cgbLogo from "../../assets/CGB-Logo.png";
import nordeaLogo from "../../assets/nordea-logo.webp";

const Card = ({
  cardIssuer,
  cardNumber,
  cardHolder,
  expireMonth,
  expireYear,
}) => {
  const getLogo = () => {
    switch (cardIssuer.toLowerCase()) {
      case "visa":
        return visaLogo;
      case "mastercard":
        return masterCardLogo;
      case "american express":
        return amexLogo;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.card} ${styles[cardIssuer.toLowerCase()]} `}>
      <div className={styles.cardIssuer}>
        <img src={nordeaLogo} alt="Nordea Logo" className={styles.bankLogo} />
        <img src={getLogo()} alt={cardIssuer} className={styles.logo} />
      </div>
      <div className={styles.cardNumber}>
        **** **** **** {cardNumber.slice(-4)}
      </div>
      <div className={styles.cardHolder}>
        <span>Kortinnehavare: {cardHolder}</span>
      </div>
      <div className={styles.expirationDate}>
        <span>Giltig till:</span> {expireMonth} / {expireYear}
      </div>
    </div>
  );
};

export default Card;
