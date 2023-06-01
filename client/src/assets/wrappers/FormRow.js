import styled from "styled-components";

const Wrapper = styled.section`
  .form-row {
    display: flex;
    flex-direction: column;
   margin: 0 36px;

  }

  .form-label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    
    color: #2f71e5;
  }
  .form-input{
    margin: 0 0 31px;
    border: none;
    border-bottom: 1px solid black ;
  }
`;
export default Wrapper;
