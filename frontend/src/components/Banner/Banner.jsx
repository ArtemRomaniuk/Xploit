import styles from "./Banner.module.css";
import Button from "../Button/Button";
import headphonesImg from "./logitech-gprox.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h2>Headphones</h2>
        <p>"Logitech G PRO X"</p>
        <Button>ORDER NOW</Button>
      </div>
      <img
        src={headphonesImg}
        alt="gaming headphones Logitech G PRO X"
        className={styles.headphonesImg}
      />
    </div>
  );
}
