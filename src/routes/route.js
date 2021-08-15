import { Switch, Route } from "react-router-dom"
import SignUp from "../components/SignUp";
import MyProfile from "../pages/MyProfile";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MyProfile />
          {/* <SignUp /> */}
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
