import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { activateCard, removeCard } from "../../store/cardsSlice";
import styles from "./HomePage.module.css";
import Card from "../../components/Card/card";

const HomePage = () => {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  const handleActivate = (id) => {
    dispatch(activateCard(id));
  };

  const handleRemove = (id) => {
    dispatch(removeCard(id));
  };

  // Filtrera ut det aktiva kortet och de inaktiva
  const activeCard = cards.find((card) => card.isActive);
  const inactiveCards = cards.filter((card) => !card.isActive);

  return (
    <div className={styles.HomePage}>
      <h1>Välkommen till E-wallet</h1>

      {/* Visa det aktiva kortet  */}

      {activeCard && (
        <div>
          <h2>Aktivt kort</h2>
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
      )}

      {/* Visa de inaktiva korten  */}

      <div>
        <h2>Inaktiva kort</h2>
        {inactiveCards.length === 0 ? (
          <p>Du har inga inaktiva kort</p>
        ) : (
          <div>
            {inactiveCards.map((card) => (
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
                <button onClick={() => handleActivate(card.id)}>
                  Aktivera kort
                </button>
                <button
                  onClick={() => handleRemove(card.id)}
                  className={styles.removeButton}
                >
                  Radera kort
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 
      {cards.length === 0 ? (
        <p>Du har inga kort ännu. Klicka på knappen för att lägga till kort.</p>
      ) : (
        <div>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <Card
                cardIssuer={card.cardIssuer}
                cardNumber={card.cardNumber}
                cardHolder={card.cardHolder}
                expireMonth={card.expireMonth}
                expireYear={card.expireYear}
              />
              {!card.isActive && (
                <button onClick={() => handleActivate(card.id)}>
                  Aktivera kort
                </button>
              )}
            </div>
          ))}
        </div>
      )} */}

      <Link to="/addcard">
        <button className={styles.addCardButton}>
          Lägg till ett nytt kort
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
