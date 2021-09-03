import { GET_POST_BEGIN, DELETE_POST_BEGIN, GET_POST_BY_ID_BEGIN } from "./type";

export const getPost = (page = 1) => {
  return {
    type: GET_POST_BEGIN,
    page,
  };
};

export const getPostById = (page, id) => {
  return {
    type: GET_POST_BY_ID_BEGIN,
    page,
    id,
  }
}

  export const deletePost = (id) => {
    return {
      type: DELETE_POST_BEGIN,
      id,
    };
  };

