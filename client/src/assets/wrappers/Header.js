import styled from "styled-components";

const HeaderWrapper = styled.section`
  display: flex;
  height: 80px;
  border-bottom: solid rgba(255, 255, 255, 0.01);
  align-items: center;

  &.open {
    background-color: black;
  }

  .title {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-right: auto;
    margin-left: 104px;
    align-self: center;
    color: #ffffff;
  }

  .signedin-btn {
    display: flex;
    height: 48px;
    width: 112px;
    border: 1px solid #ffffff;
    border-radius: 100px;
    background: none;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-right: 104px;
  }

  .btn-txt {
    padding: 0;
    margin: 0;
    height: 24px;
    width: 56px;
    margin-left: 2px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .menu {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .save-articles-active-btn {
    height: 40px;
    width: 100px;
    color: black;
    border-radius: 100px;
    border: 1px solid #d1d2d6;
  }
  
  .save-articles-btn {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-right: 64px;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .save-articles-btn:hover {
    font-size: 19px;
  }

  .dropdown {
    margin-right: 24px;
    align-self: center;
    background: none;
    border: none;
    cursor: pointer;
  }

  .home-btn {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    background: none;
    border: none;
    color: #ffffff;
    margin-left: auto;
    margin-right: 42px;
    border-bottom: solid white 3px;
    padding-top: 30px;
    padding-bottom: 23px;
  }

  .home-btn:hover {
    cursor: pointer;
    font-size: 19px;
  }

  .signin-btn {
    height: 48px;
    width: 176px;
    background: none;
    border-radius: 100px;
    border: 1px solid #ffffff;
    color: #ffffff;
    margin-right: 104px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }

  .signin-btn:hover {
    cursor: pointer;
    border: 2px solid #ffffff;
    font-weight: 700;
  }

  .header-btn {
    display: flex;
    height: 21px;
    width: 21px;
  }

  .header-bg {
    background-color: black;
    width: 100%;
    height: 100%;
  }
  .btn-img {
    margin-left: 12px;
    cursor: pointer;
  }
 

  @media (max-width: 900px) {
    .title {
      margin-left: 40px;
    }
    .signin-btn {
      margin-right: 40px;
    }
    .signedin-btn {
      margin-right: 40px;
    }
  }

  @media (min-width: 732px) {
    .mobile {
      display: none;
    }
  }

  @media (max-width: 732px) {
    .desktop {
      display: none;
    }
    .title {
      margin-left: 16px;
    }
    .signin-btn {
      margin-right: 16px;
    }
    .dropdown {
      margin-right: 16px;
    }
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: column;

  .dropdown-menu {
    margin: 0;
    padding: 0;
  }
  .container {
    background: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dropdown-content {
    background: black;
  }

  .dropdown-home {
    margin: 0 auto;
    color: white;
    height: 56px;
    width: 288px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 56px;
    margin-bottom: 22px;
    text-decoration: none;
  }

  .dropdown-signin {
    margin: 0 auto 24px;
    height: 56px;
    width: 288px;
    border-radius: 100px;
    border: 1px solid #ffffff;
    background: none;
    color: white;
  }

  .dropdown-home:hover {
    cursor: pointer;
    font-size: 19px;
  }

  .dropdown-signin:hover {
    cursor: pointer;
    border: 2px solid #ffffff;
    font-weight: 700;
  }
`;

export default HeaderWrapper;
export { DropdownContent };
