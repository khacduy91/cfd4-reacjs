import "./App.css";

// import Collaborate from "./pages/collaborate";
import CourseDetails from "./pages/courseDetails";
import Payment from "./pages/payment";
import Profile from "./pages/profile";
import Home from "./pages/home";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Cfdteam from "./pages/cfdteam";
import FooterContent from "./atom/footercontent";
import HeaderContent from "./atom/headercontent";
import Page404 from "./pages/404page";
import Course from "./pages/Course";
import Project from "./pages/Project";
import Register from "./pages/register";
import "./assets/css/style.scss";
import PageLoading from "./atom/PageLoading";
import PopupLogin from "./atom/PopupLogin";
import React, { useRef, useState } from "react";
import AuthProvider from "./hook/useAuth";
import PrivateRoute from "./core/PrivateRoute";
import PopupRegister from "./atom/PopupRegister";
import Contact from "./pages/Contact";
import RegisterSuccess from "./atom/RegisterSuccess";

//Khai bao context
export const AppContext = React.createContext({});

export default function App() {
  let refLogin = useRef();
  let refRegister = useRef();
  let refRegisterSuccess = useRef();

  function openPopupRegister() {
    refRegister.current.style.display = "flex";
    refLogin.current.style.display = "none";
  }
  function closePopupRegister() {
    refRegister.current.style.display = "none";
  }

  function openPopupLogin() {
    refLogin.current.style.display = "flex";
    refRegister.current.style.display = "none";
  }
  function closePopupLogin() {
    refLogin.current.style.display = "none";
  }

  //Submit Success
  function openRegisterSuccess() {
    refRegisterSuccess.current.style.display = "flex";
  }
  function closeRegisterSuccess() {
    refRegisterSuccess.current.style.display = "none";
  }

  let [name, setName] = useState("");
  function setNameRegister(name) {
    setName(name);
  }

  return (
    <AuthProvider>
      <AppContext.Provider
        ref={refLogin}
        ref={refRegisterSuccess}
        ref={refRegister}
        value={{
          openPopupLogin,
          closePopupLogin,
          openPopupRegister,
          closePopupRegister,
          openRegisterSuccess,
          closeRegisterSuccess,
          setNameRegister,
        }}
      >
        <BrowserRouter>
          <PopupLogin ref={refLogin} />
          <PopupRegister ref={refRegister} />
          <RegisterSuccess ref={refRegisterSuccess} name={name} />
          <HeaderContent />
          <PageLoading />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Cfdteam} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/course/:slug" component={CourseDetails} />
            <PrivateRoute exact path="/register/:slug" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/payment" component={Payment} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/project" component={Project} />
            <Route path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
          <FooterContent />
        </BrowserRouter>
      </AppContext.Provider>
    </AuthProvider>
  );
}
