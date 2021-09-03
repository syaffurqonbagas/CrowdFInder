import { GET_COMMENT_BEGIN, POST_COMMENT_BEGIN } from "./type";

export const getComment = (id) => {
  // console.log('ini action')
  return {
    type: GET_COMMENT_BEGIN,
    id,
  };
};

export const postComment = (post_id, body) => {
  // console.log('ini action')
  return {
    type: POST_COMMENT_BEGIN,
    post_id,
    body,
  };
};