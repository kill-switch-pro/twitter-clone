import "../index.css";
import { useNavigate } from "react-router-dom";
import { Twitter } from "react-bootstrap-icons";
//import { newUserCredentials } from "./components/modal";
/*

import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Hello = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/goodbye');

  return (
    <button type="button" onClick={handleClick}>
      Goodbye
    </button>
  );
};

 const navigate = useNavigate();
  useEffect(() => {
    if (logged) {
      navigate("/");
    } else {
      navigate("/SignUp");
    }
  });

export default Hello;
*/
function SignUpPage() {
  const NavigateLogin = useNavigate();
  const showLogInComponent = () => NavigateLogin("/LogInForm");

  return (
    <>
      <i id="landingPage-twitter-icon" className="bi bi-twitter"></i>
      <div id="landingPage">
        <div className="body" id="body">
          <div className="first" id="disappear">
            <div className="words">
              <p>follow your interest</p>
              <p>hear what people are talking about </p>
              <p>join the conversation</p>
            </div>
          </div>

          <div className="second">
            <div className="words2">
              <div className="logInForm">
                <input
                  type="text"
                  placeholder="user name / Phone number / email address"
                />
                <input type="password" placeholder="Password" />
                <input
                  type="button"
                  className="logInBtn"
                  onClick={showLogInComponent}
                  value="log in"
                />
                <p className="text">forgotten password</p>
              </div>
              <Twitter color="royalblue" size={35} />
              <h4> see what's in the world right now</h4>
              <div className="form">
                <br />
                <p>join Twitter today.</p>
                <button className="signBtn" onClick={showLogInComponent}>
                  sign Up
                </button>
                <br />
                <br />
                <button className="LogBtn" onClick={showLogInComponent}>
                  LogIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUpPage;
