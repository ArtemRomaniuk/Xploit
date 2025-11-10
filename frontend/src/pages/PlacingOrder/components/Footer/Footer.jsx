import styles from "./Footer.module.css";
import Logo from "../../../../components/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo $width="9.7rem" $height="3.2rem" $color="var(--font-darker)" />
      <div className={styles.infoContainer}>
        <p className={styles.number}>415-201-6370</p>
        <p className={styles.email}>info@xploit.com</p>
      </div>
    </footer>
  );
};

export default Footer;
