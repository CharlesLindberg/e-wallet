import { createSlice } from "@reduxjs/toolkit";

// Funktion för att spara kort i local storage
const saveToLocalStorage = (cards) => {
  localStorage.setItem("cards", JSON.stringify(cards));
};

// Hämta från local storage
const getFromLocalStorage = () => {
  const savedCards = localStorage.getItem("cards");
  return savedCards ? JSON.parse(savedCards) : [];
};

const initialState = {
  cards: getFromLocalStorage(),
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      console.log("Payload vid addCard: ", action.payload);
      const newCard = {
        ...action.payload,
        id: Date.now(),
        isActive: false,
      };
      state.cards.push(newCard);
      saveToLocalStorage(state.cards);
    },
    activateCard: (state, action) => {
      // Sätt alla kort till inaktiv
      state.cards.forEach((card) => {
        card.isActive = false;
      });

      const cardToActivate = state.cards.find(
        (card) => card.id === action.payload
      );
      if (cardToActivate) {
        cardToActivate.isActive = true;
      }
      saveToLocalStorage(state.cards);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
      saveToLocalStorage(state.cards);
    },
    updateCard: (state, action) => {
      const { id, updatedCard } = action.payload;
      const cardIndex = state.cards.findIndex((card) => card.id === id);

      if (cardIndex !== -1) {
        state.cards[cardIndex] = {
          ...state.cards[cardIndex],
          ...updatedCard,
        };
        saveToLocalStorage(state.cards);
      }
    },
  },
});

export const { addCard, activateCard, removeCard, updateCard } =
  cardsSlice.actions;
export default cardsSlice.reducer;
