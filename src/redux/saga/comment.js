import axios from "axios";
import { GET_COMMENT_BEGIN, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL } from "../action/type";
import { POST_COMMENT_BEGIN, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getComments(actions) {
    const { id } = actions;
    try {
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/comment/${id}`);
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

function* postComments(actions) {
    const { post_id, body } = actions;
    const Token = localStorage.getItem('user');
    try {
        const res = yield axios.post(`${BASE_URL_CROWDFINDER}/comment/${post_id}`, body, { headers: { Authorization: `Bearer ${Token}` } });
        yield console.log("ini masuk", res.data.data)
        yield put({
            type: POST_COMMENT_SUCCESS,
            payload: res.data.data
        });
    } catch (err) {
        yield put({
            type: POST_COMMENT_FAIL,
            error: err,
        })
    }
};

export function* watchGetComments() {
    yield takeEvery(GET_COMMENT_BEGIN, getComments);
}

export function* watchPostComments() {
    yield takeEvery(POST_COMMENT_BEGIN, postComments);
}
