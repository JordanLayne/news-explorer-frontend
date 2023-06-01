import {
  TOGGLE_BOOKMARK,
  TOGGLE_DROPDOWN,
  TOGGLE_MODAL,
  SET_IS_LOADING,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SET_IS_LOGGEDIN,
  SIGN_OUT
} from "./actions";

const reducer = (state, action) => {
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
      showModal: !state.showModal,
    };
  }
  if (action.type === SET_IS_LOGGEDIN) {
    return {
      ...state,
      isLoggedIn: !state.isLoggedIn,
    };
  }
  if (action.type === TOGGLE_BOOKMARK) {
    const { payload: id } = action;
    const isSaved = state.saved[id];

    return {
      ...state,
      saved: {
        ...state.saved,
        [id]: !isSaved,
      },
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
      isLoggedIn: false,
      showDropdown:false,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
