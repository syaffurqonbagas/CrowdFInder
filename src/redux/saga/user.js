import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  BASE_URL_CROWDFINDER,
  LOGOUT,
  GET_USER,
  GET_USER_CROWDFINDER,
} from "../action/type";
import { put, takeEvery } from "redux-saga/effects";

function* Register(actions) {
  const { email, password, username, fullname, location, role, interest } =
    actions;
  try {
    const res = yield axios
      .post(`${BASE_URL_CROWDFINDER}/user/signup`, {
        email,
        password,
        username,
        fullname,
        location,
        role,
        interest,
      })
      .then((response) => {
        localStorage.setItem("user",response.data.token);
      });
    yield put({
      type: REGISTER_SUCCESS,
      payload: res.data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: REGISTER_FAIL,
      error: error,
    });
  }
}

function* Login(actions) {
  const { email, password } = actions;
  try {
    const res = yield axios.post(`${BASE_URL_CROWDFINDER}/user/signin`, {
      email,
      password,
    });
    yield localStorage.setItem("user", JSON.stringify(res.data.token));
    yield put({
      type: LOGIN_SUCCESS,
      payload: res.data.token,
    });
    yield window.location.replace("/home")
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      error: error,
    });
  }
}

function* getUser() {
  const res = yield axios.get(`${GET_USER_CROWDFINDER}`);
  yield put({
    type: GET_USER,
    payload: res.data,
  });
}

function* Logout() {
  yield localStorage.removeItem("user");
}

export function* watchRegister() {
  yield takeEvery(REGISTER_SUCCESS, Register);
}

export function* watchLogin() {
  yield takeEvery(LOGIN_BEGIN, Login);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, Logout);
}

export function* watchGetUser() {
  yield takeEvery(GET_USER, getUser);
}
