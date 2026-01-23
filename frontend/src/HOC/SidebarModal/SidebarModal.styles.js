import styled from "styled-components";

const StyledSidebarModal = styled.div`
  position: absolute;
  width: 35rem;
  height: 100vh;
  background-color: var(--bg-darker);
  display: flex;
  flex-direction: column;

  & > div {
    flex-shrink: 0;
    height: 8rem;
    display: flex;
    align-items: center;
    padding: 0 2.4rem;
    gap: 3.2rem;
    background-color: var(--bg-darkest);
    cursor: pointer;

    .mobile-btn-nav {
      width: 4.4rem;
      height: 4.4rem;

      svg {
        fill: var(--white);
        width: 4.4rem;
        height: 4.4rem;
      }
    }
  }

  .sidebar {
    height: 100%;
    overflow-y: scroll;
  }
`;

export default StyledSidebarModal;
