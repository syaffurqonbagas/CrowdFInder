import { all } from "@redux-saga/core/effects";
import { watchPostAnnouncements, watchUpdateAnnouncement } from "./announcement";
import { watchGetComments, watchPostComments } from "./comment";
import { watchPostEvents } from "./event";
import { watchDeletePosts, watchGetPosts } from "./post";
import { watchGetPostById } from "./postById";
import { watchRegister, watchLogin, watchLogout, watchGetUser, watchUserUpdate } from "./user";
import { watchPutLikes } from "./like";
<<<<<<< HEAD
import {watchSearchFunction} from "./search"
=======
import { watchGetUserById } from "./userById";
import { watchAttendEvent } from "./attend";
>>>>>>> 8b26dec438b185ae9d60fe721652aed1f3725e85

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
    watchPutLikes(),
    watchDeletePosts(),
    watchUpdateAnnouncement(),
<<<<<<< HEAD
    watchSearchFunction(),

=======
    watchGetUserById(),
    watchAttendEvent()
>>>>>>> 8b26dec438b185ae9d60fe721652aed1f3725e85
  ]);
}
