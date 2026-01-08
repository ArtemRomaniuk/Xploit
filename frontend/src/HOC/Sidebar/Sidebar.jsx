import styles from "./Sidebar.module.css";
import NavList from "../../components/NavList";
import SocialNetworks from "./components/SocialNetworks";
import NavListItem from "../../components/NavList/NavListItem";

import IconUser from "./icons/icon-user.svg?react";
import IconQuests from "./icons/icon-quests.svg?react";
import IconWishList from "./icons/icon-star.svg?react";

import IconGames from "./icons/icon-games.svg?react";
import IconComputers from "./icons/icon-computer.svg?react";
import IconMouses from "./icons/icon-mouse.svg?react";
import IconKeyboards from "./icons/icon-keyboard.svg?react";
import IconHeadphones from "./icons/icon-headphones.svg?react";
import IconMicrophones from "./icons/icon-microphone.svg?react";
import IconGamepads from "./icons/icon-gamepad.svg?react";
import IconVR from "./icons/icon-vr.svg?react";
import { useMobileSidebar } from "../../hooks/useMobileSidebar";

const Sidebar = () => {
  const isOpenMobileSidebar = useMobileSidebar((s) => s.isOpen);

  return (
    <aside
      className={`${styles.sidebar} ${isOpenMobileSidebar ? "" : styles["mobile-closed"]}`}
    >
      <div className={styles.container}>
        <NavList
          navName="Navigation"
          navItems={[
            new NavListItem(IconUser, "Profile"),
            new NavListItem(IconQuests, "Quests", "/quests"),
            new NavListItem(IconWishList, "Wish list"),
          ]}
        />

        <NavList
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

        <SocialNetworks />

        <NavList
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
    </aside>
  );
};

export default Sidebar;
