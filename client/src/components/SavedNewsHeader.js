import { Link } from "react-router-dom";
import HeaderWrapper, {
  DropdownContent,
} from "../assets/wrappers/SavedNewsHeader";
import { useAppContext } from "../context/appContext";
import dropdownIcon from "../assets/images/menudark.svg";
import closeIcon from "../assets/images/close.svg";
import logoutIcon from "../assets/images/UnionDark.svg";
import { useEffect } from "react";

const SavedNewsHeader = () => {
  const { toggleDropdown, showDropdown, signOut,user } = useAppContext();
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
        <div
          className={`header__title ${
            showDropdown ? "header__title--opened" : ""
          }`}
        >
          NewsExplorer
        </div>
        <button
          className="header__dropdown header__mobile"
          onClick={toggleDropdown}
        >
          <img
            src={showDropdown ? closeIcon : dropdownIcon}
            alt="dropdown"
            className="header__btn"
          />
        </button>

        <Link to="/" className="header__home-btn header__desktop">
          Home
        </Link>

        <p className="header__save-articles-btn header__desktop">
          Saved articles
        </p>
        <button
          className="header__signedin-btn header__desktop"
          onClick={signOut}
        >
          <p className="header__btn-text">{user?.data?.name}</p>
          <img className="header__btn-img" src={logoutIcon} alt="logout" />
        </button>
      </HeaderWrapper>
      {showDropdown && (
        <DropdownContent
          className={`header__dropdown-content ${showDropdown ? "open" : ""}`}
        >
          <div className="header__dropdown-container">
            <Link
              to="/"
              className="header__dropdown-home"
              onClick={toggleDropdown}
            >
              Home
            </Link>
            <button className="header__dropdown-signin" onClick={signOut}>
              Sign out
            </button>
          </div>
        </DropdownContent>
      )}
    </>
  );
};

export default SavedNewsHeader;
