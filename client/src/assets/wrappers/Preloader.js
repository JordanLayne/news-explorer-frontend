import styled from "styled-components";

const Wrapper = styled.section`
  height: 282px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .preloader-circle {
    display: block;
    width: 50px;
    height: 50px;
    border: 4px solid #444;
    border-bottom-color: #888;
    border-radius: 50%;
    animation: spin 0.75s infinite linear;
    margin-top: 80px;
    margin-bottom: 24px;
  }
  .preloader-text {
    margin: 0 0 auto;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #b6bcbf;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Wrapper;
