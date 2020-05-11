import React from "react";
import "./Home.css";
import content from "../Content";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="heading">CDA Interview Guide</h1>
        <img
          src="../images/cda-interview-guide.jpg"
          alt="cda-interview-guide"
          className="cda-img"
        />
        <h2 className="title">
          Ultimate Guide to CDA Structured Interview: Tips & Proven Strategies
          to Help You Prepare & Ace Your CDA Interview
        </h2>
        {content.map((data) => (
          <div className="body">
            <h3>
              <li className="sub-title">{data.title}</li>
            </h3>
            <p>{data.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
