import Wrapper from "../assets/wrappers/Main";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Register from "./Register";
import NewCardList from "./NewsCardList";
const Main = () => {
  return (
    <Wrapper>
      <div className="main-top">
        <Header />
        <Navigation />
      </div>
      <NewCardList />
      <About />
      <Footer />
      <Register />
    </Wrapper>
  );
};
export default Main;
