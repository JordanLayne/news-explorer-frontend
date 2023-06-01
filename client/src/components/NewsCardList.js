import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/NewCardList";
import { useAppContext } from "../context/appContext";
import { getSearchResults } from "../utils/api";
import NewCard from "./NewsCard";
import Preloader from "./Preloader";
const NewCardList = ({ query }) => {
  const { setIsLoading, isLoading } = useAppContext();
  const [results, setResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState(3);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true);
        const searchResults = await getSearchResults(query);
        setResults(searchResults);
      } catch (error) {
        console.error("Error:", error);
      }
      setIsLoading(false);
    };
    if (query) {
      fetchSearchResults();
    }
    // eslint-disable-next-line
  }, [query]);
  const handleShowMore = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 3);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h1 className="search-title">Search results</h1>
          <div className="search-results">
            {results && results.length > 0 ? (
              <NewCard searchResults={results.slice(0, visibleResults)} />
            ) : (
              <p>No results found.</p>
            )}
          </div>
          {results && results.length > visibleResults && (
            <button className="show-btn" onClick={handleShowMore}>
              Show more
            </button>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default NewCardList;
