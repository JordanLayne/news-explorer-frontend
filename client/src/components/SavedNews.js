import React, { useContext } from "react";
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/SavedNews";

const SavedNews = () => {
  const { numSavedArticles, keywords } = useAppContext();

  return (
    <>
      <Wrapper>
        <div className="saved-news-container">
          <p className="saved-news-title">Saved articles</p>
          <p className="saved-news-message">
            Elise, you have {numSavedArticles} saved articles
          </p>
          <p className="saved-news-keywords">
            By keywords: <b>{keywords.join(", ")}</b>
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default SavedNews;
