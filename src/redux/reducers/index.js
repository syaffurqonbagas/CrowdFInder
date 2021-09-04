import { combineReducers } from "redux";
import userData from "./user"
import posts from "./post";
import postsId from "./postById";
import events from "./event";
import announcements from "./announcement";
import comments from "./comment";
import likes from "./like";
<<<<<<< HEAD
import searchData from "./search"
=======
import getUserById from "./userById"
import attendEvent from "./attend";
>>>>>>> 8b26dec438b185ae9d60fe721652aed1f3725e85

export default combineReducers({
    userData,
    posts,
    postsId,
    events,
    announcements,
    comments,
    likes,
<<<<<<< HEAD
    searchData,
=======
    getUserById,
    attendEvent
>>>>>>> 8b26dec438b185ae9d60fe721652aed1f3725e85
});
