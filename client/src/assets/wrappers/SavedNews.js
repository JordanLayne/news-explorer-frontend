import styled from "styled-components";

const Wrapper = styled.section`
  margin: 24px 0 0;
  .saved-news-container {
    width: 100%;
    height: 204px;
  }
 
  .saved-news-title {
    margin: 0 0 16px;
    height: 24px;
    max-width: 712px;
    margin-left: 40px;
    margin-right: auto;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: rgba(26, 27, 34, 0.5);
  }
  .saved-news-message {
    margin: 0 0 16px;
    margin-left: 40px;
    margin-right: auto;
    height: 68px;
    max-width: 336px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
  }
  .saved-news-keywords {
    margin: 0 0 32px;
    margin-left: 40px;
    margin-right: auto;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
 
  .saved-articles-container{
    background: #F5F6F7;
    max-width: 768px;
    min-height: 912px;
  }
   @media (max-width: 532px) {
    .saved-news-title{
        margin-left: 16px;
    }
    .saved-news-keywords{
        margin-left: 16px;
    }
    .saved-news-message{
        margin-left: 16px;
    }
}
`;
export default Wrapper;
