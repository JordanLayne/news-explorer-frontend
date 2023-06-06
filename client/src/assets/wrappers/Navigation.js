import styled from "styled-components";
const Wrapper = styled.section`
  max-width: 608px;
  display: flex;
  flex-direction: column;
  margin: 80px auto 0;
form{
  display: flex;
  flex-direction: column;
}
  .nav-title {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 64px;
    color: white;
    margin: 0 0 32px;
  }
  .nav-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: white;
    margin: 0 0 88px;
  }
  .nav-input {
    height: 64px;
    width: 608px;
    border-radius: 100px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 0;
    border: none;
    padding-left: 24px;
    box-sizing: border-box;
  }

  .nav-btn {
    position: relative;
    padding: 0;
    height: 65px;
    width: 168px;
    border-radius: 100px;
    top: -65px;
    left: 440px;
    background: #2f71e5;
    box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
    border-radius: 100px;
    border: none;
    color: white;
    cursor: pointer;
  }
  .nav-btn:hover{
    background: #347EFF;
  }
  .nav-btn.clicked {
  background: #2A65CC;
}
  @media (max-width: 732px) {
    margin-bottom: 0;
    .nav-input {
      height: 56px;
      width: 288px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 16px;
    }
    .nav-btn {
      margin-left: auto;
      margin-right: auto;
      height: 56px;
      width: 288px;
      position: unset;
      margin-bottom: 32px;
    }
    .nav-title {
      margin-left: auto;
      margin-right: auto;
      width: 288px;
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 40px;
    }
    .nav-text {
      margin-left: auto;
      margin-right: auto;
      width: 285px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default Wrapper;
