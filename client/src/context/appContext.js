import React, { useReducer, useContext, useEffect } from "react";
import { addArticle, removeArticle, getArticles } from "../utils/mainApi";
import axios from "axios";
import { getSearchResults as getSearchResultsAPI } from "../utils/api";
import reducer from "./reducer";
import { processRes,baseUrl } from "../utils/constants";
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
  SET_TOKEN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  SET_NEWS_CARDS,
  SET_SAVED_CARDS,
  SET_SAVED_ARTICLE_STATS,
  SETUP_USER_BEGIN,
} from "./actions";
const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => processRes(res))
    .then((data) => data);
};
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  showDropdown: false,
  isLoggedIn: false,
  user: null,
  showModal: false,
  saved: {},
  searchButtonClicked: false,
  searchQuery: "",
  modalType: "",
  token: null,
  savedCards: [],
  newsCards: [],
  numSavedArticles: 0,
  keywords: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api = axios.create({
    baseURL: {baseUrl},
  });

  api.interceptors.request.use((config) => {
    if (state.token) {
      config.headers.Authorization = `Bearer ${state.token}`;
    }
    return config;
  });
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getCurrentUser(token);
      getArticles(token)
        .then((data) => {
          dispatch({
            type: SET_SAVED_CARDS,
            payload: data,
          });
          const numSavedArticles = data.length;
          const allKeywords = data.map((article) => article.keyword);
          const uniqueKeywords = [...new Set(allKeywords)];
          dispatch({
            type: "SET_SAVED_ARTICLE_STATS",
            payload: { numSavedArticles, keywords: uniqueKeywords },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    // eslint-disable-next-line
  }, []);

  const getSearchResults = async (query) => {
    if (!query) {
      dispatch({ type: SET_NEWS_CARDS, payload: [] });
      return;
    }

    try {
      dispatch({ type: "SET_IS_LOADING", payload: true });
      const results = await getSearchResultsAPI(query);
      dispatch({ type: SET_NEWS_CARDS, payload: results });
      dispatch({ type: "SET_IS_LOADING", payload: false });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await api.post(`/${endPoint}`, currentUser);

      const { user, token } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, alertText },
      });

      dispatch({ type: SET_TOKEN, payload: token });
      if (endPoint === "signup") {
        toggleModal(true, "success");
      }
      if (endPoint === "signin") {
        toggleModal(false);
        setIsLoggedin(true);
        getCurrentUser(token);
      }
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
    clearAlert();
  };

  const handleAddArticle = (article) => {
    return new Promise((resolve, reject) => {
      addArticle(article, state.token)
        .then((data) => {
          const updatedCard = {
            ...article,
            id: data.data._id,
            _id: data.data._id,
          };
          dispatch({
            type: SET_SAVED_CARDS,
            payload: [...state.savedCards, updatedCard],
          });
          const numSavedArticles = state.savedCards.length + 1;
          const allKeywords = [...state.savedCards, updatedCard].map(
            (article) => article.keyword
          );
          const uniqueKeywords = [...new Set(allKeywords)];
          dispatch({
            type: SET_SAVED_ARTICLE_STATS,
            payload: { numSavedArticles, keywords: uniqueKeywords },
          });
          resolve(data);
        })
        .catch((error) => {
          dispatch({
            type: SETUP_USER_ERROR,
            payload: { msg: error.response.data.message },
          });
        });
    });
  };

  const handleRemoveArticle = (articleId, pathname) => {
    return new Promise((resolve, reject) => {
      removeArticle(articleId, state.token)
        .then((data) => {
          const updatedCards = state.savedCards.filter(
            (card) => card._id !== articleId
          );
          dispatch({ type: SET_SAVED_CARDS, payload: updatedCards });
          const numSavedArticles = updatedCards.length;
          const allKeywords = updatedCards.map((article) => article.keyword);
          const uniqueKeywords = [...new Set(allKeywords)];
          dispatch({
            type: SET_SAVED_ARTICLE_STATS,
            payload: { numSavedArticles, keywords: uniqueKeywords },
          });

          if (pathname === "/saved-articles") {
            dispatch({ type: SET_NEWS_CARDS, payload: [] });
            setSearchButtonClicked(false);
          }
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: "SET_IS_LOADING", payload: false });
          reject(error);
        });
    });
  };
  const getCurrentUser = async (token) => {
    try {
      const user = await checkToken(token);
      dispatch({ type: SETUP_USER_SUCCESS, payload: { user, alertText: "" } });
      dispatch({ type: SET_TOKEN, payload: token });
      setIsLoggedin(true);
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.message },
      });
    }
  };

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
        setupUser,
        handleAddArticle,
        handleRemoveArticle,
        getSearchResults,
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
