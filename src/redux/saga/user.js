import axios from "axios"
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    BASE_URL_CROWDFINDER
} from "../action/type"
import { put, takeEvery } from "redux-saga/effects";

function* Register (actions) {
    const { error,  } = actions;
    try {
      const res = yield axios.get(
          `${BASE_URL_CROWDFINDER}`, {
            headers: {
                
              },
          });
      yield put({
        type: REGISTER_SUCCESS,
        payload: res.data,
        loading: false,
        error: null,
      });
    } catch (err) {
      yield put({
        type: REGISTER_FAIL,
        error: error,
      });
    }
  }



  export function* watchRegister() {
    yield takeEvery(REGISTER_SUCCESS, Register);
  }