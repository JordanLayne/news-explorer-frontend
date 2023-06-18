import React from 'react';
import HeaderWrapper, { DropdownContent } from "../assets/wrappers/Header";
import { useAppContext } from "../context/appContext";
import dropdownIcon from "../assets/images/menu.svg";
import closeIcon from "../assets/images/close.svg";
import logoutIcon from "../assets/images/Union.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleDropdown, showDropdown, toggleModal, isLoggedIn, signOut,user } =
    useAppContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 732 && showDropdown) {
        toggleDropdown(false);
      }
    };
    const handleWindowResize = () => {
      handleResize();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [showDropdown, toggleDropdown]);
  const handleSignInClick = () => {
    toggleDropdown(false);
    toggleModal(true, "register");
  };
  return (
    <>
      <HeaderWrapper className={showDropdown ? "open" : ""}>
        <h1 className="header__title">NewsExplorer</h1>
        <button className="header__dropdown header__mobile" onClick={toggleDropdown}>
          <img
            src={showDropdown ? closeIcon : dropdownIcon}
            alt="dropdown"
            className="header__btn"
          />
        </button>

        <button className="header__home-btn header__desktop">Home</button>

        <nav>
          <ul className="header__menu header__desktop">
            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="saved-articles"
                    className="header__save-articles-btn header__desktop"
                  >
                    Saved articles
                  </Link>
                </li>
                <li>
                  <button className="header__signedin-btn header__desktop" onClick={signOut}>
                    <p className="header-btn-text">{user?.data?.name}</p>
                    <img className="header__btn-img" src={logoutIcon} alt="logout" />
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="header__signin-btn header__desktop"
                  onClick={() => toggleModal(true, "register")}
                >
                  Sign in
                </button>
              </li>
            )}
          </ul>
        </nav>
      </HeaderWrapper>
      {showDropdown && (
        <DropdownContent className={showDropdown ? "open" : ""}>
          <div className="header-container">
            <nav>
              <ul className="header__dropdown-menu">
                {!isLoggedIn ? (
                  <>
                    <li>
                      <Link
                        to="/"
                        className="header__dropdown-home"
                        onClick={toggleDropdown}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <button
                        className="header__dropdown-signin"
                        onClick={handleSignInClick}
                      >
                        Sign in
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="saved-articles"
                        className="header__dropdown-home"
                        onClick={toggleDropdown}
                      >
                        Saved Articles
                      </Link>
                    </li>
                    <li>
                      <button className="header__dropdown-signin" onClick={signOut}>
                        Sign out
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </DropdownContent>
      )}
    </>
  );
};

export default Header;