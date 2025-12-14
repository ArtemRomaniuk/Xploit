import StyledQuests from "./Quests.styles";
import QuestCard from "./QuestCard";
import { useQuests } from "../../../hooks/useQuests";
import { useEffect } from "react";
import { useUser } from "../../../hooks/useUser";

const Quests = () => {
  const quests = useQuests((state) => state.quests);
  const deleteAllClaimed = useQuests((state) => state.deleteAllClaimed);
  const isLoggedIn = useUser((state) => state.isLoggedIn);

  useEffect(() => {
    return () => deleteAllClaimed();
  }, []);

  return (
    <StyledQuests>
      <h2 className="questsHeader">Quests</h2>
      {isLoggedIn ? (
        <>
          <div className="questsContainer">
            {quests.map((quest) => (
              <QuestCard quest={quest} key={quest.id} />
            ))}
          </div>
          <p>No more quests...</p>
        </>
      ) : (
        <div className="login-dependency">Login to complete quests</div>
      )}
    </StyledQuests>
  );
};

export default Quests;
