import styled from "styled-components";

const StyledRootModal = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  & > *:first-child {
    transform: scale(0.9);
    transition: transform 0.3s;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
      opacity: 1;
      visibility: visible;

      & > *:first-child {
        transform: scale(1);
      }
  `}

  ${({ $rootModalStyles }) => $rootModalStyles && $rootModalStyles}
`;

export default StyledRootModal;
