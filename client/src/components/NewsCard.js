import React, { useState } from "react";
import Wrapper from "../assets/wrappers/NewCard";
import bookmark from "../assets/images/bookmark.svg";
import bookmarked from "../assets/images/bookmarked.svg";
import { useAppContext } from "../context/appContext";

const NewCard = ({ searchResults, visibleResults }) => {
  const { toggleBookmark, saved, isLoggedIn,toggleModal } = useAppContext();
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
  <button className="card-sign-in" onClick={toggleModal}>Sign in to save articles</button>
)}
              <button
                className="container-save"
                onClick={() => handleBookmarkToggle(result.id)}
              >
                <img
                  className={`bookmark${!saved[result.id] ? " toggled" : ""}`}
                  src={saved[result.id] ? bookmarked : bookmark}
                  alt="Bookmark"
                />
              </button>
            </div>
            <div className="container-bottom">
            
              <p className="container-date">{result.date}</p>
              <p className="container-title">{result.title}</p>
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
