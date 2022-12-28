/* eslint-disable no-unused-vars */
//import React from 'react';
//import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./components/SignUp";
import Navigate from "./components/Home";
import { signUp } from "./components/modal";
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
let names = {};

function SignUp() {
  newUserCredentials();
}

function newUserCredentials() {
  names.usrName = document.getElementById("userLoginName").value;
  names.userPsw = document.getElementById("userLoginPassword").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let dateOfBth = document.getElementById("dob").value;
  //addNewUser();
  localStorage.setItem("name", usrName);
  localStorage.setItem("psw", userPsw);

  alert(localStorage.getItem("name"));
  alert(localStorage.getItem("psw"));
}

const LogIn = () => {
  if (
    document.getElementById("userLoginName").value ===
      localStorage.getItem("name") &&
    document.getElementById("userLoginPassword").value ===
      localStorage.getItem("psw")
  ) {
    return <h1> i am here </h1>;
  } else {
    return <h2>not here </h2>;
  }
};

function App() {
  return (
    <>
      <SignUpPage />
      <LogIn />
    </>
  );
}

export default App;
export { signUp };
