import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles["main-container"]}>
      <h2>Place an order</h2>

      <div className={styles["order-container"]}>
        <div className={styles["order-form-container"]}></div>

        <div className={styles["summary-container"]}>
          <div className={styles["xp-container"]}></div>
          <div className={styles["summary"]}></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
