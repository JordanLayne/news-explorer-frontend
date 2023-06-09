import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import {
  TOGGLE_DROPDOWN,
  TOGGLE_MODAL,
  TOGGLE_BOOKMARK,
  SET_IS_LOADING,
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SET_IS_LOGGEDIN,
  SIGN_OUT,
  SET_SEARCH_BUTTON_CLICKED,
  SET_SEARCH_QUERY,
} from "./actions";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  showDropdown: false,
  isLoggedIn: false,
  showModal: false,
  saved: {},
  searchButtonClicked: false,
  searchQuery: "",
  modalType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const setIsLoggedin = () => {
    dispatch({ type: SET_IS_LOGGEDIN });
  };
  const toggleDropdown = () => {
    dispatch({ type: TOGGLE_DROPDOWN });
  };
  const toggleModal = (showModal, modalType = "") => {
    dispatch({ type: TOGGLE_MODAL, payload: { showModal, modalType } });
  };
  const toggleBookmark = (id) => {
    dispatch({ type: TOGGLE_BOOKMARK, payload: id });
  };
  const setIsLoading = (isLoading) => {
    dispatch({ type: SET_IS_LOADING, payload: isLoading });
  };
  const signOut = () => {
    dispatch({ type: SIGN_OUT });
  };
  const setSearchButtonClicked = (searchButtonClicked) => {
    dispatch({ type: SET_SEARCH_BUTTON_CLICKED, payload: searchButtonClicked });
  };
  const setSearchQuery = (query) => {
    dispatch({
      type: SET_SEARCH_QUERY,
      payload: query,
    });
  };
 

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleDropdown,
        toggleModal,
        toggleBookmark,
        setIsLoading,
        clearAlert,
        displayAlert,
        setIsLoggedin,
        signOut,
        setSearchButtonClicked,
        setSearchQuery,
  
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
