import Wrapper from "../assets/wrappers/Main";
import About from "./About";

import Navigation from "./Navigation";
import Register from "./Register";
import NewCardList from "./NewsCardList";
const Main = () => {
  return (
    <Wrapper>
      <Navigation />
      <NewCardList />
      <About />
      <Register />
    </Wrapper>
  );
};
export default Main;
