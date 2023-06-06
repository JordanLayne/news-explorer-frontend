import React, { useState } from "react";
import Wrapper from "../assets/wrappers/NewCard";
import { useAppContext } from "../context/appContext";

const NewCard = ({ searchResults, visibleResults }) => {
  const { toggleBookmark, saved, isLoggedIn, toggleModal } = useAppContext();
  const [showExtraDiv, setShowExtraDiv] = useState(false);
  const handleBookmarkToggle = (id) => {
    if (!isLoggedIn) {
      setShowExtraDiv(id);
    } else {
      toggleBookmark(id);
    }
  };
  return (
    <Wrapper>
      {searchResults.slice(0, visibleResults).map((result) => (
        <React.Fragment key={result.id}>
          <div className="container">
            <div
              className="container-top"
              style={{ backgroundImage: `url(${result.imageUrl})` }}
            >
              {!isLoggedIn && showExtraDiv === result.id && (
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
                onClick={() => handleBookmarkToggle(result.id)}
              ></button>
            </div>
            <div className="container-bottom">
              <p className="container-date">{result.date}</p>
              <h2 className="container-title">{result.title}</h2>
              <p className="container-description">{result.description}</p>
              <p className="container-author">{result.author}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default NewCard;
