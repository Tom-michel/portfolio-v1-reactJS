import React from "react";
import "./LoadingPage.css";
import Loader from "react-js-loader";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      {/*<img src={image} alt="Loading..." /> 
      <span className="loading_name">T</span>
      <span className="spinner"></span>
      <span className="loading_name">M</span>*/}
      <div className={"item"}>
        <Loader
          type="bubble-spin"
          bgColor={"var(--primaryColor)"}
          /*title={"Loading..."}*/ color={"var(--primaryColor)"}
          size={100}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
