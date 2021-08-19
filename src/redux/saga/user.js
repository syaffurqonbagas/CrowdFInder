import axios from "axios"
import {
    GET_REGISTER_BEGIN,
    GET_REGISTER_SUCCESS,
    GET_REGISTER_FAIL,
    BASE_URL_SIGNUP_CROWDFINDER
} from "../action/type"
import { put, takeEvery } from "redux-saga/effects";

function* getRegister (actions) {
    const { error, Token } = actions;
    try {
      const res = yield axios.get(
          `${BASE_URL_SIGNUP_CROWDFINDER}`, {
            headers: {
                Authorization: `Bearer ${Token}`,
              },
          });
      yield put({
        type: GET_REGISTER_SUCCESS,
        payload: res.data,
        loading: false,
        error: null,
      });
    } catch (err) {
      yield put({
        type: GET_REGISTER_FAIL,
        error: error,
      });
    }
  }



  export function* watchGetRegister() {
    yield takeEvery(GET_REGISTER_BEGIN, getRegister);
  }