import { REGISTER_SUCCESS, LOGIN_BEGIN, LOGOUT, GET_USER } from "./type";

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

export const logout = () =>{
    return {
        type:LOGOUT
    }
}

export const getUser = () => {
 return {
   type:GET_USER
 }
}
