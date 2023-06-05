import Wrapper from "../assets/wrappers/Preloader";

const Preloader = () => {
  return (
    <Wrapper>
      <i className="circle-preloader"></i>
      <p className="preloader-text">Searching for news...</p>
    </Wrapper>
  );
};
export default Preloader;
