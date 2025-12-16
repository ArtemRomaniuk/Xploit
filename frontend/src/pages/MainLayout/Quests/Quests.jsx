import StyledQuests from "./Quests.styles";
import QuestCard from "./QuestCard";
import { useQuests } from "../../../hooks/useQuests";
import { useEffect } from "react";
import { useUser } from "../../../hooks/useUser";

const Quests = () => {
  const quests = useQuests((state) => state.quests);
  const isLoggedIn = useUser((state) => state.isLoggedIn);
  const fetchQuests = useQuests((s) => s.fetchQuests);

  useEffect(() => {
    fetchQuests();
  }, []);

  return (
    <StyledQuests>
      <h2 className="questsHeader">Quests</h2>
      {isLoggedIn ? (
        <>
          <div className="questsContainer">
            {quests.map((quest) => (
              <QuestCard quest={quest} key={quest._id} />
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
