import styles from "./ContentMain.module.css";
import Banner from "../../components/Banner/Banner";
import Catalog from "../../components/Catalog/Catalog";

export default function ContentMain() {
  return (
    <main>
      <Banner />
      <Catalog />
    </main>
  );
}
