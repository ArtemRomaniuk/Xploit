import styled from "styled-components";

const StyledCard = styled.figure`
  width: 100%;
  height: 100%;
  background-color: var(--ui-main);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: relative;

  & > svg {
    width: 4rem;
    height: 4rem;
    position: absolute;
    transform: translate(+50%, -50%);
    top: 2.5%;
    right: 2.5%;
    cursor: pointer;
    transition: all 0.3s;
  }

  & > svg:first-child {
    opacity: ${({ $isWished }) => ($isWished ? 1 : 0)};
  }

  & > svg:nth-child(2) {
    opacity: ${({ $isWished }) => ($isWished ? 0 : 1)};
  }

  img {
    position: absolute;
    max-width: 22rem;
    max-height: 22rem;
    object-fit: contain;
    transform: ${({ $aspectRatio }) =>
      $aspectRatio > 1 ? "translate(0, 15%)" : "translate(0, -10%)"};
    top: 0;
  }

  & > p {
    color: var(--white);
    font-size: 2rem;
  }

  & > div:not(:last-child) {
    margin-top: 0.8rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  & > div:last-child {
    width: 100%;
    height: 6rem;
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 16px 16px;
    background-color: var(--ui-darkest);
    cursor: pointer;

    p {
      font-size: 2.4rem;
    }

    button {
      width: 4rem;
      height: 4rem;
      background: none;
      border: none;
      cursor: pointer;

      svg {
        width: 4rem;
        height: 4rem;
        fill: var(--font-main);
      }
    }

    transition: all 0.3s;

    &:hover {
      background-color: var(--accent-hover);
      color: var(--white);
      fill: var(--white);
    }
  }
`;

export default StyledCard;
