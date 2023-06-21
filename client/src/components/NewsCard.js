import React, { useState } from "react";
import Wrapper from "../assets/wrappers/NewCard";
import { useAppContext } from "../context/appContext";

const NewCard = ({ searchResults, visibleResults }) => {
  const { toggleBookmark, saved, isLoggedIn, toggleModal, handleAddArticle,handleRemoveArticle,savedCards } =
    useAppContext();
  const [showExtraDiv,setShowExtraDiv] = useState(null);


  const handleBookmarkToggle = async (result) => {
    if (!isLoggedIn) {
      setShowExtraDiv(result.id);
    } else {
      const savedCard = savedCards.find((card) => card.title === result.title);
      if (savedCard) {
        const savedCardId = savedCard.id;
        handleRemoveArticle(savedCardId);
        toggleBookmark(result.id)
      } else {
        toggleBookmark(result.id);
        handleAddArticle(result);
      }
    }
  };

  return (
    <Wrapper>
      {searchResults.slice(0, visibleResults).map((result) => (
        <React.Fragment key={result.id}>
          <div className="container">
            <div
              className="container-top"
              style={{ backgroundImage: `url(${result.image})` }}
            >
              {!isLoggedIn && showExtraDiv === result.id &&  (
                <button
                  className="container-signin"
                  onClick={() => toggleModal(true, "register")}
                >
                  Sign in to save articles
                </button>
              )}
              <button
                className={`container-save ${
                  saved[result.id] ? "bookmarked" : "bookmark"
                }`}
                onClick={() => handleBookmarkToggle(result)}
              ></button>
            </div>
            <div className="container-bottom">
              <p className="container-date">{result.date}</p>
              <h2 className="container-title">{result.title}</h2>
              <p className="container-description">{result.text}</p>
              <p className="container-author">{result.source}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default NewCard;
