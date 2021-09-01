import { all } from "@redux-saga/core/effects";
import { watchPostAnnouncements } from "./announcement";
import { watchGetComments, watchPostComments } from "./comment";
import { watchPostEvents } from "./event";
import { watchGetPosts } from "./post";
import { watchGetPostById } from "./postById";
import { watchRegister, watchLogin, watchLogout, watchGetUser, watchUserUpdate } from "./user";

export default function* rootSaga() {
  yield all([
    watchRegister(),
    watchLogin(),
    watchLogout(),
    watchGetUser(),
    watchUserUpdate(),
    watchGetPosts(),
    watchPostEvents(),
    watchPostAnnouncements(),
    watchGetComments(),
    watchPostComments(),
    watchGetPostById(),

  ]);
}
