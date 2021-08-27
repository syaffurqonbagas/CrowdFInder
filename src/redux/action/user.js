import { REGISTER_SUCCESS, LOGIN_BEGIN, LOGOUT, GET_USER, GET_USER_ID, GET_USER_BEGIN } from "./type";

export const Register = (
  email,
  password,
  username,
  fullname,
  location,
  role,
  interest
) => {
  return {
    type: REGISTER_SUCCESS,
    email,
    password,
    username,
    fullname,
    location,
    role,
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