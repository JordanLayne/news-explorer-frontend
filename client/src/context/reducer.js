import {
  TOGGLE_BOOKMARK,
  TOGGLE_DROPDOWN,
  TOGGLE_MODAL,
  SET_IS_LOADING,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SET_IS_LOGGEDIN,
  SIGN_OUT,
  SET_SEARCH_BUTTON_CLICKED,
  SET_SEARCH_QUERY,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  SET_TOKEN,
  SET_NEWS_CARDS,
  SET_SAVED_CARDS,
  SET_SAVED_ARTICLE_STATS
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SET_TOKEN) {
    return { ...state, token: action.payload };
  }

  if (action.type === SET_NEWS_CARDS) {
    return { ...state, newsCards: action.payload };
  }
  if (action.type === SET_SAVED_CARDS) {
    return { ...state, savedCards: action.payload };
  }
  if (action.type === SET_SAVED_ARTICLE_STATS) {
    return {
      ...state,
      numSavedArticles: action.payload.numSavedArticles,
      keywords: action.payload.keywords,
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === TOGGLE_DROPDOWN) {
    return {
      ...state,
      showDropdown: !state.showDropdown,
    };
  }
  if (action.type === TOGGLE_MODAL) {
    return {
      ...state,
      showModal: action.payload.showModal,
      modalType: action.payload.modalType,
    };
  }
  if (action.type === SET_IS_LOGGEDIN) {
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  if (action.type === TOGGLE_BOOKMARK) {
    const { payload: id } = action;
    const updatedSaved = { ...state.saved };
    updatedSaved[id] = !updatedSaved[id];
    return {
      ...state,
      saved: updatedSaved,
    };
  }
  if (action.type === SET_IS_LOADING) {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  if (action.type === SIGN_OUT) {
    return {
      ...state,
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
  }
  if (action.type === SET_SEARCH_BUTTON_CLICKED) {
    return {
      ...state,
      searchButtonClicked: action.payload,
    };
  }

  if (action.type === SET_SEARCH_QUERY) {
    return {
      ...state,
      searchQuery: action.payload,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
