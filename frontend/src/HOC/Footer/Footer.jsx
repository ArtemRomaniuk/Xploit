import styles from "./Footer.module.css";
import Logo from "../../components/Logo";
import NavList from "../../components/NavList";

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
          {
            value: (
              <>
                601 W Temple Street,
                <br /> Los Angeles CA, 90012
              </>
            ),
          },
          "415-201-6370",
          "info@xploit.com",
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
        navItems={["Create account", "Sign in", "Android app", "IOS app"]}
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
        navItems={["About Xploit", "For business", "Our partners", "Careers"]}
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
        navItems={["Help center", "Privacy policy", "Terms of service"]}
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
