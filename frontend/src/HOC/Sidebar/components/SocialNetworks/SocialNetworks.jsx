import StyledSocialNetworks from "./SocialNetworks.styles";

import IconTelegram from "./icons/telegram.svg?react";
import IconTikTok from "./icons/tiktok.svg?react";
import IconFacebook from "./icons/facebook.svg?react";
import IconMessanger from "./icons/messanger.svg?react";
import IconYouTube from "./icons/youtube.svg?react";
import IconInstagram from "./icons/instagram.svg?react";
import IconX from "./icons/x.svg?react";
import IconThreads from "./icons/threads.svg?react";

const SocialNetworks = (props) => {
  const socialIcons = [
    IconTelegram,
    IconTikTok,
    IconFacebook,
    IconMessanger,
    IconYouTube,
    IconInstagram,
    IconX,
    IconThreads,
  ];

  return (
    <StyledSocialNetworks {...props}>
      <h3>Social networks</h3>
      <ul>
        {socialIcons.map((Icon, index) => (
          <li key={index}>
            <a href="#">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </StyledSocialNetworks>
  );
};

export default SocialNetworks;
