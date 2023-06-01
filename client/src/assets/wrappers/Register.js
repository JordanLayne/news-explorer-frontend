import styled from "styled-components";
const Wrapper = styled.section`
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0;
  display: flex;
  opacity: 1;
  justify-content: center;
  align-items: center;
  form {
    border: none;
    padding: 0;
    margin: 0;
    width: 496px;
    background-color: white;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 28px auto 24px 28px;
    font-family: "Cabinet Grotesk";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  .close-btn {
    position: relative;
    width: 16px;
    height: 16px;
    border: none;
    left: 495px;
    bottom: 100px;
    margin-right: 30px;
    background: none;
    cursor: pointer;
  }
  .close-icon {
    height: 20px;
    width: 20px;
  }
  .register-btn {
    align-self: center;
    height: 64px;
    width: 360px;
    border-radius: 100px;
    margin-top: 8px;
  }
  .signin-text {
    align-self: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #2f71e5;
    cursor: pointer;
  }
  .filled {
    background: #2f71e5;
    color: white;
  }
  @media (max-width: 580px) {
    form {
      width: 320px;
      margin-top: 56px;
    }
    .close-btn {
      left: 315px;
    }
    .close-icon {
      height: 16px;
      width: 16px;
    }
    .register-btn {
      height: 64px;
      width: 288px;
    }
  }
  @media (max-width: 322px) {
    form {
      width: 100%;
      height: 100%;
    }
    .close-btn {
      position: relative;
      width: 16px;
      height: 16px;
      border: none;
      left: 280px;
      bottom: 97px;
      margin-right: 30px;
      background: none;
      cursor: pointer;
    }
  }
`;
export default Wrapper;
