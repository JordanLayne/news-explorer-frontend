import styled from "styled-components";

const Wrapper = styled.section`
  .form-row {
    display: flex;
    flex-direction: column;
    margin: 0 36px;
    width: 358px;
    margin-bottom: 31px;
  }

  .form-label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #2f71e5;
    text-transform: capitalize;
  }
  .form-input {
    margin-top: 9px;
    border: none;
    border-bottom: 1px solid black;
  }
  @media (max-width: 532px) {
    .form-row{
      width: 288px;
    }
  }
`;
export default Wrapper;
