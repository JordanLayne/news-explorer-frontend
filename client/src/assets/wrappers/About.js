import styled from "styled-components";

const Wrapper = styled.section`
background: white;
margin:0;
display: flex;
justify-content: center;
.about-img{
    height: 232px;
width: 232px;
border-radius: 1000px;
margin-top: 61px;
margin-bottom: 61px;
}
.about-title{
    margin-top: 61px;
  margin-left:32px;
  max-width: 424px;
}
.about-text{
  margin-left:32px;
  max-width: 424px;
}
@media (max-width: 732px) {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
   }


@media (max-width: 532px) {
  flex-direction: column;

   .about-img{
    margin-top: 32px;
    margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
}
.about-title{
    margin-left: 24px;
  margin-right: 24px;
}
.about-text{
  margin-left: 24px;
  margin-right: 24px;
}
   }
`;
export default Wrapper;
