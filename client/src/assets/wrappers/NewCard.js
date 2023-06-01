import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 40px;
  gap: 8px;
  .container {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: #ffffff;
    overflow: hidden;
    height: 420px;
    width: 224px;
    border-radius: 15px;
  }
  .bookmark {
    cursor: pointer;
  }
  .toggled:hover {
    filter: brightness(0.1);
  }

  .container-top {
    display: flex;
    flex-direction: row;
    height: 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container-save {
    height: 40px;
    width: 40px;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: 16px;
    margin-top: 8px;
    border-radius: 8px;
    border: none;
  }
  .card-sign-in {
    position: relative;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    background: #ffffff;
    box-shadow: 0px 10px 22px rgba(59, 74, 116, 0.1);
    border-radius: 10px;
    color: #000000;
    height: 40px;
    width: 120px;
    margin: 8px 0 0 8px;
    text-align: center;
    padding: 0;
  }
  .card-sign-in:hover {
    cursor: pointer;
    font-weight: 600;
  }
  .container-bottom {
    height: 270px;
  }
  .container-date {
    margin-top: 20px;
    height: 24px;
    width: 144px;
    margin-left: 15px;
    margin-bottom: 8px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #b6bcbf;
  }
  .container-title {
    height: 72px;
    width: 192px;

    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    color: #1a1b22;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 0 auto;
  }
  .container-description {
    height: 88px;
    width: 192px;
    margin: 10px auto 12px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  .container-author {
    height: 20px;
    width: 192px;
    margin: 0 auto 16px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: #b6bcbf;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 532px) {
    margin: 0;
    justify-content: center;
  }
`;

export default Wrapper;
