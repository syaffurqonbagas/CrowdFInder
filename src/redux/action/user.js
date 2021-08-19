import { GET_REGISTER_BEGIN } from "./type";

export const getRegister = (Token) => {
    return {
      type: GET_REGISTER_BEGIN,
      Token,
    };
  };