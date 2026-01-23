import styled from "styled-components";

const StyledRootModal = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  --tx: 0;
  --ty: 0;
  --s: 0.9;
  & > *:first-child {
    transform: translate(var(--tx), var(--ty)) scale(var(--s));
    transition: transform 0.3s;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
      opacity: 1;
      visibility: visible;
      --s: 1;
  `}

  ${({ $rootModalStyles, $isOpen }) =>
    $rootModalStyles && $rootModalStyles($isOpen)}
`;

export default StyledRootModal;
