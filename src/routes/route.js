import {Switch, Route} from "react-router-dom"
import FormCreatePost from "../components/FormCreatePost";
import SignUp from "../components/SignUp";


const Routers = () => {
    return (
        <>
        <Switch>
          <Route exact path="/">
            {/* <SignUp /> */}
            <FormCreatePost/>
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
