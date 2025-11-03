import Button from "../../components/Button";
import { StyledHeader } from "./Header.styles";
import IconSquares from "./icons/icon-squares.svg?react";
import XploitLogo from "../../assets/xploit-logo.svg?react";

const Header = () => {
  return (
    <StyledHeader>
      <XploitLogo />
      <Button $flexGap="0.4rem">
        <IconSquares />
        Catalog
      </Button>
    </StyledHeader>
  );
};

export default Header;
