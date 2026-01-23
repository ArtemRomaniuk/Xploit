import StyledSidebar from "./Sidebar.styles";
import NavList from "../../components/NavList";
import SocialNetworks from "./components/SocialNetworks";
import NavListItem from "../../components/NavList/NavListItem";

import IconUser from "./icons/icon-user.svg?react";
import IconQuests from "./icons/icon-quests.svg?react";
import IconWishList from "./icons/icon-star.svg?react";
import IconSquares from "./icons/icon-squares.svg?react";

import IconGames from "./icons/icon-games.svg?react";
import IconComputers from "./icons/icon-computer.svg?react";
import IconMouses from "./icons/icon-mouse.svg?react";
import IconKeyboards from "./icons/icon-keyboard.svg?react";
import IconHeadphones from "./icons/icon-headphones.svg?react";
import IconMicrophones from "./icons/icon-microphone.svg?react";
import IconGamepads from "./icons/icon-gamepad.svg?react";
import IconVR from "./icons/icon-vr.svg?react";

const Sidebar = ({ navListProps, socialNetworksProps, sidebarProps }) => {
  return (
    <StyledSidebar className="sidebar" {...sidebarProps}>
      <div className="container">
        <NavList
          {...navListProps}
          navName="Navigation"
          navItems={[
            new NavListItem(IconSquares, "Catalog", "/catalog"),
            new NavListItem(IconUser, "Profile"),
            new NavListItem(IconQuests, "Quests", "/quests"),
            new NavListItem(IconWishList, "Wish list"),
          ]}
        />

        <NavList
          {...navListProps}
          navName="Category"
          navItems={[
            new NavListItem(IconGames, "Games"),
            new NavListItem(IconComputers, "Computers"),
            new NavListItem(IconMouses, "Mouses"),
            new NavListItem(IconKeyboards, "Keyboards"),
            new NavListItem(IconHeadphones, "Headphones"),
            new NavListItem(IconMicrophones, "Microphones"),
            new NavListItem(IconGamepads, "Gamepads"),
            new NavListItem(IconVR, "VR headsets"),
          ]}
          collapsing
        />

        <SocialNetworks {...socialNetworksProps} />

        <NavList
          {...navListProps}
          navName="Resources"
          navItems={[
            new NavListItem(undefined, "Help"),
            new NavListItem(undefined, "About us"),
            new NavListItem(undefined, "Contacts"),
            new NavListItem(undefined, "Guarantees"),
            new NavListItem(undefined, "Work with us"),
          ]}
        />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
