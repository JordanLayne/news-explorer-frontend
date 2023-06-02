import styled from "styled-components";
import img from '../images/main.png'
const Wrapper = styled.section`
max-width: 1440px;
margin: 0 auto; 
.main-top{
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
`;
export default Wrapper;
