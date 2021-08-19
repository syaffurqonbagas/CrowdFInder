import { Switch, Route } from "react-router-dom";
import SignUp from "../components/Main/SignUp";
import SignIn from "../components/Main/SIgnin";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import MyProfile from "../pages/MyProfile";
import HomePage from "../pages/HomePage";
import ComunityProfile from "../pages/CommunityProfile";
import MultiStep from "../components/MultiStepForm/index"
import MyCrowd from "../pages/MyCrowd";
import UserProfile from "../pages/UserProfile";
import EventDetail from "../pages/EventDetail";
import ManageComunity from "../pages/ManageComunity";

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
        <Route exact path="/manage-comunity">
          <ManageComunity />
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
