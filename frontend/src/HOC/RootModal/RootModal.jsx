import StyledRootModal from "./RootModal.styles";
import { useModal } from "../../hooks/useModal.jsx";

const RootModal = () => {
  const isOpen = useModal((state) => state.isOpen);
  const modalContent = useModal((state) => state.content);
  const close = useModal((state) => state.close);
  const rootModalStyles = modalContent.type.rootModalStyles;

  return (
    <StyledRootModal
      onPointerDown={() => close()}
      $isOpen={isOpen}
      $rootModalStyles={rootModalStyles}
    >
      {modalContent}
    </StyledRootModal>
  );
};

export default RootModal;
