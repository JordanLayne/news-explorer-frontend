import React, { useState} from "react";
import SavedCardWrapper from "../assets/wrappers/SavedCard";
import { useAppContext } from "../context/appContext";
import { useLocation } from "react-router-dom";

const SavedCard = ({ savedCards }) => {
  const [confirmRemoveId, setConfirmRemoveId] = useState(null);
  const { handleRemoveArticle } = useAppContext();
  const [cards, setCards] = useState(savedCards);
  const location = useLocation();
  const handleRemoveCard = (_id) => {
    setConfirmRemoveId(_id);
  };

  const handleConfirmRemove = (_id) => {
    if (_id !== null) {
      handleRemoveArticle(_id,location.pathname)
        .then(() => {
          const updatedCards = cards.filter((card) => card._id !== _id);
          setCards(updatedCards);
          setConfirmRemoveId(null);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <SavedCardWrapper>
      {cards.map((card) => (
        <React.Fragment key={card._id}>
          <div className="container">
            <div
              className="container-top"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="container-keyword">{card.keyword}</div>

              {confirmRemoveId === card._id && (
                <button
                  className="container-remove"
                  onClick={() => handleConfirmRemove(card._id)}
                >
                  Remove from saved
                </button>
              )}
              <button
                className={`container-delete ${
                  confirmRemoveId === card._id ? "deleted" : ""
                }`}
                onClick={() => handleRemoveCard(card._id)}
              ></button>
            </div>
            <div className="container-bottom">
              <p className="container-date">{card.date}</p>
              <h2 className="container-title">{card.title}</h2>
              <p className="container-description">{card.text}</p>
              <p className="container-author">{card.source}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </SavedCardWrapper>
  );
};

export default SavedCard;