import StyledOrderXP from "./OrderXP.styles";
import { useUser } from "../../../../../hooks/useUser";
import { useOrder } from "../../../../../hooks/useOrder";
import { useEffect, useState } from "react";

const OrderXP = () => {
  const userXP = useUser((state) => state.xp);
  const xpDiscount = useOrder((state) => state.xpDiscount);
  const setXpDiscount = useOrder((state) => state.setXpDiscount);
  const setXpDiscountTrigger = useOrder((state) => state.setXpDiscountTrigger);
  const [xpField, setXpField] = useState(xpDiscount);

  useEffect(() => {
    setXpField(String(xpDiscount));
  }, [setXpDiscountTrigger]);

  return (
    <StyledOrderXP $xpDiscount={xpDiscount} $userXP={userXP}>
      <div className="textbox">
        <span>Use your XP:</span>
        <input
          type="number"
          value={xpField}
          onChange={(e) => setXpField(e.target.value)}
          onBlur={(e) => {
            if (
              xpField < 0 ||
              xpField > userXP ||
              xpField === "" ||
              Number.isNaN(Number(xpField))
            )
              setXpDiscount(0);
            else setXpDiscount(Number(xpField));
          }}
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
