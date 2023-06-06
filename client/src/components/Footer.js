import React from "react";
import Wrapper from "../assets/wrappers/Footer";
import fb from "../assets/images/fb.svg";
import gh from "../assets/images/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const handlePracticumClick = () => {
    window.open("https://practicum.yandex.com/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/", "_blank");
  };

  return (
    <Wrapper>
      <p className="footer-text">© 2021 Supersite, Powered by News API</p>
      <div className="btn-container">
        <nav className="footer-nav">
          <Link to="/" className="footer-nav__link">
            Home
          </Link>
          <button className="footer-nav__button" onClick={handlePracticumClick}>
            Practicum
          </button>
        </nav>
      </div>
      <div className="icon-container">
        <img
          src={gh}
          alt="github"
          className="icon-container__icon gh-icon"
          onClick={handleGithubClick}
        />
        <img
          src={fb}
          alt="facebook"
          className="icon-container__icon fb-icon"
          onClick={handleFacebookClick}
        />
      </div>
    </Wrapper>
  );
};

export default Footer;
