import { all } from "@redux-saga/core/effects";
import { watchPostAnnouncements } from "./announcement";
import { watchPostEvents } from "./event";
import { watchGetPosts } from "./post";
import { watchGetComments } from "./comment"
import { watchRegister, watchLogin, watchLogout, watchGetUser, watchUserUpdate } from "./user";

export default function* rootSaga() {
  yield all([watchRegister(), watchLogin(), watchLogout(), watchGetUser(), watchUserUpdate(), watchGetPosts(), watchPostEvents(), watchPostAnnouncements(), watchGetComments()]);
}
