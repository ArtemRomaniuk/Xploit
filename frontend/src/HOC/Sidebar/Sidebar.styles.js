import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--bg-darker);
  position: relative;
  transition: transform 0.3s;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 2.4rem;
    gap: ${({ $listsGap }) => $listsGap || "2.4rem"};
    position: sticky;
    top: ${({ $top }) => $top || "8rem"};
  }
`;

export default StyledSidebar;
