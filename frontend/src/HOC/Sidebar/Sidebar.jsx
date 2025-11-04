import styles from "./Sidebar.module.css";
import NavList from "../../components/NavList";

import IconUser from "./icons/icon-user.svg?react";

const Sidebar = () => {
  return (
    <aside>
      <NavList
        navName="Navigation"
        navItems={[{ icon: IconUser, value: "Profile" }, "Hello"]}
      />
    </aside>
  );
};

export default Sidebar;
