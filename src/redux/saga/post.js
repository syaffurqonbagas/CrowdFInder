import axios from "axios";
import { GET_POST_BEGIN, GET_POST_SUCCESS, GET_POST_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getPosts(actions) {
    const { page } = actions;
    try {
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=${page}&limit=9`, {headers: {Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjEyMzkzNTgxODg1ZmY4ZTE3NWZlY2IzIiwiaWF0IjoxNjI5ODYzOTY0LCJleHAiOjE2MzA0Njg3NjR9.H1dJ6RQiVTzxzwQxTVa5TbSBWLf09KLtwAAoIEwGirs`}});
        yield put ({
            type : GET_POST_SUCCESS,
            payload : res.data.data,
        });
    } catch (err) {
        yield put ({
            type : GET_POST_FAIL,
            error : err,
        })
    }
};

export function* watchGetPosts() {
    yield takeEvery(GET_POST_BEGIN, getPosts);
}