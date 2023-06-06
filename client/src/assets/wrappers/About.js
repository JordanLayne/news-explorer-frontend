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
  @media (max-width: 1000px) {
    .about-img {
      height: 232px;
      width: 232px;
      border-radius: 1000px;
      margin-top: 61px;
      margin-left: 40px;
      margin-right: 32px;
      margin-bottom: 61px;
    }
    .about-title {
      margin-top: 40px;
      margin-bottom: 16px;
      margin-right: 40px;
      max-width: 600px;
      font-size: 30px;
      line-height: 40px;
    }
    .about-text {
      max-width: 600px;
      margin: 0 40px 96px 0;
      height: 168px;
      overflow: scroll;
      overflow-x: hidden;
    }
  }
  @media (max-width: 532px) {
    flex-direction: column;

    .about-img {
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 24px;
      height: 272px;
      width: 272px;
    }
    .about-title {
      width: 288px;
      margin-top: 0px;
      margin-left: auto;
      margin-right: auto;
    }
    .about-text {
      width: 288px;
      margin: 0 auto 128px;
    }
  }
`;
export default Wrapper;
