import styled from "styled-components";

const StyledMobileNav = styled.nav`
  display: flex;
  height: 6rem;
  background-color: var(--bg-darker);

  button {
    flex: 1;
    display: flex;
    flex-direction: column;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
    color: var(--font-main);
    font-size: 1.4rem;
    font-weight: 300;
  }

  .cart {
    position: relative;

    span {
      font-size: 1.2rem;
      color: var(--font-main);
      font-weight: 300;
      line-height: 1;
      min-width: 1.6rem;
      height: 1.6rem;
      padding: 0.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--accent-main);
      border-radius: 10px;

      position: absolute;
      transform: translate(+125%, -50%);
      top: 23%;
      right: 50%;
    }
  }
`;

export default StyledMobileNav;
