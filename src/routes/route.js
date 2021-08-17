import { Switch, Route } from "react-router-dom";
import SignUp from "../components/Main/SignUp";
import SignIn from "../components/Main/SIgnin";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import MyProfile from "../pages/MyProfile";
import HomePage from "../pages/HomePage";
import ComunityProfile from "../pages/CommunityProfile";

const Routers = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/profile">
          <MyProfile />
        </Route>
        <Route exact path="/comunity-profile">
          <ComunityProfile />
        </Route>


        <Route path="*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Routers;
