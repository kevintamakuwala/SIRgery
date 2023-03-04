import React from "react";
import { Link } from "react-router-dom";
import "../pages/home/home.css";
export const header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the legends of the Fitness World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            nobis enim deserunt fugit praesentium assumenda?
          </p>

          <Link to="/plans" className="btn lg ">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            {/* <img src={Img} alt="Main Header Image" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
