import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  background: white;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  .btn-container {
    margin: 0 41px 0 auto;
    padding: 0;
    list-style: none;
  }

  .icon-container {
    margin: 0 106px 0 0;
    padding: 0;
  }

  .gh-icon {
    margin-right: 27px;
    cursor: pointer;
  }

  .fb-icon {
    cursor: pointer;
  }

  .footer-text {
    margin: 0;
    padding: 0;
    margin-left: 104px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #b6bcbf;
  }

  .footer-nav {
    display: flex;
    align-items: center;
  }

  .footer-nav__link {
    margin-right: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  .footer-nav__button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-decoration: none;
    color: black;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  @media (max-width: 800px) {
    .icon-container {
      margin: 0 21px 0 0;
      padding: 0;
    }

    .footer-text {
      margin: 0 auto 0 40px;
    }

    .footer-nav__button {
      padding: 0;
    }
  }

  @media (max-width: 532px) {
    margin-top: 20px;
    height: auto;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    .btn-container {
      display: flex;
      flex-direction: column;
      width: 200px;
      height: 74px;
      justify-content: space-between;
      margin: 0 0 22px 0;
    }

    .icon-container {
      height: 74px;
      margin: 0;
      order: 2;
      margin: 0 0 22px 0;
    }

    .gh-icon {
      margin-right: 27px;
    }

    .footer-text {
      order: 3;
      margin: 0 auto 22px;
    }
    .footer-nav {
      flex-direction: column;
      align-items: flex-start;
    }
    .footer-nav__link {
      margin-bottom: 26px;
    }
  }
`;

export default Wrapper;
