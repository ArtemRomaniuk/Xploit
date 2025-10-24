import styles from "./Sidebar.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Category from "../../components/Category/Category";
import SocialNetworks from "../../components/SocialNetworks/SocialNetworks";
import List from "../../components/List/List";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Navigation />
      <Category />
      <SocialNetworks />
      <List
        label="Resources"
        items={["Help", "About us", "Contacts", "Guarantees", "Work with us"]}
      />
    </aside>
  );
}
