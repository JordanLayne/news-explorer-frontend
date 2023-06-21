import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navigation";
import { useAppContext } from "../context/appContext";

const initialState = {
  searchQuery: "",
  searchInput: "",
};

const Navigation = () => {
  const { setSearchButtonClicked, setSearchQuery, searchButtonClicked, getSearchResults } =
    useAppContext();
  const [values, setValues] = useState(initialState);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValues({ ...values, searchInput: value });
    setSearchButtonClicked(false);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setValues((prevValues) => ({
      ...prevValues,
      searchQuery: prevValues.searchInput,
    }));
    setSearchButtonClicked(true);
    setSearchQuery(values.searchInput);
    getSearchResults(values.searchInput);
  };

  return (
    <>
      <Wrapper>
        <h2 className="nav-title">What's going on in the world?</h2>
        <p className="nav-text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form onSubmit={handleSearchSubmit}>
          <input
            className="nav-input"
            placeholder="Enter topic"
            name="searchQuery"
            value={values.searchInput}
            onChange={handleInputChange}
            required
          />
          <button
            className={`nav-btn ${searchButtonClicked ? "clicked" : ""}`}
            type="submit"
          >
            Search
          </button>
        </form>
      </Wrapper>
    </>
  );
};

export default Navigation;
