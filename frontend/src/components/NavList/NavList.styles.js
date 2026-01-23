import styled from "styled-components";

const StyledNavList = styled.nav`
  display: flex;
  flex-direction: column;

  color: ${({ $fontColor }) => $fontColor || "var(--font-main)"};

  h3 {
    font-size: ${({ $fontSizeH3 }) => $fontSizeH3 || "2.4rem"};
    font-weight: ${({ $fontWeightH3 }) => $fontWeightH3 || "500"};
  }

  & > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;

    button {
      width: ${({ $collapseBtnSize }) => $collapseBtnSize || "2.4rem"};
      height: ${({ $collapseBtnSize }) => $collapseBtnSize || "2.4rem"};
      border: none;
      background: none;
      cursor: pointer;
      transition: all 0.3s;
      transform: rotate(${({ $isCollapsed }) => ($isCollapsed ? "180deg" : 0)});

      svg {
        width: ${({ $collapseBtnSize }) => $collapseBtnSize || "2.4rem"};
        height: ${({ $collapseBtnSize }) => $collapseBtnSize || "2.4rem"};
      }
    }
  }

  ul {
    margin-top: ${({ $nameGap, $isCollapsed }) =>
      $isCollapsed ? 0 : $nameGap || "1.6rem"};
    display: flex;
    flex-direction: column;
    gap: ${({ $itemsGap }) => $itemsGap || "1rem"};
    font-size: ${({ $fontSizeItem }) => $fontSizeItem || "2rem"};
    font-weight: 300;

    max-height: ${({ $isCollapsed }) => ($isCollapsed ? 0 : "35rem")};
    transition: all 0.3s;
    overflow: hidden;

    li {
      max-height: ${({ $isCollapsed }) => ($isCollapsed ? 0 : "5rem")};
      transition: max-height 0.3s;
    }

    a {
      display: flex;
      gap: ${({ $itemGap }) => $itemGap || "1rem"};
      align-items: center;
      cursor: pointer;
      width: fit-content;

      svg {
        fill: ${({ $fontColor }) => $fontColor || "var(--font-main)"};
        width: ${({ $fontSizeItem }) => $fontSizeItem || "2rem"};
        height: ${({ $fontSizeItem }) => $fontSizeItem || "2rem"};
      }

      transition:
        color 0.1s,
        fill 0.1s;

      &:hover {
        color: ${({ $fontColorHover }) =>
          $fontColorHover || "var(--font-main-hover)"};
        svg {
          fill: ${({ $fontColorHover }) =>
            $fontColorHover || "var(--font-main-hover)"};
        }
      }
    }
  }
`;

export default StyledNavList;
