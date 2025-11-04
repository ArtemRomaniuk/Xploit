import styles from "./Main.module.css";
import Header from "../../HOC/Header";
import Sidebar from "../../HOC/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Sidebar />
    </div>
  );
};

export default Main;
