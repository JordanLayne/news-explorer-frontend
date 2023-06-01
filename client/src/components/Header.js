import HeaderWrapper, { DropdownContent } from "../assets/wrappers/Header";
import { useAppContext } from "../context/appContext";
import dropdownIcon from "../assets/images/menu.svg";
import closeIcon from "../assets/images/close.svg";
import logoutIcon from "../assets/images/Union.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleDropdown, showDropdown, toggleModal, isLoggedIn, signOut } =
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

  return (
    <>
      <HeaderWrapper className={showDropdown ? "open" : ""}>
        <div className="title">NewsExplorer</div>
        <button className="dropdown mobile" onClick={toggleDropdown}>
          <img
            src={showDropdown ? closeIcon : dropdownIcon}
            alt="dropdown"
            className="header-btn"
          />
        </button>

        <button className="home-btn desktop">Home</button>

        {isLoggedIn ? (
          <>
            <Link to="saved-articles" className="save-articles-btn desktop">
              Saved articles
            </Link>
            <button className="signedin-btn desktop" onClick={signOut}>
              <p className="btn-text">Elise</p>
              <img className="btn-img" src={logoutIcon} alt="logout" />
            </button>
          </>
        ) : (
          <button className="signin-btn desktop" onClick={toggleModal}>
            Sign in
          </button>
        )}
      </HeaderWrapper>
      {showDropdown && (
        <DropdownContent
          className={`dropdown-content ${showDropdown ? "open" : ""}`}
        >
          <div className="container">
            <Link to="/" className="dropdown-home" onClick={toggleDropdown}>
              Home
            </Link>
            {!isLoggedIn ? (
              <button className="dropdown-signin" onClick={toggleModal}>
                Sign in
              </button>
            ) : (
              <button className="dropdown-signin" onClick={signOut}>
                Sign out
              </button>
            )}
          </div>
        </DropdownContent>
      )}
    </>
  );
};

export default Header;
