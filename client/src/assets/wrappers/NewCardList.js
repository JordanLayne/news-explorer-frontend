import styled from "styled-components";

const CardListWrapper = styled.section`
  background: #f5f6f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
list-style: none;
  .card-list__search-title {
    margin: 32px auto 32px 104px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
  }
.card-list__search-results{
  list-style: none;
  padding: 0;
}
  .card-list__show-btn {
    margin: 32px auto 40px;
    height: 56px;
    width: 240px;
    left: 0px;
    top: 0px;
    border-radius: 80px;
    background: #ffffff;
    border: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
  }

  .card-list__show-btn:hover {
    background: #e8e8e8;
    opacity: 0.9;
  }

  .card-list__no-result-container {
    margin-top: 86px;
    margin-bottom: 80px;
  }
  .card-list__no-result-title {
    text-align: center;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
  }

  .card-list__no-result-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    height: 48px;
    color: #b6bcbf;
  }

  .card-list__no-result-img {
    display: flex;
    justify-content: center; 
    align-items: center;
    margin: 0 auto; 
  }
  
  @media (max-width: 800px) {
    .card-list__search-title {
      margin-left: 40px;
    }
  }

  @media (max-width: 532px) {
    .card-list__search-title {
      width: 288px;
      margin-left: auto;
      margin-right: auto;
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;
    }
  }
`;

export default CardListWrapper;
