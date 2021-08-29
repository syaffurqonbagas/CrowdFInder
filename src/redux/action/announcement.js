import { POST_ANNOUNCEMENT } from "./type";

export const postAnnouncement = (
    announcement, image
  ) => {
    return {
      type: POST_ANNOUNCEMENT,
      announcement, 
      image,
    };
  };
