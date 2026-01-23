import StyledSidebarModal from "./SidebarModal.styles";
import Sidebar from "../Sidebar";
import Button from "../../components/Button";
import IconList from "../Header/icons/list.svg?react";
import { useModal } from "../../hooks/useModal";
import Logo from "../../components/Logo";

const SidebarModal = () => {
  const closeModal = useModal((s) => s.close);

  return (
    <StyledSidebarModal onPointerDown={(e) => e.stopPropagation()}>
      <div onClick={() => closeModal()}>
        <Button
          className="mobile-btn-nav"
          $backColor="transparent"
          $backColorHover="transparent"
        >
          <IconList />
        </Button>

        <Logo />
      </div>

      <Sidebar
        className="sidebar"
        sidebarProps={{
          $listsGap: "3rem",
          $top: "0rem",
        }}
        navListProps={{
          $fontSizeH3: "3rem",
          $fontSizeItem: "2.4rem",
          $collapseBtnSize: "3rem",
        }}
        socialNetworksProps={{
          $fontSizeH3: "3rem",
          $iconSize: "2.4rem",
        }}
      />
    </StyledSidebarModal>
  );
};

SidebarModal.rootModalStyles = ($isOpen) => `
  --s: 1;
  --tx: ${$isOpen ? "0" : "-100%"};

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
`;

export default SidebarModal;
