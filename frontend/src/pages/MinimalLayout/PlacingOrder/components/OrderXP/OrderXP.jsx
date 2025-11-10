import StyledOrderXP from "./OrderXP.styles";
import { useUser } from "../../../../../features/user/useUser";
import { useState } from "react";

const OrderXP = () => {
  const userXP = useUser((state) => state.xp);
  const [xpField, setXpField] = useState(0);

  return (
    <StyledOrderXP $xpField={xpField} $userXP={userXP}>
      <div className="textbox">
        <span>Use your XP:</span>
        <input
          type="number"
          value={xpField}
          onChange={(e) =>
            e.target.value >= 0 &&
            e.target.value <= userXP &&
            e.target.value !== "" &&
            setXpField(e.target.value)
          }
        />
      </div>

      <input
        className="input-range"
        type="range"
        min={0}
        max={userXP}
        value={xpField}
        step={1}
        onChange={(e) => setXpField(e.target.value)}
      />
    </StyledOrderXP>
  );
};

export default OrderXP;
