import styles from "./Category.module.css";
import { useState } from "react";
import IconGames from "./icons/icon-games.svg?react";
import IconComputers from "./icons/icon-computer.svg?react";
import IconMouses from "./icons/icon-mouse.svg?react";
import IconKeyboards from "./icons/icon-keyboard.svg?react";
import IconHeadphones from "./icons/icon-headphones.svg?react";
import IconMicrophones from "./icons/icon-microphone.svg?react";
import IconGamepads from "./icons/icon-gamepad.svg?react";
import IconVR from "./icons/icon-vr.svg?react";
import IconCategory from "./icons/category-arrow.svg?react";

export default function Category() {
  const categoryItems = [
    { label: "Games", icon: IconGames },
    { label: "Computers", icon: IconComputers },
    { label: "Mouses", icon: IconMouses },
    { label: "Keyboards", icon: IconKeyboards },
    { label: "Headphones", icon: IconHeadphones },
    { label: "Microphones", icon: IconMicrophones },
    { label: "Gamepads", icon: IconGamepads },
    { label: "VR headsets", icon: IconVR },
  ];

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Category</h2>
        <button
          className={`${styles.categoryBtn} ${isOpen ? styles.open : ""}`}
        >
          <IconCategory
            className={styles.iconCategory}
            onClick={() => setIsOpen((o) => (o ? false : true))}
          />
        </button>
      </div>
      <ul className={`${styles.list} ${!isOpen ? styles.closed : ""}`}>
        {categoryItems.map((item) => (
          <li key={item.label} className={styles.item}>
            <item.icon className={styles.icon} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
