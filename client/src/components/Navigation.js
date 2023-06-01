import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navigation";
import NewCardList from "./NewsCardList";
const initialState = {
  searchQuery: "",
  searchInput: "",
};
const Navigation = () => {
  const [values, setValues] = useState(initialState);
  const [searchResults] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValues({ ...values, searchInput: value });
  };

  const handleSearchButtonClick = () => {
    setValues((prevValues) => ({
      ...prevValues,
      searchQuery: prevValues.searchInput,
    }));
    setSearchButtonClicked(true);
  };



  return (
    <>
      <Wrapper>
        <h1 className="nav-title">What's going on in the world?</h1>
        <p className="nav-text">
          Find the latest news on any topic and save them in your personal account.
        </p>
        <input
          className="nav-input"
          placeholder="Enter topic"
          name="searchQuery"
          value={values.searchInput}
          onChange={handleInputChange}
        />
        <button className="nav-btn" onClick={handleSearchButtonClick}>
          Search
        </button>
      </Wrapper>
      {searchButtonClicked && (
        <NewCardList query={values.searchQuery} searchResults={searchResults} />
      )}
    </>
  );
};

export default Navigation;