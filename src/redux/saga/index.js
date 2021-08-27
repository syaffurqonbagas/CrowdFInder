import { all } from "@redux-saga/core/effects";
import { watchGetPosts } from "./post";
import { watchRegister, watchLogin, watchLogout, watchGetUser } from "./user";

export default function* rootSaga() {
  yield all([watchRegister(), watchLogin(), watchLogout(), watchGetUser(), watchGetPosts()]);
}
