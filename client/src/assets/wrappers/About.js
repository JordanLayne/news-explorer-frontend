import styled from "styled-components";

const Wrapper = styled.section`
  background: white;
  margin: 0;
  display: flex;

  .about-img {
    height: 464px;
    width: 464px;
    border-radius: 1000px;
    margin-top: 80px;
    margin-left: 104px;
    margin-right: 56px;
    margin-bottom: 80px;
  }
  .about-title {
    margin-top: 131px;
    margin-bottom: 24px;
    max-width: 600px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
  }
  .about-text {
    max-width: 600px;
    margin: 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 732px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 532px) {
    flex-direction: column;

    .about-img {
      margin-top: 32px;
      margin-left: 24px;
      margin-right: 24px;
      margin-bottom: 24px;
    }
    .about-title {
      margin-left: 24px;
      margin-right: 24px;
    }
    .about-text {
      margin-left: 24px;
      margin-right: 24px;
    }
  }
`;
export default Wrapper;
