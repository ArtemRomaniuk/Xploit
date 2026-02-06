import StyledBanner from "./Banner.styles";
import Button from "../../../../../components/Button";
import HeadphonesImage from "./logitech-gprox.png";

const Banner = (props) => {
  return (
    <StyledBanner {...props}>
      <div>
        <h2>Headphones</h2>
        <p>"Logitech G PRO X"</p>
        <Button $width="18rem" $height="4.4rem">
          ORDER NOW
        </Button>
      </div>
      <img src={HeadphonesImage} alt="Logitech G Pro X photo" />
    </StyledBanner>
  );
};

export default Banner;
