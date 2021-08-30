import { POST_ANNOUNCEMENT_BEGIN } from "./type";

export const postAnnouncement = (data) => {
  console.log(data)
    return {
      type: POST_ANNOUNCEMENT_BEGIN,
      data
    };
  };
