import {Switch, Route} from "react-router-dom"
import FormCreateEvent from "../components/FormCreateEvent";
import SignUp from "../components/SignUp";


const Routers = () => {
    return (
        <>
        <Switch>
          <Route exact path="/">
            {/* <SignUp /> */}
            <FormCreateEvent/>
            
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
