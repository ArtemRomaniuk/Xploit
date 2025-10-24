import styles from "./List.module.css";

export default function List({ label, items }) {
  return (
    <div className={styles.listContainer}>
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
