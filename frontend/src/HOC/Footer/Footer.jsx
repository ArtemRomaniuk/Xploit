import styles from "./Footer.module.css";
import Logo from "../../components/Logo/Logo";

const footerSections = [
  {
    title: "Contact us",
    items: [
      { text: ["601 W Temple Street,", "Los Angeles CA, 90012"] },
      { text: "415-201-6370" },
      { text: "info@xploit.com" },
    ],
  },
  {
    title: "Account",
    items: [
      { text: "Create account" },
      { text: "Sign in" },
      { text: "Android app" },
      { text: "IOS app" },
    ],
  },
  {
    title: "Company",
    items: [
      { text: "About Xploit" },
      { text: "For business" },
      { text: "Our partners" },
      { text: "Careers" },
    ],
  },
  {
    title: "Resources",
    items: [
      { text: "Help center" },
      { text: "Privacy Policy" },
      { text: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo color="#838386" />
          </div>
          <p className={styles.copyright}>
            Copyright© 2025 by Xploit.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>

      {footerSections.map((section) => (
        <div key={section.title} className={styles.section}>
          <div className={styles.container}>
            <h3 className={styles.title}>{section.title}</h3>
            <div className={styles.list}>
              {section.items.map((item, index) => (
                <p key={index} className={styles.item}>
                  {Array.isArray(item.text) ? (
                    item.text.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.text.length - 1 && <br />}
                      </span>
                    ))
                  ) : (
                    <a href="">{item.text}</a>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </footer>
  );
}
