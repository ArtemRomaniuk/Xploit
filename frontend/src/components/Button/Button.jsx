import styles from "./Button.module.css";

export default function Button({
  children,
  bgColor = "var(--accent-main)",
  color = "var(--white)",
}) {
  const inlineStyles = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <button className={styles.btn} style={inlineStyles}>
      {children}
    </button>
  );
}
