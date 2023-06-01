import styled from "styled-components";

const Wrapper = styled.section`
  background: white;
  display: flex;
  align-items: center;
  .footer-text {
    margin: 24px auto 18px 40px;
  }
  .home-btn {
    margin: 24px 40px 18px 0;
    border: none;
    background: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding-left: 5px;
    line-height: 24px;
    cursor: pointer;
    text-decoration: none;
   color: black;
  }
  .practicum-btn {
    margin: 24px 41px 18px 0;
    border: none;
    background: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
  }
  .gh-icon {
    margin: 24px 26px 18px 0;
    cursor: pointer;
  }
  .fb-icon {
    margin: 24px 24px 18px 0;
    cursor: pointer;
  }

  @media (max-width: 632px) {
    flex-direction: row;
    flex-wrap: wrap;
    .btn-container {
      height: 74px;
      width: 200px;
      margin-left: 16px;
    }
    .home-btn {
      margin: 20px 80px 21px 0;
    }
    .practicum-btn {
      margin: 0%;
    }
    .footer-text {
      order: 3;
      margin-top: 38px;
    }
    .gh-icon {
      margin: 0 27px 0 17px;
    }
    .fb-icon {
      margin: 0 17px 0 0;
    }
  }
  @media (max-width: 321px) {
    .gh-icon {
      margin: 0 27px 0 10px;
    }
  }
`;
export default Wrapper;
