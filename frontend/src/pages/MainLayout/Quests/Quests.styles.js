import styled from "styled-components";

const StyledQuests = styled.main`
  padding: 3.2rem 6.4rem 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  .questsHeader {
    color: var(--white);
    font-size: 6.4rem;
    font-weight: 500;
  }

  & > p {
    color: var(--ui-main);
    font-size: 3.2rem;
    font-weight: 300;
    text-align: center;
    padding: 2.4rem 0;
  }

  .questsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(47.9rem, 1fr));
    gap: 2.4rem;
  }
`;

export default StyledQuests;
