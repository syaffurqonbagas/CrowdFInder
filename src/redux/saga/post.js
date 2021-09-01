import axios from "axios";
import {
    GET_POST_BEGIN,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_BEGIN,
    GET_POST_BY_ID_FAIL,
} from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
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
    } catch (error) {
        yield put({
            type: GET_POST_FAIL,
            error: error,
        })
    }
};

function* getPostById(action) {
    const Token = localStorage.getItem('user');
    const { page, id } = action;
    try {
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post/user/${id}?page=${page}&limit=0`, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: GET_POST_BY_ID_SUCCESS,
            payload: res.data.data
        });
    }
    catch (error) {
        yield put({
            type: GET_POST_BY_ID_FAIL,
            error: error
        })
    }
}


export function* watchGetPosts() {
    yield takeEvery(GET_POST_BEGIN, getPosts);
}

export function* watchGetPostById() {
    yield takeEvery(GET_POST_BY_ID_BEGIN, getPostById)
}