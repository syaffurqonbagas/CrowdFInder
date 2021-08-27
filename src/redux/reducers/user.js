import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_USER,
  LOGOUT,
} from "../action/type";

// const users = JSON.parse(localStorage.getItem("user"));

const initialState = { isLoggedIn: false, user: null };

const userData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case GET_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    default:
      return state;
  }
};

export default userData;
