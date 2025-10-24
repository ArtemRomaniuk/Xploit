import styles from "./Catalog.module.css";
import Cards from "../Cards/Cards";

export default function Catalog() {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogSort}></div>
      <Cards />
    </div>
  );
}
