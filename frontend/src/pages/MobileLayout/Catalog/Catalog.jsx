import styles from "./Catalog.module.css";
import SearchBar from "../../../HOC/Header/components/SearchBar";
import Banner from "../../MainLayout/Catalog/components/Banner";
import Cards from "./Cards/";

const Catalog = () => {
  return (
    <>
      <SearchBar className={styles["search-bar"]} />
      <div className={styles.wrapper} id="scrollableWrapper">
        <main className={styles.catalog}>
          <Banner />
          <Cards />
        </main>
      </div>
    </>
  );
};

export default Catalog;
