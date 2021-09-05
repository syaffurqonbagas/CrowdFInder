import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { FOLLOW_USER_BEGIN, FOLLOW_USER_FAIL, FOLLOW_USER_SUCCESS } from "../action/type";

function* followUser(action) {
    const { id } = action
    const Token = localStorage.getItem('user');
    // yield console.log("masuk token dan fungsi masuk", Token)
    try {
        const res = yield axios.post(`https://crowdfinder.gabatch13.my.id/api/post/follow/${id}`, { headers: { Authorization: `Bearer ${Token}` } })
        yield {
            put: FOLLOW_USER_SUCCESS,
            payload: res.data
        }
    } catch (err) {
        yield put({
            type: FOLLOW_USER_FAIL,
            error: err,
        })
    }
};

export function* watchFollowUser() {
    yield takeEvery(FOLLOW_USER_BEGIN, followUser)
}
