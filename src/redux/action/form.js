import { POST_EVENT_BEGIN } from "./type";

export const PostEvent = (
    title, image, location, interest, content, date
  ) => {
    return {
      type: POST_EVENT_BEGIN,
      title,
      image,
      location,
      interest,
      content,
      date,
    };
  };
