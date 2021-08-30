import axios from "axios";
import { POST_ANNOUNCEMENT_BEGIN, POST_ANNOUNCEMENT_SUCCESS, POST_ANNOUNCEMENT_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* PostAnnouncements (actions) {
    const Token = localStorage.getItem('user');

    const {data} = actions;
    try {
        const res = yield axios.post(`${BASE_URL_CROWDFINDER}/post/announcement`,data , {headers: {Authorization : `Bearer ${Token}`}});
        console.log('form',res)
        yield put ({
            type : POST_ANNOUNCEMENT_SUCCESS,
            payload : res.data,
        });
    } catch (err) {
        yield put ({
            type : POST_ANNOUNCEMENT_FAIL,
            error : err,
        })
    }
};

export function* watchPostAnnouncements() {
    yield takeEvery(POST_ANNOUNCEMENT_BEGIN, PostAnnouncements);
}