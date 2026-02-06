import styles from "./Catalog.module.css";
import Banner from "./components/Banner";
import CardsCatalog from "./components/CardsCatalog";

const Catalog = ({ className }) => {
  return (
    <main className={`${styles.catalog} ${className}`}>
      <Banner />
      <CardsCatalog />
    </main>
  );
};

export default Catalog;
