import { GET_COMMENT_BEGIN } from "./type";

export const getComment = (id) => {
    return {
      type: GET_COMMENT_BEGIN,
      id,
    };
  };