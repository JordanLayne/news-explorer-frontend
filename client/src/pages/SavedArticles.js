import Wrapper from "../assets/wrappers/SavedArticles";
import Footer from "../components/Footer";
import SavedCardList from "../components/SavedCardList";
import SavedNews from "../components/SavedNews";
import SavedNewsHeader from "../components/SavedNewsHeader";

const SavedArticles = () => {
  return (
    <Wrapper>
      <SavedNewsHeader />
      <SavedNews/>
      <SavedCardList/>
      <Footer/>
    </Wrapper>
  );
};
export default SavedArticles;
