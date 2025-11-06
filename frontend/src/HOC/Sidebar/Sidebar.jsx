import styles from "./Sidebar.module.css";
import NavList from "../../components/NavList";
import SocialNetworks from "./components/SocialNetworks";

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

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <NavList
        navName="Navigation"
        navItems={[
          { icon: IconUser, value: "Profile" },
          { icon: IconQuests, value: "Quests" },
          { icon: IconWishList, value: "Wish list" },
        ]}
      />

      <NavList
        navName="Category"
        navItems={[
          { icon: IconGames, value: "Games" },
          { icon: IconComputers, value: "Computers" },
          { icon: IconMouses, value: "Mouses" },
          { icon: IconKeyboards, value: "Keyboards" },
          { icon: IconHeadphones, value: "Headphones" },
          { icon: IconMicrophones, value: "Microphones" },
          { icon: IconGamepads, value: "Gamepads" },
          { icon: IconVR, value: "VR headsets" },
        ]}
        collapsing
      />

      <SocialNetworks />

      <NavList
        navName="Resources"
        navItems={[
          "Help",
          "About us",
          "Contacts",
          "Guarantees",
          "Work with us",
        ]}
      />
    </aside>
  );
};

export default Sidebar;
