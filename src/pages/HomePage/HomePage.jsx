import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { activateCard, removeCard } from "../../store/cardsSlice";
import styles from "./HomePage.module.css";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  const handleActivate = (id) => {
    dispatch(activateCard(id));
  };

  const handleRemove = (id) => {
    dispatch(removeCard(id));
  };

  const activeCard = cards.find((card) => card.isActive);
  const inactiveCards = cards.filter((card) => !card.isActive);

  return (
    <div className={styles.HomePage}>
      <h1>Välkommen till E-wallet</h1>

      {activeCard && (
        <div>
          <h2>Aktivt kort</h2>
          <div className={styles.cardsContainer}>
            <Link to={`/card/${activeCard.id}`}>
              <Card
                cardIssuer={activeCard.cardIssuer}
                cardNumber={activeCard.cardNumber}
                cardHolder={activeCard.cardHolder}
                expireMonth={activeCard.expireMonth}
                expireYear={activeCard.expireYear}
              />
            </Link>
          </div>
        </div>
      )}

      <h2>Inaktiva kort</h2>
      <div className={styles.cardsContainer}>
        {inactiveCards.length === 0 ? (
          <p>Du har inga inaktiva kort</p>
        ) : (
          inactiveCards.map((card) => (
            <div key={card.id} className={styles.card}>
              <Link to={`/card/${card.id}`}>
                <Card
                  cardIssuer={card.cardIssuer}
                  cardNumber={card.cardNumber}
                  cardHolder={card.cardHolder}
                  expireMonth={card.expireMonth}
                  expireYear={card.expireYear}
                />
              </Link>
              <button
                onClick={() => handleActivate(card.id)}
                className={styles.button}
              >
                Aktivera kort
              </button>
              <button
                onClick={() => handleRemove(card.id)}
                className={styles.button}
              >
                Radera kort
              </button>
            </div>
          ))
        )}
      </div>

      <Link to="/addcard">
        <button className={styles.addCardButton}>
          Lägg till ett nytt kort
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
