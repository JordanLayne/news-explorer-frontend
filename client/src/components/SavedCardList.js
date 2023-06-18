import SavedCardListWrapper from "../assets/wrappers/SavedCardListWrapper";
import SavedCard from "./SavedCards";
import { useAppContext } from "../context/appContext";

const SavedCardList = () => {
  const { savedCards } = useAppContext();

  return (
    <SavedCardListWrapper>
      <div className="saved-card-list__results">
        <SavedCard savedCards={savedCards} />
      </div>
    </SavedCardListWrapper>
  );
};

export default SavedCardList;
