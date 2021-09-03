import { all } from "@redux-saga/core/effects";
import { watchPostAnnouncements, watchUpdateAnnouncement } from "./announcement";
import { watchGetComments, watchPostComments } from "./comment";
import { watchPostEvents } from "./event";
import { watchDeletePosts, watchGetPosts } from "./post";
import { watchRegister, watchLogin, watchLogout, watchGetUser, watchUserUpdate } from "./user";
import { watchPutLikes } from "./like";

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
    watchPutLikes(),
    watchDeletePosts(),
    watchUpdateAnnouncement(),
    
  ]);
}
