import React from "react";
import "../styles/Home.css";

function Home() {
  return (
      <div className="column">
        <div className="col2">
          <h1> Get the Right Job You Deserve</h1>
          <p>195,283 Jobs listed by top companies. Your dream Job is Waiting.</p>
          
          <div className="find-job">
          <input type="search" name="search"placeholder="Job title or Keyword"></input>
          <button className="find">Search</button>
          </div>
        </div>

        <div className="latest-job">
          
          </div>
      </div>
  );
}

export default Home;
