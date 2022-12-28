import React from "react";
import { Search } from "react-bootstrap-icons";

function SearchPage() {
  return (
    <>
      <div id="search-body">
        <div id="search-bar">
          <Search size={30} id="search-icon" />
          <input
            type="text"
            id="search-input"
            maxLength="20 "
            placeholder="search twitter"
          />
        </div>
        <div id="search-result">
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
      </div>
    </>
  );
}

export default SearchPage;
