import React from "react";
import styles from "./AddCardPage.module.css";
import { useState } from "react";
import { addCard } from "../../store/cardsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddCardPage = () => {
  // state för att hålla koll på fältens värden
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardIssuer, setCardIssuer] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [exprieMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [ccv, setCCV] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addCard({
        cardIssuer,
        cardNumber,
        cardHolder,
        exprieMonth,
        expireYear,
        ccv,
      })
    );

    navigate("/");
  };

  return (
    <div className={styles.AddCardPage}>
      <h1>Lägg till nytt kort</h1>

      {/* Förmulär för att lägga till kort  */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Kortutgivare</label>
          <select
            value={cardIssuer}
            onChange={(e) => setCardIssuer(e.target.value)}
          >
            <option value="">Välj kortutgivare</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="American Express">American Express</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Kortnummer</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setcardNumber(e.target.value)}
            maxLength="16"
            required
            placeholder="Kortnummer"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Kortinnehavare</label>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            required
            placeholder="Namn på kortinnehavaren"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Utångsdatum</label>
          <input
            type="text"
            value={exprieMonth}
            onChange={(e) => setExpireMonth(e.target.value)}
            required
            maxLength="2"
            placeholder="MM"
          />
          <input
            type="text"
            value={expireYear}
            onChange={(e) => setExpireYear(e.target.value)}
            required
            maxLength="4"
            placeholder="YYYY"
          />

          <div className={styles.formGroup}>
            <label>CCV</label>
            <input
              type="text"
              value={ccv}
              onChange={(e) => setCCV(e.target.value)}
              maxLength="3"
              required
              placeholder="xxx"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Lägg till kort
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCardPage;
