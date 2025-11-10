import styled from "styled-components";

const StyledCatalogBtn = styled.button`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => $width || "7.5rem"};
  height: ${({ $height }) => $height || "4.4rem"};
  border-radius: 16px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s;

  background: ${({ $filled }) => ($filled ? "var(--ui-main)" : "none")};
  color: ${({ $filled }) => ($filled ? "var(--white)" : "var(--font-main)")};
  border: 2px solid var(--ui-main);

  &:hover {
    border: 2px solid var(--ui-darkest);
  }
`;

const CatalogBtn = ({ children, ...props }) => {
  return <StyledCatalogBtn {...props}>{children}</StyledCatalogBtn>;
};

export default CatalogBtn;
