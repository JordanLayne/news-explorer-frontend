import Wrapper from "../assets/wrappers/Main";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Register from "./Register";
const Main = () => {
  return (
    <Wrapper>
      <div className="main-top">
        <Header />
        <Navigation />
      </div>

      <About />
      <Footer />
      <Register />
    </Wrapper>
  );
};
export default Main;
