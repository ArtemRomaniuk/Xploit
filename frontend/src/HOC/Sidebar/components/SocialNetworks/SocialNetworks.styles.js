import styled from "styled-components";

const StyledSocialNetworks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 2rem);
    grid-template-rows: repeat(2, 2rem);
    gap: 1rem 1.6rem;
    justify-items: center;
    align-items: center;

    li {
      width: 100%;
      height: 100%;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }

    a svg {
      fill: var(--font-main);
      width: 100%;
      height: 100%;
      transition: fill 0.1s;

      &:hover {
        fill: var(--font-main-hover);
      }
    }
  }
`;

export default StyledSocialNetworks;
