import IconSearch from "./icon-search.svg?react";
import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.searchBar}>
      <IconSearch className={styles.iconSearch} onClick={() => setSearch("")} />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
