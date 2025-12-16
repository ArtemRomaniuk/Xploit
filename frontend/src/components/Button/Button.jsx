import styled from "styled-components";

// STYLES
const StyledButton = styled.button`
  flex-shrink: 0;
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};

  background-color: ${({ $backColor }) => $backColor || `var(--accent-main)`};
  border-radius: 8px;
  border: none;
  cursor: ${({ $cursor }) => $cursor || "pointer"};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $gap }) => $gap || "0rem"};

  color: var(--white);
  font-size: 2.2rem;

  transition: all 0.1s;

  &:hover {
    background-color: ${({ $backColorHover }) =>
      $backColorHover || `var(--accent-hover)`};
  }
`;

// COMPONENT
const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
