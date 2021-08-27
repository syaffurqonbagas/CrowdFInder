import { GET_POST_BEGIN } from "./type";

export const getPost = (page = 1) => {
    return {
      type: GET_POST_BEGIN,
      page,
    };
  };
  

