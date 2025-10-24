import styles from "./Profile.module.css";
import ProfilePhoto from "./profile-photo.svg?react";
import { useState } from "react";

export default function Profile() {
  const [xp, setXp] = useState(0);
  const [name, setName] = useState("Leonardo di Caprio");

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <span className={styles.profileName}>{name}</span>
        <span className={styles.profileXP}>{xp} XP</span>
      </div>
      <div className={styles.profileIcon}>
        <ProfilePhoto className={styles.profilePhoto} />
      </div>
    </div>
  );
}
