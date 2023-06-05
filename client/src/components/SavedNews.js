import Wrapper from "../assets/wrappers/SavedNews";

const SavedNews = () => {
  return (
    <>
      <Wrapper>
        <div className="saved-news-container">
          <p className="saved-news-title">Saved articles</p>
          <p className="saved-news-message">Elise, you have 5 saved articles</p>
          <p className="saved-news-keywords">
            By keywords: <b>Nature, Yellowstone, and 2 others</b>
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default SavedNews;
