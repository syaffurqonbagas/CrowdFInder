import {
  GET_POST_BEGIN,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  GET_SEARCH_BEGIN,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
  CLEAR,
} from "../action/type";

const initialState = {
  listPost: [],
  loading: false,
  error: null,
  // searchPost: {
  //   search: [],
  //   loading: false,
  //   error: null,
  // },
};

const posts = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_POST_BEGIN:
      return {
        ...state,

        loading: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,

        listPost: payload,
        loading: false,
        error: null,
      };
    case GET_POST_FAIL:
      return {
        ...state,

        loading: false,
        error: error,
      };
    // case GET_SEARCH_BEGIN:
    //   return {
    //     ...state,
    //     searchPost: {
    //       search: [],
    //       loading: true,
    //       error: null,
    //     },
    //   };
    // case GET_SEARCH_SUCCESS:
    //   return {
    //     ...state,
    //     searchPost: {
    //       search: payload,
    //       loading: false,
    //       error: null,
    //     },
    //   };
    // case GET_SEARCH_FAIL:
    //   return {
    //     ...state,
    //     searchPost: {
    //       search: [],
    //       loading: false,
    //       error: error,
    //     },
    //   };
    // case CLEAR:
    //   return {
    //     ...state,
    //     searchPost: {
    //       search: [],
    //       loading: false,
    //       error: null,
    //     },
    //   };
    default:
      return {
        ...state,
      };
  }
};

export default posts;
