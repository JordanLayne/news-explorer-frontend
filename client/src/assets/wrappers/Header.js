import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  height: 80px;
  border-bottom: solid rgba(255, 255, 255, 0.01);
  align-items: center;

  &.open {
    background-color: black;
  }

  .header__title {
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

  .header__signedin-btn {
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

  .header__btn-text {
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

  .header__menu {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .header__save-articles-active-btn {
    height: 40px;
    width: 100px;
    color: black;
    border-radius: 100px;
    border: 1px solid #d1d2d6;
  }

  .header__save-articles-btn {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-right: 64px;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .header__save-articles-btn:hover {
    font-size: 19px;
  }

  .header__dropdown {
    margin-right: 24px;
    align-self: center;
    background: none;
    border: none;
    cursor: pointer;
  }
  .header-btn-text {
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
  .header__home-btn {
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

  .header__home-btn:hover {
    cursor: pointer;
    font-size: 19px;
  }

  .header__signin-btn {
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

  .header__signin-btn:hover {
    cursor: pointer;
    border: 2px solid #ffffff;
    font-weight: 700;
  }

  .header__btn {
    display: flex;
    height: 21px;
    width: 21px;
  }

  .header__header-bg {
    background-color: black;
    width: 100%;
    height: 100%;
  }

  .header__btn-img {
    margin-left: 12px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .header__title {
      margin-left: 40px;
    }
    .header__signin-btn {
      margin-right: 40px;
    }
    .header__signedin-btn {
      margin-right: 40px;
    }
  }

  @media (min-width: 732px) {
    .header__mobile {
      display: none;
    }
  }

  @media (max-width: 732px) {
    .header__desktop {
      display: none;
    }
    .header__title {
      margin-left: 16px;
    }
    .header__signin-btn {
      margin-right: 16px;
    }
    .header__dropdown {
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

  .header__dropdown-menu {
    margin: 0;
    padding: 0;
  }
  .header-container {
    background: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header__dropdown-content {
    background: black;
  }

  .header__dropdown-home {
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

  .header__dropdown-signin {
    margin: 0 auto 24px;
    height: 56px;
    width: 288px;
    border-radius: 100px;
    border: 1px solid #ffffff;
    background: none;
    color: white;
  }

  .header__dropdown-home:hover {
    cursor: pointer;
    font-size: 19px;
  }

  .header__dropdown-signin:hover {
    cursor: pointer;
    border: 2px solid #ffffff;
    font-weight: 700;
  }
`;

export default HeaderWrapper;
export { DropdownContent };
