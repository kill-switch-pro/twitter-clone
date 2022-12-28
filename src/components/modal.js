/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Navigate from "./Home";
/*function signUp() {
  newUserCredentials();
}*/

function signUp() {
  newUserCredentials();
}

function openSignInModal() {
  let signInForm = document.getElementById("signInModal");
  let bgBody = document.getElementById("body");
  //  let UserSignUp = document.getElementById("signUpBtn");
  // UserSignUp.addEventListener("click", addNewUser);

  bgBody.style.filter = "blur(3px)";
  signInForm.style.display = "block";
  bgBody.addEventListener("click", closeSignInModal);
}
function newUserCredentials() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let dateOfBth = document.getElementById("dob").value;
  let usrName = document.getElementById("userLoginName").value;
  let userPsw = document.getElementById("userLoginPassword").value;
  //addNewUser();
  localStorage.setItem("name", usrName);
  localStorage.setItem("psw", userPsw);

  alert(localStorage.getItem("name"));
  alert(localStorage.getItem("psw"));
  closeSignInModal();
  /*
  let user = {
    fstName: firstName,
    lstName: lastName,
    birthDay: dateOfBth,
    urName: usrName,
    urPsw: userPsw,
  };
  localStorage.setItem("getUserName", user.urName);
  localStorage.setItem("getUserPsw", user.urPsw);

  if (
    user.urName === localStorage.getItem("userName") &&
    user.urPsw === localStorage.getItem("userPsw")
  ) {
    alert("right password");
  }
  me()*/
}

const LogIn = () => {
  if (
    document.getElementById("userLoginName").value ===
      localStorage.getItem("name") &&
    document.getElementById("userLoginPassword").value ===
      localStorage.getItem("psw")
  ) {
    closeLogInModal();
    return <h1> i am here </h1>;
  } else {
    return <h2>not here </h2>;
  }
};

function openLogInModal() {
  let logInForm = document.getElementById("logInModal");
  let bgBody = document.getElementById("body");

  bgBody.style.filter = "blur(3px)";
  logInForm.style.display = "block";
  bgBody.addEventListener("click", closeLogInModal);
}

function closeLogInModal() {
  document.getElementById("logInModal").style.display = "none";
  document.getElementById("body").style.filter = "blur(0px)";
}

function closeSignInModal() {
  document.getElementById("signInModal").style.display = "none";
  document.getElementById("body").style.filter = "blur(0px)";
}

export default openSignInModal;
export { newUserCredentials };
export { openSignInModal };
export { openLogInModal };
export { signUp };
export { LogIn };
