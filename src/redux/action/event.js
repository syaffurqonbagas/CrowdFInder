import { POST_EVENT_BEGIN } from "./type";

export const postEvent = (data) => {
    console.log(data)
    return {
      type: POST_EVENT_BEGIN,
      data
    };
  };
