import React, { useState } from "react";
import CardListWrapper from "../assets/wrappers/NewCardList";
import { useAppContext } from "../context/appContext";
import NewCard from "./NewsCard";
import Preloader from "./Preloader";
import img from "../assets/images/not-found.svg";

const NewCardList = () => {
  const {isLoading, searchButtonClicked, newsCards } =
    useAppContext();

  const [visibleResults, setVisibleResults] = useState(3);

  const handleShowMore = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 3);
  };

  return searchButtonClicked ? (
    <CardListWrapper>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {newsCards && newsCards.length > 0 ? (
            <>
              <h1 className="card-list__search-title">Search results</h1>
              <ul className="card-list__search-results">
                <NewCard searchResults={newsCards.slice(0, visibleResults)} />
              </ul>
              {newsCards.length > visibleResults && (
                <button className="card-list__show-btn" onClick={handleShowMore}>
                  Show more
                </button>
              )}
            </>
          ) : (
            <li className="card-list__no-result-container">
              <article className="card-list__no-result-article">
                <img
                  src={img}
                  alt="Not Found"
                  className="card-list__no-result-img"
                />
                <p className="card-list__no-result-title">Nothing found</p>
                <p className="card-list__no-result-text">
                  Sorry, but nothing matched your search terms.
                </p>
              </article>
            </li>
          )}
        </>
      )}
    </CardListWrapper>
  ) : null;
};

export default NewCardList;
