import "../index.css";
import openSignInModal from "./modal";
import { signUp } from "./modal";
import { LogIn } from "./modal";
import { openLogInModal } from "./modal";
//import { newUserCredentials } from "./components/modal";

function SignUpPage() {
  return (
    <>
      <div id="landingPage">
        <div className="signInModal" id="signInModal">
          <h3>sign in </h3>

          <div className="registarForm">
            <div>
              first name:{" "}
              <input
                type="text"
                className="signInModalFirstName"
                id="firstName"
              />
            </div>
            <div>
              last name:{" "}
              <input
                type="text"
                id="lastName"
                className="signInModalLastName"
              />
            </div>
            <div>
              {" "}
              DOB : <input type="date" id="dob" className="signInDate" />
            </div>
            <div>
              ursername : <input type="text"  id="userLoginName" />
              password : <input type="password" id="userLoginPassword" />
              <button id="signUpBtn" onClick={signUp}>
                sign In
              </button>
            </div>
          </div>
        </div>

        <div className="logInModal" id="logInModal">
          <h3>log in </h3>

          <div className="logInFormInModal">
            <div>
              username :{" "}
              <input
                type="text"
                placeholder="user name / email "
                id="userName"
              />
              password : <input type="password" id="userPassword" />
              <button id="logInBtn" onClick={LogIn}>
                log In
              </button>
            </div>
          </div>
        </div>

        <div className="body" id="body">
          <div className="first">
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
                  value="log in"
                  onClick={LogIn}
                />
                <p className="text">forgotten password</p>
              </div>
              <h4> see what's in the world right now</h4>
              <div className="form">
                <br />
                <p>join Twitter today.</p>
                <button className="signBtn" onClick={openSignInModal}>
                  sign Up
                </button>
                <br />
                <br />
                <button className="LogBtn" onClick={openLogInModal}>
                  log In
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
