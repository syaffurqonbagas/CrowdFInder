import { Switch, Route } from "react-router-dom"
import FormCreateEvent from "../components/FormCreateEvent";
import SignUp from "../components/SignUp";
import HomePage from "../pages/HomePage";
import FormCreatePost from "../components/FormCreatePost";
import MyProfile from "../pages/MyProfile";


const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MyProfile />
        </Route>
        <Route path="*">
          <h1>
            Page Not Found
          </h1>
        </Route>
      </Switch>
    </>
  );
};
export default Routers
