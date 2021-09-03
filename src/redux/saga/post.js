import axios from "axios";
import {
    GET_POST_BEGIN,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    GET_SEARCH_BEGIN,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_FAIL
} from "../action/type";
import { BASE_URL_CROWDFINDER, BASE_URL_SEARCH_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* getPosts(actions) {
    const Token = localStorage.getItem('user');
    // console.log('ini')
    const { page } = actions;
    try {
        // const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=${page}&limit=9`, {headers: {Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjEyMzkzNTgxODg1ZmY4ZTE3NWZlY2IzIiwiaWF0IjoxNjI5ODYzOTY0LCJleHAiOjE2MzA0Njg3NjR9.H1dJ6RQiVTzxzwQxTVa5TbSBWLf09KLtwAAoIEwGirs`}});
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=${page}&limit=0`, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: GET_POST_SUCCESS,
            payload: res.data.data,
        });
        // yield window.location.replace("/home")<
    } catch (err) {
        yield put({
            type: GET_POST_FAIL,
            error: err,
        })
    }
};

function* searchFunction(actions) {
    const { body } = actions;
    try {
        const res = yield axios.get(`${BASE_URL_SEARCH_CROWDFINDER}${body}`);
        yield put({
            type: GET_SEARCH_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        yield put({
            type: GET_SEARCH_FAIL,
            error: err,
        })
    }
};


export function* watchGetPosts() {
    yield takeEvery(GET_POST_BEGIN, getPosts);
}

export function* watchSearchFunction() {
    yield takeEvery(GET_SEARCH_BEGIN, searchFunction);
}
