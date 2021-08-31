import { GET_COMMENT_BEGIN } from "./type";

export const getComment = (id) => {
  // console.log('ini action')
    return {
      type: GET_COMMENT_BEGIN,
      id,
    };
  };