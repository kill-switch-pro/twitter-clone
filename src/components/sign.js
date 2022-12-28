/*
const Hello = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/goodbye");

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
*/

import { useNavigate } from "react-router-dom";

function LogInForm() {
  const logInNavigate = useNavigate();
  const logIn = () => logInNavigate("/home");
  //logInNavigate("/");
  /*{
      let firstName = document.getElementById("first-name").value;
      let lastName = document.getElementById("last-name").value;
      let dateOfBirth = document.getElementById("birthday").value;
      let userName = document.getElementById("log-in-name").value;
      let userPassword = document.getElementById("log-in-password").value;

      if (
        userName === " " ||
        userName === " " ||
        firstName === " " ||
        lastName === " " ||
        dateOfBirth === " "
      ) {
        alert("please input a valid email address");
      } else {
        localStorage.setItem("user_name", userName);
        localStorage.setItem("user-name", userPassword);
        logInNavigate("/home");
        alert("sna jkebc>SUchSdc");
      }
    };*/

  return (
    <>
      <div id="signUpPage">
        <div className="first" id="sign-first">
          <div className="words">
            <p>follow your interest</p>
            <p>hear what people are talking about </p>
            <p>join the conversation</p>
          </div>
        </div>
        <form id="signUpForm">
          <div id="logIn-body">
            <h2>sign up</h2>
            first name :{" "}
            <input type="text" placeholder=" john" id="first-name" />
            <br />
            last name : <input type="text" placeholder=" doe" id="last-name" />
            <br />
            D.O.B : <input type="date" placeholder=" doe" id="birthDay" />
            <br />
            email :
            <input
              type="text"
              placeholder="@example / example@gmail.com"
              id="log-in-name"
            />
            <br />
            password :{" "}
            <input
              type="password"
              placeholder="password"
              id="log-in-password"
            />
            <br />
            <br />
            <button onClick={logIn}> sign in</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogInForm;
