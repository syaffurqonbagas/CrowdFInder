import { Switch, Route } from "react-router-dom";
import SignUp from "../components/Main/SignUp";
import SignIn from "../components/Main/SIgnin";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import MyProfile from "../pages/MyProfile";
import HomePage from "../pages/HomePage";
import ComunityProfile from "../pages/CommunityProfile";
import MultiStep from "../components/MultiStepForm/index";
import MyCrowd from "../pages/MyCrowd";
import UserProfile from "../pages/UserProfile";
import EventDetail from "../pages/EventDetail";
import CreateCommunityForm from "../components/CreateCommunityForm/index"

const Routers = () => {
  return (
    <>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/signin" &&
      window.location.pathname !== "/multistep" ? 
        (<Header />): null}
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
        <Route exact path="/user-profile">
          <UserProfile />
        </Route>
        <Route exact path="/comunity-profile">
          <ComunityProfile />
        </Route>
        <Route exact path="/multistep">
          <MultiStep />
        </Route>
        <Route exact path="/mycrowd">
          <MyCrowd />
        </Route>
        <Route exact path="/eventdetail">
          <EventDetail />
        </Route>
        <Route exact path="/comunity-form">
          <CreateCommunityForm/>
        </Route>
        <Route path="*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/signin" &&
      window.location.pathname !== "/multistep" ? 
        (<Footer/>) : null}
    </>
  );
};

export default Routers;
