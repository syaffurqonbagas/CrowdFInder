import axios from "axios";
import { GET_COMMENT_BEGIN, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getComments (actions) {
    // const { id } = actions;
    console.log(actions)
    try {
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/comment/61262a29c4a06af9d724211a`);
        yield put({
            type: GET_COMMENT_SUCCESS,
            payload: res.data.data,
        });
    } catch (err) {
        yield put({
            type: GET_COMMENT_FAIL,
            error: err,
        })
    }
};

export function* watchGetComments() {
    yield takeEvery(GET_COMMENT_BEGIN, getComments);
}
