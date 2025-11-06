import styled from "styled-components";
import XploitLogo from "../../assets/xploit-logo.svg?react";

const Logo = styled(XploitLogo)`
  width: ${({ $width }) => $width || "17rem"};
  height: ${({ $height }) => $height || "5.6rem"};
  flex-shrink: 0;
  cursor: pointer;
  fill: ${({ $color }) => $color || "var(--white)"};
`;

export default Logo;
