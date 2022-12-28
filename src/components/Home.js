/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Tweet from "../tweet";
import MenuNavigator from "./menu";
import SearchPage from "./search";

function Home() {
  /*let logged = false;
  const navigate = useNavigate();
  useEffect(() => {
    if (logged === false) {
      navigate("/SignUp");
    } else {
      navigate("/");
    }
});*/
  return (
    <>
      <div id="home-body">
        <div id="home-post">
          <Tweet />
        </div>
        <MenuNavigator />
        <SearchPage />
      </div>
    </>
  );
}

//export { menuNavigator };
export default Home;
