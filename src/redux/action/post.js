import { GET_POST_BEGIN, GET_SEARCH_BEGIN, CLEAR } from "./type";

export const getPost = (page = 1) => {
    return {
      type: GET_POST_BEGIN,
      page,
    };
  };

export const searchFunction = (body) => {
  return {
    type: GET_SEARCH_BEGIN,
    body,
  }
}

export const clearPost = () => {
  return {
    type: CLEAR,
  };
};




