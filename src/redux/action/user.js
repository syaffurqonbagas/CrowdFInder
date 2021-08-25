import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, GET_USER, GET_USER_ID } from "./type";

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
    type: LOGIN_SUCCESS,
    email,
    password,
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const getUser = () => {
  return {
    type: GET_USER
  }
}

export const getUserDetail = () => {
  return {
    type: GET_USER_ID
  }
}