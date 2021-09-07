import axios from "axios";
import { POST_EVENT_BEGIN, POST_EVENT_SUCCESS, POST_EVENT_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* PostEvents(actions) {
    const Token = localStorage.getItem('user');
    const { data } = actions;
    // console.log("ini")
    // console.log('actions', actions)
    try {
        const res = yield axios.post(`${BASE_URL_CROWDFINDER}/post/event`, data, { headers: { Authorization: `Bearer ${Token}` } });
        console.log('form', res)
        yield put({
            type: POST_EVENT_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        yield put({
            type: POST_EVENT_FAIL,
            error: err,
        })
    }
};

export function* watchPostEvents() {
    yield takeEvery(POST_EVENT_BEGIN, PostEvents);
}