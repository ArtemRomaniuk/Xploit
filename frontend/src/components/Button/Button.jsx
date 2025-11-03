import styled from "styled-components";

// STYLES
const flexGapStyle = (gap) => {
  if (typeof gap === "string")
    return `
      display: flex;
      gap: ${gap};
      justify-content: center;
      align-items: center;
    `;
};

const StyledButton = styled.button`
  flex-shrink: 0;
  background-color: var(--accent-main);
  padding: ${({ $padding }) =>
    typeof $padding === "string" ? $padding : "0.85rem 2.15rem"};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ${({ $flexGap }) => flexGapStyle($flexGap)}

  color: var(--white);
  font-size: 2.2rem;

  transition: all 0.1s;

  &:hover {
    background-color: var(--accent-hover);
  }
`;

// COMPONENT
const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
