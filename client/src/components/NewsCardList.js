import React, { useState, useEffect } from "react";
import CardListWrapper from "../assets/wrappers/NewCardList";
import { useAppContext } from "../context/appContext";
import { getSearchResults } from "../utils/api";
import NewCard from "./NewsCard";
import Preloader from "./Preloader";
import img from "../assets/images/not-found.svg";

const NewCardList = () => {
  const { setIsLoading, isLoading, searchQuery, searchButtonClicked } =
    useAppContext();
  const [results, setResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState(3);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true);
        const searchResults = await getSearchResults(searchQuery);
        setResults(searchResults);
      } catch (error) {
        console.error("Error:", error);
      }
      setIsLoading(false);
    };
    if (searchButtonClicked) {
      fetchSearchResults();
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  const handleShowMore = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 3);
  };

  return searchButtonClicked ? (
    <CardListWrapper>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {results && results.length > visibleResults ? (
            <h1 className="card-list__search-title">Search results</h1>
          ) : null}
          <div className="card-list__search-results">
            {results && results.length > 0 ? (
              <NewCard searchResults={results.slice(0, visibleResults)} />
            ) : (
              <div className="card-list__no-result-container">
                <img
                  src={img}
                  alt="Not Found"
                  className="card-list__no-result-img"
                />
                <p className="card-list__no-result-title">Nothing found</p>
                <p className="card-list__no-result-text">
                  Sorry, but nothing matched your search terms.
                </p>
              </div>
            )}
          </div>
          {results && results.length > visibleResults && (
            <button className="card-list__show-btn" onClick={handleShowMore}>
              Show more
            </button>
          )}
        </>
      )}
    </CardListWrapper>
  ) : null;
};

export default NewCardList;
