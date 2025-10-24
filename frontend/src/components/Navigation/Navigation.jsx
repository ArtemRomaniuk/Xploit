import styles from "./Navigation.module.css";
import IconUser from "./icon-user.svg?react";
import IconQuests from "./icon-quests.svg?react";
import IconWishList from "./icon-star.svg?react";

export default function Navigation() {
  const navItems = [
    { label: "Profile", icon: IconUser },
    { label: "Quests", icon: IconQuests },
    { label: "Wish List", icon: IconWishList },
  ];

  return (
    <nav className={styles.navigation}>
      <h3>Navigation</h3>
      <ul>
        {navItems.map((item, i) => (
          <li key={i} className={styles.navItem}>
            <a href="#">
              <item.icon className={styles.navIcon} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
