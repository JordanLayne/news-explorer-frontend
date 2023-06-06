import Wrapper from "../assets/wrappers/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Landing = () => {
  return (
    <Wrapper>
      <div className="main-top">
      <Header/>
      <Main />
      </div>
      <Footer/>
    </Wrapper>
  );
};
export default Landing;
