import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background: #ffffff;
    overflow: hidden;
    height: 576px;
    width: 400px;
    border-radius: 15px;
    margin:0;
  }
  .container-keyword {
    height: 40px;
    width: 87px;
    border-radius: 10px;
    background: white;
    margin-left: 24px;
    margin-top: 24px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .confirm-remove {
    height: 40px;
    width: 159px;
    border-radius: 10px;
    box-shadow: 0px 10px 22px rgba(59, 74, 116, 0.1);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 24px;
    margin-left: 61px;
    justify-content: center;
    margin-right: 5px;
    background: white;
    border: none;
    cursor: pointer;
  }
  .container-delete {
    height: 40px;
    width: 40px;
    border-radius: 8px;
    margin-top: 24px;
    margin-right: 24px;
    background-color: white;
    border: none;
    margin-left: auto;
    cursor: pointer;
  }
  .container-delete:hover img {
    filter: brightness(0.1);
  }
  .container-save:hover img {
    filter: brightness(0.1);
  }

  .container-top {
    display: flex;
    flex-direction: row;
    height: 272px;
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
    cursor: pointer;
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
    height: 304px;
  }
  .container-date {
    margin-top: 20px;
    height: 24px;
    width: 144px;
    margin-left: 30px;
    margin-bottom: 8px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #b6bcbf;
  }
  .container-title {
    height: 60px;
    width: 352px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #1a1b22;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    margin: 0 auto;
  }
  .container-description {
    width: 352px;
    height: 110px;
    margin: 16px auto 18px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  .container-author {
    width: 352px;
    height: 20px;
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

  @media (max-width: 800px) {
    .container {
      height: 420px;
      width: 224px;
    }
    .container-date {
      margin-left: 18px;
    }
    .container-title {
      width: 192px;
      height: 48px;
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 24px;
    }
    .container-description {
      width: 192px;
      height: 88px;
    }
    .container-author {
      width: 192px;
      height: 20px;
    }
   
  }

  @media (max-width: 532px) {
    .container {
      margin: 0 auto;
      height: 440px;
      width: 288px;
    }
    .container-top {
      height: 196px;
    }
    .container-bottom {
      height: 244px;
    }
    .container-date {
      margin-top: 16px;
      margin-bottom: 10px;
    }
    .container-title {
      width: 256px;
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 24px;
    }
    .container-description {
      width: 256px;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 8px;
    }
    .container-author {
      width: 256px;
      margin-bottom: 16px;
    }
  }
`;

export default Wrapper;
