import styled from "styled-components";
const Wrapper = styled.section`
  background: #f5f6f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;

  .search-title {
    margin: 32px auto 32px 104px;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
  }

  .show-btn {
    margin: 32px auto 40px;
    height: 56px;
    width: 240px;
    left: 0px;
    top: 0px;
    border-radius: 80px;
    background: #ffffff;
    border: none;
    cursor: pointer;
  }
  .show-btn:hover {
    background: #e8e8e8;
    opacity: 0.9;
  }
`;
export default Wrapper;
