import StyledQuestCard from "./QuestCard.styles";
import Button from "../../../../components/Button";
import IconClaimed from "./claimed.svg?react";
import { useQuests } from "../../../../hooks/useQuests";

const QuestCard = ({ quest }) => {
  const claimQuest = useQuests((state) => state.claimQuest);

  return (
    <StyledQuestCard
      $goal={quest.questRef.goal}
      $progress={quest.progress}
      className={quest.claimed ? "claimed" : undefined}
    >
      {quest.claimed && <IconClaimed className="iconClaimed" />}
      <div className="textBox">
        <h4 className="questName">{quest.questRef.name}</h4>
        <p className="questDesc">{quest.questRef.description}</p>
      </div>
      <div className="xpContainer">
        <p className="xp">{quest.questRef.reward}XP</p>
        {quest.progress >= quest.questRef.goal && (
          <Button
            className="claimBtn"
            $width="10rem"
            $height="3.6rem"
            onClick={() => claimQuest(quest.questRef._id.toString())}
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
