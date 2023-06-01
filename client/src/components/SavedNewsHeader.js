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
  const { toggleDropdown, showDropdown, toggleModal } = useAppContext();
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

        <Link to="/" className="home-btn desktop">Home</Link>

        <p className="save-articles-btn desktop " onClick={() => {}}>
          Saved articles
        </p>
        <button className="signedin-btn desktop" onClick={() => {}}>
          <p className="btn-text">Elise</p>
          <img className="btn-img" src={logoutIcon} alt="logout" />
        </button>
      </HeaderWrapper>
      {showDropdown && (
        <DropdownContent
          className={`dropdown-content ${showDropdown ? "open" : ""}`}
        >
          <div className="container">
            <p className="dropdown-home">Home</p>
            <button className="dropdown-signin" onClick={toggleModal}>
              Sign out
            </button>
          </div>
        </DropdownContent>
      )}
    </>
  );
};

export default SavedNewsHeader;
