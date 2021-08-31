import { REGISTER_BEGIN, LOGIN_BEGIN, LOGOUT, GET_USER_BEGIN, GET_USER_ID } from "./type";

export const Register = (
  role,
  email,
  password,
  username,
  fullname,
  location,
  interest,
) => {
  return {
    type: REGISTER_BEGIN,
    role,
    email,
    password,
    username,
    fullname,
    location,
    interest,
  };
};

export const Login = (email, password) => {
  return {
    type: LOGIN_BEGIN,
    email,
    password,
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const getCurrentUser = () => {
  return {
    type: GET_USER_BEGIN
  }
}


export const getUserDetail = () => {
  return {
    type: GET_USER_ID
  }
}