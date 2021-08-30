import { REGISTER_BEGIN, LOGIN_BEGIN, LOGOUT, GET_USER_BEGIN, GET_USER_ID, UPDATE_USER_PROFILE } from "./type";

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
    type: REGISTER_BEGIN,
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

export const updateUser = (interest, fullname, username, email, location, image, bio) => {
  return {
    type: UPDATE_USER_PROFILE,
    interest,
    fullname,
    username,
    email,
    location,
    image,
    bio,
  }
}