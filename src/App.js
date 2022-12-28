/* eslint-disable no-unused-vars */
//import React from 'react';
//import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./components/landingPage";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import LogInForm from "./components/sign";
import MobileSearch from "./components/mobileSearch";
import SearchPage from "./components/search";
/* <div>
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        </Routes>
        </div>
        
const LogIn = () => {
  if (
    document.getElementById("userLoginName").value ===
      localStorage.getItem("name") &&
    document.getElementById("userLoginPassword").value ===
      localStorage.getItem("psw")
  ) {
    //closeLogInModal();
    return <h1> i am here </h1>;
  } else {
    return <h2>not here </h2>;
  }
};*/
//file component

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<SignUpPage />} />
        <Route path="/LogInForm" element={<LogInForm />} />
        <Route path="/mobileSearch" element={<MobileSearch />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
//export { signUp };
