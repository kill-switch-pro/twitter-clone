import React from "react";

import {
  ArrowDownRightCircle,
  Person,
  Postcard,
  Search,
  Twitter,
} from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { Hash } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Book } from "react-bootstrap-icons";
//const twitter = ".../assets/icons/twitter.png";
function MenuNavigator() {
  const NavigateLogin = useNavigate();
  const showSearch = () => NavigateLogin("/Search");

  return (
    <>
      <div className="menu">
        <div className="menuBody">
          <div id="menu-twitter-log-icon">
            <Twitter color="black" id="disappear" size={30} />
          </div>

          <div id="menu-home-icon">
            <House color="black" size={30} />
          </div>

          <div id="menu-search-icon">
            <Search color="black" onClick={showSearch} id="show" size={30} />
          </div>

          <div id="menu-hash-icon">
            <Hash id="disappear" color="black" size={30} />
          </div>
          <div id="menu-bell-icon">
            <Bell color="black" size={30} />
          </div>
          <div id="menu-Envelope-icon">
            <Envelope color="black" size={30} />
          </div>
          <div id="menu-book-icon">
            <Book id="disappear" color="black" size={30} />
          </div>
          <div id="menu-person-icon">
            <Person id="disappear" color="black" size={30} />
          </div>
          <div id="menu-arrow-icon">
            <ArrowDownRightCircle id="disappear" color="black" size={30} />
          </div>
          <div id="menu-postCard-icon">
            <Postcard id="disappear" color="black" size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuNavigator;
