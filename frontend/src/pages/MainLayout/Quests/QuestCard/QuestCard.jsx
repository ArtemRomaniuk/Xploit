import StyledQuestCard from "./QuestCard.styles";
import Button from "../../../../components/Button";
import IconClaimed from "./claimed.svg?react";
import { useQuests } from "../../../../hooks/useQuests";

const QuestCard = ({ quest }) => {
  const claimQuest = useQuests((state) => state.claimQuest);

  return (
    <StyledQuestCard
      $goal={quest.goal}
      $progress={quest.progress}
      className={quest.claimed ? "claimed" : undefined}
    >
      {quest.claimed && <IconClaimed className="iconClaimed" />}
      <div className="textBox">
        <h4 className="questName">{quest.name}</h4>
        <p className="questDesc">{quest.description}</p>
      </div>
      <div className="xpContainer">
        <p className="xp">{quest.reward}XP</p>
        {quest.progress >= quest.goal && (
          <Button
            className="claimBtn"
            $width="10rem"
            $height="3.6rem"
            onClick={() => claimQuest(quest.id)}
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
