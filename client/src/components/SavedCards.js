import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SavedCard";

const SavedCard = ({ searchResults }) => {
  const [confirmRemoveId, setConfirmRemoveId] = useState(null);
  const [cards, setCards] = useState(searchResults);

  const handleRemoveCard = (id) => {
    setConfirmRemoveId(id);
  };

  const handleConfirmRemove = () => {
    if (confirmRemoveId !== null) {
      const updatedCards = cards.filter((card) => card.id !== confirmRemoveId);
      setCards(updatedCards);
      setConfirmRemoveId(null);
    }
  };

  return (
    <Wrapper>
      {cards.map((card) => (
        <React.Fragment key={card.id}>
          <div className="container">
            <div
              className="container-top"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="container-keyword">{card.keyword}</div>

              {confirmRemoveId === card.id && (
                <button
                  className="container-remove"
                  onClick={handleConfirmRemove}
                >
                  Remove from saved
                </button>
              )}
              <button
                className={`container-delete ${
                  confirmRemoveId === card.id ? "deleted" : ""
                }`}
                onClick={() => handleRemoveCard(card.id)}
              ></button>
            </div>
            <div className="container-bottom">
              <p className="container-date">{card.date}</p>
              <h2 className="container-title">{card.title}</h2>
              <p className="container-description">{card.description}</p>
              <p className="container-author">{card.author}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default SavedCard;
