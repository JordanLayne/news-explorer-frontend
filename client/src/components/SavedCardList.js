import SavedCardListWrapper from "../assets/wrappers/SavedCardListWrapper";
import SavedCard from "./SavedCards";

const SavedCardList = () => {
  const dummyResults = [
    {
      id: 123454,
      imageUrl: "image-url-1.jpg",
      date: "2023-06-01",
      title: "Dummy Result 1",
      description: "This is a dummy result 1.",
      author: "John Doe",
      keyword: "dummy",
    },
    {
      id: 22435,
      imageUrl: "image-url-2.jpg",
      date: "2023-06-02",
      title: "Dummy Result 2",
      description: "This is a dummy result 2.",
      author: "Jane Smith",
      keyword: "dummy",
    },
    {
      id: 14352,
      imageUrl: "image-url-1.jpg",
      date: "2023-06-01",
      title: "Dummy Result 1",
      description: "This is a dummy result 1.",
      author: "John Doe",
      keyword: "dummy",
    },
    {
      id: 2345,
      imageUrl: "",
      date: "2023-06-02",
      title: "Dummy Result 2",
      description: "This is a dummy result 2.",
      author: "Jane Smith",
      keyword: "dummy",
    },
    {
      id: 1345,
      imageUrl: "image-url-1.jpg",
      date: "2023-06-01",
      title: "Dummy Result 1",
      description: "This is a dummy result 1.",
      author: "John Doe",
      keyword: "dummy",
    },
    {
      id: 345,
      imageUrl: "image-url-2.jpg",
      date: "2023-06-02",
      title: "Dummy Result 2",
      description: "This is a dummy result 2.",
      author: "Jane Smith",
      keyword: "dummy",
    },
  ];

  return (
    <SavedCardListWrapper>
      <div className="saved-card-list__results">
        <SavedCard searchResults={dummyResults} />
      </div>
    </SavedCardListWrapper>
  );
};
export default SavedCardList;
