import {Switch, Route} from "react-router-dom"
import FormCreateEvent from "../components/FormCreateEvent";
import SignUp from "../components/SignUp";
import HomePage from "../pages/HomePage";
import FormCreatePost from "../components/FormCreatePost";


const Routers = () => {
    return (
        <>
        <Switch>
          <Route exact path="/">
            {/* <SignUp /> */}
            <HomePage/>
            {/* <FormCreateEvent/> */}
            {/* <FormCreatePost/> */}
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
