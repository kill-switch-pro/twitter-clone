import React from "react";
import { Bell, Envelope, House, Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function MobileSearch() {
  const navigate = useNavigate();
  const showHomeComponent = () => navigate("/Home");

  return (
    <>
      <div id="mobile-search-body">
        <div id="mobile-search-bar">
          <Search size={30} id="mobile-search-icon" />
          <input
            type="text"
            id="mobile-search-input"
            maxLength="20 "
            placeholder="search twitter"
          />
        </div>
        <div id="mobile-search-result">
          <h2>Trends for you </h2>
          <p>nigeria eletion </p>
          <h2>elon sucks</h2>
          <p>#elon_twitter</p>
          <h2> techbros </h2>
          <p> #tech_bro </p>
          <h2> chatGPT </h2>
          <p> #AItaking over </p>
          <h2> tech </h2>
          <p> #boy_twitter </p>
          <h2> hackathon </h2>
          <p> #rely_hackaton </p>
        </div>
        <div id="mobile-menu">
          <House onClick={showHomeComponent} size={25} /> <Search size={25} />{" "}
          <Bell size={25} /> <Envelope size={25} />
        </div>
      </div>
    </>
  );
}

export default MobileSearch;
