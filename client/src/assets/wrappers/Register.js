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
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .register-modal {
    margin: 0 auto;
    width: 430px;
    min-height: 383px;
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
  }
  .register-modal__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    margin-left: 36px;
    margin-top: 34px;
  }

  .register-modal__close-btn {
    display: flex;
    width: 485px;
    max-width: 100%;
    height: 40px;
    margin: 0 auto;
    background: none;
    border: none;
    padding: 0;
  }
  .register-modal__close-icon {
    height: 20px;
    width: 20px;
    margin: auto 0 auto auto;
    padding: 0;
    cursor: pointer;
  }
  .register-modal__register-btn {
    margin-left: 36px;
    height: 64px;
    width: 358px;
    background: #e6e8eb;
    border-radius: 100px;
    color: #b6bcbf;
    margin-top: 12px;
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
  }
  .register-modal__register-btn--filled:hover {
    background: #347eff;
  }
  .register-modal__register-btn--filled {
    background: #2f71e5;
    color: white;
  }
  .register-modal__toggle-text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
  span {
    color: #2f71e5;
    cursor: pointer;
  }
  .success-modal {
    margin: 0 auto;
    height: 182px;
    width: 430px;
    background: #ffffff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
  }
  .success-modal__title {
    margin-top: 43px;
    margin-left: 36px;
    margin-bottom: 14px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
  }
  .success-modal__signin-btn {
    margin-left: 36px;
    background: none;
    border: none;
    color: #2f71e5;
    cursor: pointer;
  }
  .success-modal__close-btn {
    display: flex;
    width: 485px;
    max-width: 100%;
    height: 40px;
    margin: 0 auto;
    background: none;
    border: none;
    padding: 0;
  }
  .success-modal__close {
    height: 20px;
    width: 20px;
    margin: auto 0 auto auto;
    padding: 0;
    cursor: pointer;
  }
  @media (max-width: 532px) {
    .register-modal {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .register-modal__title {
      width: 288px;
      margin-left: 0;
    }
    .register-modal__register-btn {
      margin-left: 0;
      width: 288px;
    }
    .register-modal__toggle-text {
      width: 288px;
    }
    .register-modal__close-icon {
      margin-right: 21px;
    }
    .success-modal__close {
      margin-right: 21px;
    }
    .success-modal {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .success-modal__signin-btn {
      margin-left: 0;
    }
    .success-modal__title {
      margin-left: 0;
    }
  }
`;
export default Wrapper;
