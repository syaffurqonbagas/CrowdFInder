import axios from "axios";
import { POST_ANNOUNCEMENT } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* PostAnnouncements (actions) {
    const Token = localStorage.getItem('user');

    const { announcement, image } = actions;
    try {
        // const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=${page}&limit=9`, {headers: {Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjEyMzkzNTgxODg1ZmY4ZTE3NWZlY2IzIiwiaWF0IjoxNjI5ODYzOTY0LCJleHAiOjE2MzA0Njg3NjR9.H1dJ6RQiVTzxzwQxTVa5TbSBWLf09KLtwAAoIEwGirs`}});
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post/announcement`,{announcement, image} , {headers: {Authorization : `Bearer ${Token}`}});
        console.log('form',res)
        yield put ({
            type : POST_ANNOUNCEMENT,
            payload : res.data,
        });
    } catch (err) {
        yield put ({
            error : err,
        })
    }
};

export function* watchPostAnnouncements() {
    yield takeEvery(POST_ANNOUNCEMENT, PostAnnouncements);
}