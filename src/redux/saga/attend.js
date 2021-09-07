import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { PUT_ATTEND_BEGIN, PUT_ATTEND_FAIL, PUT_ATTEND_SUCCESS } from "../action/type";

function* attendEvent(action) {
    const { post_id } = action
    const Token = localStorage.getItem('user');
    yield console.log("masuk token", Token)
    try {
        const res = yield axios.put(`https://crowdfinder.gabatch13.my.id/api/post/attend/${post_id}`, {}, { headers: { Authorization: `Bearer ${Token}` } })
        yield put({
            type: PUT_ATTEND_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        yield put({
            type: PUT_ATTEND_FAIL,
            error: err,
        })
    }
};

export function* watchAttendEvent() {
    yield takeEvery(PUT_ATTEND_BEGIN, attendEvent);
}
