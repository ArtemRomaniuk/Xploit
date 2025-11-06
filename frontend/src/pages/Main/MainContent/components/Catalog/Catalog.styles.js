import styled from "styled-components";

const StyledCatalog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  & > div:first-child {
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

  & > div:last-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: 31.8rem;
    gap: 3.6rem 2.4rem;
  }
`;

export default StyledCatalog;
