import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activateCard, removeCard } from "../../store/cardsSlice";
import styles from "./CardDetailPage.module.css";

const CardDetailPage = () => {
  const { id } = useParams(); // Tar emot kortets id from url
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const card = useSelector((state) =>
    state.cards.cards.find((card) => card.id === Number(id))
  );

  const [isEditing, setIsEditing] = useState(false);
  const [cardHolder, setCardHolder] = useState(card.cardHolder);
  const [expireMonth, setExpireMonth] = useState(card.expireMonth);
  const [expireYear, setExpireYear] = useState(card.expireYear);

  const handleSave = () => {
    // Spara ändringarna i kortinformationen (implementera senare)
    setIsEditing(false);
  };

  const handleActivate = () => {
    dispatch(activateCard(card.id));
    navigate("/"); // Navigera till startsidan
  };

  if (!card) {
    return <p>Kortet hittades inte.</p>;
  }

  return (
    <div className={styles.cardDetailsPage}>
      <h1>Detaljer för kort med ID: {id}</h1>
      <div className={styles.cardInfo}>
        <p>
          <strong>Kortutgivare: </strong>
          {card.cardIssuer}
        </p>
        <p>
          <strong>Kortnummer: </strong>**** **** ****{" "}
          {card.cardNumber.slice(-4)}
        </p>

        {isEditing ? (
          <div>
            <label>Kortinnehavare:</label>
            <input
              type="text"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
            <label> Giltig till (MM/ÅÅÅÅ):</label>
            <input
              type="text"
              value={expireMonth}
              onChange={(e) => setExpireMonth(e.target.value)}
              maxLength="2"
              placeholder="MM"
            />
            <input
              type="text"
              value={expireYear}
              onChange={(e) => setExpireYear(e.target.value)}
              maxLength="4"
              placeholder="ÅÅÅÅ"
            />
            <button onClick={handleSave} className={styles.button}>
              Spara ändringar
            </button>
          </div>
        ) : (
          <div>
            <p>
              <strong>Kortinnehavare:</strong> {card.cardHolder}
            </p>
            <p>
              <strong>Giltig till:</strong> {card.expireMonth} /{" "}
              {card.expireYear}
            </p>
          </div>
        )}

        {!card.isActive && (
          <div>
            <button
              className={styles.button}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Avbryt" : "Redigera kort"}
            </button>
            <button className={styles.button} onClick={handleActivate}>
              Aktivera kort
            </button>
            <button
              onClick={() => dispatch(removeCard(card.id))}
              className={styles.button}
            >
              Radera kort
            </button>
          </div>
        )}

        {card.isActive && (
          <p>
            Kortet är aktivt. Du kan inte redigera eller radera ett aktivt kort
          </p>
        )}
      </div>
    </div>
  );
};

export default CardDetailPage;
