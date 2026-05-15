import React from "react";
import errorImage from "../../assets/error-404.png";
import { useNavigate } from "react-router";
import "./NotFoundPage.css";
const NotFoundPage = () => {
  const appNavigate = useNavigate();
  const goToApp = () => {
    appNavigate("/");
  };
  return (
    <div className="app-not-found-container">
      <div>
        <img src={errorImage} alt="" />
      </div>
      <h1 className="apps-not-found-header text-black">
        Oops, page not found!
      </h1>
      <p className="apps-not-found-des">
        The page you are looking for is not available.
      </p>
      <button onClick={goToApp} className="apps-not-found-btn">
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
