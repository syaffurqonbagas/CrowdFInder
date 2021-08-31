import { combineReducers } from "redux";
import userData from "./user"
import posts from "./post";
import events from "./event";
import announcements from "./announcement";
import comments from "./comment";

export default combineReducers({
userData,
posts,
events,
announcements,
comments,
});
