import styled from "styled-components";

const StyledCardsCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  z-index: 1;

  .btns-container {
    display: flex;
    justify-content: start;
    align-items: center;

    p {
      color: var(--white);
      font-size: 4rem;
      font-weight: 500;
      margin-right: 2.8rem;
    }

    div {
      display: flex;
      gap: 1.8rem;

      svg {
        fill: var(--font-darker);
        transition: all 0.3s;
      }

      button:hover svg {
        fill: var(--font-darker-hover);
      }

      button:last-child svg {
        transform: rotate(180deg);
      }
    }

    div:last-child {
      margin-left: auto;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-template-rows: repeat(2, 31.8rem);
    gap: 3.6rem 2.4rem;
  }
`;

export default StyledCardsCatalog;
