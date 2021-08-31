import { POST_ANNOUNCEMENT_BEGIN, UPDATE_ANNOUNCEMENT_BEGIN, DELETE_ANNOUNCEMENT_BEGIN } from "./type";

export const postAnnouncement = (data) => {
  console.log(data)
    return {
      type: POST_ANNOUNCEMENT_BEGIN,
      data
    };
  };

export const updateAnnouncement = (data) => {
  return {
    type: UPDATE_ANNOUNCEMENT_BEGIN,
    data
  };
};

export const deleteAnnouncement = (data) => {
  return {
    type: DELETE_ANNOUNCEMENT_BEGIN,
    data
  };
};
