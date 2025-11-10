import StyledQuests from "./Quests.styles";
import QuestCard from "./components/QuestCard";
import { useQuests } from "../../../features/quests/useQuests";

const Quests = () => {
  const quests = useQuests((state) => state.quests);

  return (
    <StyledQuests>
      <h2 className="questsHeader">Quests</h2>
      <div className="questsContainer">
        {quests.map((quest, index) => (
          <QuestCard quest={quest} key={index} />
        ))}
      </div>
      <p>No more quests...</p>
    </StyledQuests>
  );
};

export default Quests;
