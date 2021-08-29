import { POST_EVENT } from "./type";

export const postEvent = (
    title, image, location, interest, content, date
  ) => {
    return {
      type: POST_EVENT,
      title,
      image,
      location,
      interest,
      content,
      date,
    };
  };
