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
  }
  .home-btn {
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
  .practicum-btn {
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
  }
  .footer-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #b6bcbf;
  }

  @media (max-width: 800px) {
    .icon-container {
      margin: 0 21px 0 0;
      padding: 0;
    }

    .footer-text {
      margin: 0 auto 0 40px;
    }
    .practicum-btn{
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
    .practicum-btn {
      margin-right: auto;
      padding: 0;
    }
    .footer-text {
      order: 3;
      margin: 0 auto 22px;
    }
    .home-btn {
      margin-right: 0px;
    }
  }
`;
export default Wrapper;
