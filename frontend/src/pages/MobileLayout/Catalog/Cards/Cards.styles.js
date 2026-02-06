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
      margin-left: auto;

      button {
        height: 3.6rem;
        font-size: 1.8rem;

        svg {
          display: none;
        }
      }

      .btn-sort-top {
        width: 6rem;
      }

      .btn-sort-cheap {
        width: 12.5rem;
      }

      .btn-sort-expensive {
        width: 16rem;
      }
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

  /* 496px */
  @media (max-width: 31rem) {
    .btns-container {
      div {
        button {
          border-radius: 4px;

          span {
            display: none;
          }

          svg {
            display: block;
            width: 3rem;
            height: 3rem;
          }
        }

        .btn-sort-top,
        .btn-sort-cheap,
        .btn-sort-expensive {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
`;

export default StyledCards;
