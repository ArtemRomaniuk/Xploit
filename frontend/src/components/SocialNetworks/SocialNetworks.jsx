import styles from "./SocialNetworks.module.css";
import IconTelegram from "./icons/icon-telegram.svg?react";
import IconTikTok from "./icons/tiktok.svg?react";
import IconInstagram from "./icons/instagram.svg?react";
import IconFacebook from "./icons/facebook.svg?react";
import IconX from "./icons/X.svg?react";
import IconYouTube from "./icons/youtube.svg?react";
import IconThreads from "./icons/threads.svg?react";
import IconMessenger from "./icons/messenger.svg?react";

const socialNetworks = [
  { name: "telegram", icon: IconTelegram },
  { name: "tiktok", icon: IconTikTok },
  { name: "facebook", icon: IconFacebook },
  { name: "messenger", icon: IconMessenger },
  { name: "youtube", icon: IconYouTube },
  { name: "instagram", icon: IconInstagram },
  { name: "x", icon: IconX },
  { name: "threads", icon: IconThreads },
];

export default function SocialNetworks() {
  return (
    <div className={styles.socialNetworks}>
      <h3 className={styles.label}>Social networks</h3>
      <ul className={styles.container}>
        {socialNetworks.map((network) => (
          <li key={network.name} className={styles.icon}>
            <network.icon />
          </li>
        ))}
      </ul>
    </div>
  );
}
