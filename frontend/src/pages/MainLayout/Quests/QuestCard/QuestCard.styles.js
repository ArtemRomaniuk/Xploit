import styled from "styled-components";

const StyledQuestCard = styled.figure`
  height: 22.2rem;
  padding: 2.4rem;
  background-color: var(--ui-main);
  border-radius: 8px;
  display: grid;
  grid-template-areas:
    "text xp"
    "progressBar progressBar";
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  gap: 1.6rem;
  transition: all 0.3s;
  container: quest-card / inline-size;

  &.claimed {
    background-color: var(--ui-darkest);

    .iconClaimed {
      width: 12rem;
      height: 12rem;
      grid-column: 1/3;
      justify-self: center;
      align-self: center;
    }

    .textBox {
      display: none;
    }

    .xpContainer {
      display: none;
    }
  }

  .textBox {
    grid-area: text;

    .questName {
      color: var(--white);
      font-size: 2.4rem;
      margin-bottom: 1rem;
    }

    .questDesc {
      color: var(--font-main);
      font-size: 2rem;
      font-weight: 300;
    }
  }

  .xpContainer {
    grid-area: xp;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;

    .xp {
      display: block;
      color: var(--white);
      font-size: 4rem;
    }

    .claimBtn {
      font-size: 2.4rem;
    }
  }

  .progressBarContainer {
    grid-area: progressBar;

    height: 1.2rem;
    border-radius: 4px;
    background-color: var(--ui-darkest);
    overflow: hidden;

    .progressBar {
      height: 100%;
      background-color: var(--accent-main);
      width: ${({ $progress, $goal }) => `${($progress / $goal) * 100}%`};
    }
  }

  /* 336px inner */
  @container quest-card (max-width: 42em) {
    .textBox {
      .questName {
        font-size: 2rem;
      }

      .questDesc {
        font-size: 1.8rem;
      }
    }

    .xpContainer {
      .xp {
        font-size: 3.6rem;
      }

      .claimBtn {
        width: 9rem;
      }
    }
  }

  /* 272px inner */
  @container quest-card (max-width: 34em) {
    .textBox {
      .questName {
        font-size: 2rem;
      }

      .questDesc {
        font-size: 1.6rem;
      }
    }
  }
`;

export default StyledQuestCard;
