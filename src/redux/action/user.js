import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "./type";

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
