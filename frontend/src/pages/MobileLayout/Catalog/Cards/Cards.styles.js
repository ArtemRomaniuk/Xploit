import styled from "styled-components";

const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .btns-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: var(--white);
      font-weight: 500;
      margin-right: 2.8rem;
      font-size: 3.2rem;
    }

    div {
      display: flex;
      gap: 1rem;

      svg {
        fill: var(--font-darker);
        transition: all 0.3s;
      }

      button:hover svg {
        fill: var(--font-darker-hover);
      }

      button:last-child svg {
        transform: rotate(180deg);
      }
    }

    div:last-child {
      margin-left: auto;
    }
  }

  .cards {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(18.1rem, 1fr));
    grid-auto-rows: 25rem;
    position: relative;
    padding-bottom: 5rem;

    h4 {
      font-size: 2.4rem;
      font-weight: 300;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
    }

    figure {
      & > svg {
        transform: translate(12%, -12%);
      }

      & > img {
        --s: 0.8;
      }

      & > p {
        font-size: 1.6rem;
      }

      .add-to-cart-btn {
        height: 4.4rem;
        margin-top: 0.6rem;

        p {
          font-size: 1.8rem;
        }

        button {
          width: 2.8rem;
          height: 2.8rem;

          svg {
            width: 2.8rem;
            height: 2.8rem;
          }
        }
      }

      .stars {
        display: none;
      }
    }
  }
`;

export default StyledCards;
