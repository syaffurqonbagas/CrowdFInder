import { combineReducers } from "redux";
import userData from "./user"
import posts from "./post";
import events from "./form";

export default combineReducers({
userData,
posts,
events,
});
