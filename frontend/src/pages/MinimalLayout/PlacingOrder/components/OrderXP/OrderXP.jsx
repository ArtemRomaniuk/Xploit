import StyledOrderXP from "./OrderXP.styles";
import { useUser } from "../../../../../hooks/useUser";
import { useOrder } from "../../../../../hooks/useOrder";

const OrderXP = () => {
  const userXP = useUser((state) => state.xp);
  const xpDiscount = useOrder((state) => state.xpDiscount);
  const setXpDiscount = useOrder((state) => state.setXpDiscount);

  return (
    <StyledOrderXP $xpDiscount={xpDiscount} $userXP={userXP}>
      <div className="textbox">
        <span>Use your XP:</span>
        <input
          type="number"
          value={xpDiscount}
          onChange={(e) =>
            e.target.value >= 0 &&
            e.target.value <= userXP &&
            setXpDiscount(e.target.value)
          }
          onBlur={(e) => e.target.value === "" && setXpDiscount(0)}
        />
      </div>

      <input
        className="input-range"
        type="range"
        min={0}
        max={userXP}
        value={xpDiscount}
        step={1}
        onChange={(e) => setXpDiscount(e.target.value)}
      />
    </StyledOrderXP>
  );
};

export default OrderXP;
