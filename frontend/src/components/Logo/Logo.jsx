import logo from "../../assets/Xploit_logo.svg";
import styles from "./Logo.module.css";
import XploitLogo from "../../assets/Xploit_logo.svg?react";

export default function Logo({ color = "var(--white)", className, onClick }) {
  const inlineStyles = {
    fill: color,
  };

  return (
    <div className={className ? className : ""} onClick={onClick}>
      <XploitLogo style={inlineStyles} className={styles.logo} />
    </div>
  );
}
