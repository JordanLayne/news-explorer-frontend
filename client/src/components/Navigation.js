import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navigation";
import { useAppContext } from "../context/appContext";
const initialState = {
  searchQuery: "",
  searchInput: "",
};
const Navigation = () => {
  const { setSearchButtonClicked, setSearchQuery, searchButtonClicked } =
    useAppContext();
  const [values, setValues] = useState(initialState);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValues({ ...values, searchInput: value });
    setSearchButtonClicked(false);
  };

  const handleSearchButtonClick = () => {
    setValues((prevValues) => ({
      ...prevValues,
      searchQuery: prevValues.searchInput,
    }));
    setSearchButtonClicked(true);
    setSearchQuery(values.searchInput);
  };

  return (
    <>
      <Wrapper>
        <h1 className="nav-title">What's going on in the world?</h1>
        <p className="nav-text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <input
          className="nav-input"
          placeholder="Enter topic"
          name="searchQuery"
          value={values.searchInput}
          onChange={handleInputChange}
        />
        <button
          className={`nav-btn ${searchButtonClicked ? "clicked" : ""}`}
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </Wrapper>
    </>
  );
};

export default Navigation;
