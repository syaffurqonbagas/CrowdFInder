import axios from "axios";
import { POST_ANNOUNCEMENT_BEGIN, POST_ANNOUNCEMENT_SUCCESS, POST_ANNOUNCEMENT_FAIL } from "../action/type";
import {UPDATE_ANNOUNCEMENT_SUCCESS, UPDATE_ANNOUNCEMENT_FAIL, UPDATE_ANNOUNCEMENT_BEGIN} from "../action/type";
import { DELETE_ANNOUNCEMENT_BEGIN, DELETE_ANNOUNCEMENT_SUCCESS, DELETE_ANNOUNCEMENT_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

const Token = localStorage.getItem('user');

function* PostAnnouncements (actions) {
    const {data} = actions;
    try {
        const res = yield axios.post(`${BASE_URL_CROWDFINDER}/post/announcement`,data , {headers: {Authorization : `Bearer ${Token}`}});
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

function* UpdateAnnouncement (actions) {
    const {data} = actions;
    try {
        const res = yield axios.put(`${BASE_URL_CROWDFINDER}/post/announcement/:id`, data, {headers: {Authorization : `Bearer ${Token}`}});
        yield put ({
            type : UPDATE_ANNOUNCEMENT_SUCCESS,
            payload : res.data,
        });
    } catch (err) {
        yield put ({
            type : UPDATE_ANNOUNCEMENT_FAIL,
            error : err,
        });
    };

};

function* DeleteAnnouncement (actions) {
    const {data} = actions;
    try {
        const res = yield axios.delete(`${BASE_URL_CROWDFINDER}/post/:id`, data);
        yield put ({
            type : DELETE_ANNOUNCEMENT_SUCCESS,
            payload : res.data,
        });
    } catch (err) {
        yield put ({
            type : DELETE_ANNOUNCEMENT_FAIL,
            error : err,
        });
    };

}

export function* watchPostAnnouncements() {
    yield takeEvery(POST_ANNOUNCEMENT_BEGIN, PostAnnouncements);
};

export function* watchUpdateAnnouncement() {
    yield takeEvery(UPDATE_ANNOUNCEMENT_BEGIN, UpdateAnnouncement);
};

export function* watchDeleteAnnouncement() {
    yield takeEvery(DELETE_ANNOUNCEMENT_BEGIN, DeleteAnnouncement);
};
