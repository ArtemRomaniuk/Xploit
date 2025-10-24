import { useCallback, useEffect } from "react";
import styles from "./Auth.module.css";

export default function Auth({ onClose }) {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Add login logic here
  }, []);

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalAuth}>
        <div className={styles.modalHeader}>
          <h2>Login to Xploit</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
          <div className={styles.links}>
            <a href="#">Forgot password?</a>
            <a href="#">Create account</a>
          </div>
        </form>
      </div>
    </div>
  );
}
