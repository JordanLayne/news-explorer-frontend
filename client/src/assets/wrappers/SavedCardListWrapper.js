import styled from "styled-components";

const SavedCardListWrapper = styled.section`
  background: #f5f6f7;

  .saved-card-list__results {
    padding-top: 62px;
    padding-bottom: 62px;
    background-color: inherit;
  }
  @media (max-width: 800px) {
    .saved-card-list__results {
      padding-top: 32px;
      padding-bottom: 32px;
    }
  }
  @media (max-width: 500px) {
    .saved-card-list__results {
      padding-top: 24px;
      padding-bottom: 24px;
    }
  }
`;
export default SavedCardListWrapper;
