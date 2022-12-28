import React from "react";
import {
  Bell,
  Chat,
  EmojiHeartEyes,
  EmojiLaughing,
  Envelope,
  Heart,
  House,
  Recycle,
  Search,
  Share,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

import twitterHome from "./assets/twitterHome.PNG";
import twitterTrends from "./assets/twitterTrends.PNG";
import twitterSign from "./assets/twittet-signin-page.png";

const userName = {
  name: "@psalmWell",
  nameOne: "@dev",
  nameTwo: "@killSwitch",
  nameThree: "@raveN",
  nameFour: "@webnesDay",
  nameFive: "@Edin",
  nameSix: "@xave",
  nameSeven: "@zane",
  nameEight: "@jane",
  nameNine: "@error",
  nameTen: "@morning-sun",
  nameEle: "@night",
  nameTWe: "@runnerBoy",
  nameThi: "@heartBreaker",
  nameFou: "@whoami",
};

function Tweet() {
  const navigate = useNavigate();
  const showSearchComponent = () => navigate("/mobileSearch");

  return (
    <>
      <div id="tweet-all">
        <div id="tweet-post">
          <h3>HOME</h3>
          <img src={twitterHome} alt="user Profile" id="tweet-picture" />
          <input type="text" id="tweet-input" placeholder="what's happening" />
        </div>
        <div id="tweet-body">load more.... 50+</div>

        <div id="tweet-body">
          <div id="tweet-profile">
            <img src={twitterTrends} id="tweet-picture" alt="user pic" />{" "}
            {userName.name}
          </div>
          <div id="tweet">
            hello world jus created a twitter clone <EmojiHeartEyes />, but it
            doesnt have all the functionality of twitter{" "}
          </div>
          <div id="tweet-reaction">
            <Chat /> <Recycle /> <Heart /> <Share />
          </div>
        </div>

        <div id="tweet-body">
          <div id="tweet-profile">
            <img src={twitterSign} id="tweet-picture" alt="user pic" />
            {userName.nameOne}
          </div>
          <div id="tweet">
            me : i jus programmed something my mentor : programming is the act
            of thinking not writing alien words on a screen <EmojiLaughing />
          </div>
          <div id="tweet-reaction">
            <Chat /> <Recycle /> <Heart /> <Share />
          </div>
        </div>

        <div id="tweet-body">
          <div id="tweet-profile">
            <img src={twitterHome} id="tweet-picture" alt="user pic" />{" "}
            {userName.nameTen}
          </div>
          <div id="tweet">
            morning will still come just keep on pushing hard
          </div>
          <div id="tweet-reaction">
            <Chat /> <Recycle /> <Heart /> <Share />
          </div>
        </div>

        <div id="tweet-body">
          <div id="tweet-profile">
            <img src={twitterTrends} id="tweet-picture" alt="user pic" />{" "}
            {userName.nameFive}
          </div>
          <div id="tweet">
            maybe the earth is flat , can you prove its not ?
          </div>
          <div id="tweet-reaction">
            <Chat /> <Recycle /> <Heart /> <Share />
          </div>
        </div>

        <div id="tweet-body">
          <div id="tweet-profile">
            <img src={twitterSign} id="tweet-picture" alt="user pic" />{" "}
            {userName.nameTWe}
          </div>
          <div id="tweet">
            hello world jus created a twitter clone , but it doesnt have all the
            functionality of twitter{" "}
          </div>
          <div id="tweet-reaction">
            <Chat /> <Recycle /> <Heart /> <Share />
          </div>
        </div>

        <div id="tweet-body">
          <div id="tweet-profile">
            <img src={twitterHome} id="tweet-picture" alt="user pic" />{" "}
            {userName.nameOne}
          </div>
          <div id="tweet">
            hello world jus created a twitter clone , but it doesnt have all the
            functionality of twitter{" "}
          </div>
          <div id="tweet-reaction">
            <Chat /> <Recycle /> <Heart /> <Share />
          </div>
        </div>

        <div id="tweet-body">
          <div id="tweet-profile">
            <img src={twitterTrends} id="tweet-picture" alt="user pic" />{" "}
            {userName.nameTwo}
          </div>
          <div id="tweet">
            ama a gamer and i jus defeated xdrive and agent for in mini militia
          </div>
          <div id="tweet-reaction">
            <Chat /> <Recycle /> <Heart /> <Share />
          </div>
        </div>
        <div id="mobile-menu">
          <House size={25} /> <Search onClick={showSearchComponent} size={25} />{" "}
          <Bell size={25} /> <Envelope size={25} />
        </div>
      </div>
    </>
  );
}

export default Tweet;
