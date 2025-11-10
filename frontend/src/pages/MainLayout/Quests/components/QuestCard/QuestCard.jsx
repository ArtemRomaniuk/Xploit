import StyledQuestCard from "./QuestCard.styles";
import Button from "../../../../../components/Button";
import IconClaimed from "./claimed.svg?react";
import { useState } from "react";

const QuestCard = ({
  quest = {
    name: "Dark Souls 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    xp: 100,
    progress: 100,
  },
}) => {
  const [isClaimed, setIsClaimed] = useState(false);

  return (
    <StyledQuestCard
      $progress={quest.progress}
      className={isClaimed ? "claimed" : undefined}
    >
      {isClaimed && <IconClaimed className="iconClaimed" />}
      <div className="textBox">
        <h4 className="questName">{quest.name}</h4>
        <p className="questDesc">{quest.description}</p>
      </div>
      <div className="xpContainer">
        <p className="xp">{quest.xp}XP</p>
        {quest.progress >= 100 && (
          <Button
            className="claimBtn"
            $width="10rem"
            $height="3.6rem"
            onClick={() => setIsClaimed(true)}
          >
            Claim
          </Button>
        )}
      </div>
      <div className="progressBarContainer">
        <div className="progressBar"></div>
      </div>
    </StyledQuestCard>
  );
};

export default QuestCard;
