import styles from "./Profile.module.css";
import ProfilePhoto from "./profile-photo.svg?react";
import { useState, useCallback } from "react";
import Auth from "../../HOC/Auth/Auth";

export default function Profile() {
  const [xp, setXp] = useState(0);
  const [name, setName] = useState("Leonardo di Caprio");
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleOpenAuth = useCallback((e) => {
    e.stopPropagation();
    setIsAuthOpen(true);
  }, []);

  const handleCloseAuth = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  return (
    <>
      <div onClick={handleOpenAuth} className={styles.profileContainer}>
        <div className={styles.profileInfo}>
          <span className={styles.profileName}>{name}</span>
          <span className={styles.profileXP}>{xp} XP</span>
        </div>
        <div className={styles.profileIcon}>
          <ProfilePhoto className={styles.profilePhoto} />
        </div>
      </div>
      {isAuthOpen && <Auth onClose={handleCloseAuth} />}
    </>
  );
}
