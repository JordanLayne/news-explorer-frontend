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
        <p className="title">NewsExplorer</p>
        <button className="dropdown mobile" onClick={toggleDropdown}>
          <img
            src={showDropdown ? closeIcon : dropdownIcon}
            alt="dropdown"
            className="header-btn"
          />
        </button>

        <button className="home-btn desktop">Home</button>

        <nav>
          <ul className="menu desktop">
            {isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="saved-articles"
                    className="save-articles-btn desktop"
                  >
                    Saved articles
                  </Link>
                </li>
                <li>
                  <button className="signedin-btn desktop" onClick={signOut}>
                    <p className="btn-text">Elise</p>
                    <img className="btn-img" src={logoutIcon} alt="logout" />
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="signin-btn desktop"
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
        <DropdownContent
          className={`dropdown-content ${showDropdown ? "open" : ""}`}
        >
          <div className="container">
            <nav>
              <ul className="dropdown-menu">
                {!isLoggedIn ? (
                  <>
                    <li>
                      <Link
                        to="/"
                        className="dropdown-home"
                        onClick={toggleDropdown}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-signin"
                        onClick={() => toggleModal(true, "register")}
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
                        className="dropdown-home"
                        onClick={toggleDropdown}
                      >
                        Saved Articles
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-signin" onClick={signOut}>
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
