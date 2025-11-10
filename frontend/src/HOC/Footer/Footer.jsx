import styles from "./Footer.module.css";
import Logo from "../../components/Logo";
import NavList from "../../components/NavList";
import NavListItem from "../../components/NavList/NavListItem";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoCopyright}>
        <Logo $color="var(--font-darker)" $width="9.7rem" $height="3.2rem" />
        <p>
          Copyright© 2025 by Xploit.
          <br /> All rights reserved.
        </p>
      </div>

      <NavList
        navName="Contact us"
        navItems={[
          new NavListItem(
            undefined,
            (
              <>
                601 W Temple Street,
                <br /> Los Angeles CA, 90012
              </>
            ),
          ),
          new NavListItem(undefined, "415-201-6370"),
          new NavListItem(undefined, "info@xploit.com"),
        ]}
        //
        $fontColor="var(--font-darker)"
        $fontColorHover="var(--font-darker-hover)"
        $nameGap="2.4rem"
        $itemsGap="0.8rem"
        $fontSizeH3="2rem"
        $fontWeightH3="400"
        $fontSizeItem="1.6rem"
      />

      <NavList
        navName="Account"
        navItems={[
          new NavListItem(undefined, "Create account"),
          new NavListItem(undefined, "Sign in"),
          new NavListItem(undefined, "Android app"),
          new NavListItem(undefined, "IOS app"),
        ]}
        //
        $fontColor="var(--font-darker)"
        $fontColorHover="var(--font-darker-hover)"
        $nameGap="2.4rem"
        $itemsGap="0.8rem"
        $fontSizeH3="2rem"
        $fontWeightH3="400"
        $fontSizeItem="1.6rem"
      />

      <NavList
        navName="Company"
        navItems={[
          new NavListItem(undefined, "About Xploit"),
          new NavListItem(undefined, "For business"),
          new NavListItem(undefined, "Our partners"),
          new NavListItem(undefined, "Careers"),
        ]}
        //
        $fontColor="var(--font-darker)"
        $fontColorHover="var(--font-darker-hover)"
        $nameGap="2.4rem"
        $itemsGap="0.8rem"
        $fontSizeH3="2rem"
        $fontWeightH3="400"
        $fontSizeItem="1.6rem"
      />

      <NavList
        navName="Resources"
        navItems={[
          new NavListItem(undefined, "Help center"),
          new NavListItem(undefined, "Privacy policy"),
          new NavListItem(undefined, "Terms of service"),
        ]}
        //
        $fontColor="var(--font-darker)"
        $fontColorHover="var(--font-darker-hover)"
        $nameGap="2.4rem"
        $itemsGap="0.8rem"
        $fontSizeH3="2rem"
        $fontWeightH3="400"
        $fontSizeItem="1.6rem"
      />
    </footer>
  );
};

export default Footer;
