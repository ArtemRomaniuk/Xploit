import styled from "styled-components";

const StyledItemSummary = styled.figure`
  flex-shrink: 1;
  height: 10.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;

  .img-name {
    display: flex;
    gap: 1.6rem;
    align-items: center;
    ${({ $cart }) => $cart && `max-width: 30rem;`}

    .img-wrapper {
      width: 10rem;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      max-width: 10rem;
      max-height: 10rem;
    }

    p {
      color: var(--white);
      font-size: 2.4rem;
      font-weight: 300;
    }
  }

  .count-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 27rem;
    width: 100%;
    overflow-x: hidden;

    .price-count {
      color: var(--font-main);
      font-size: 2rem;
      font-weight: 300;
    }

    .price {
      color: var(--white);
      font-size: 2.8rem;
      font-weight: 300;
    }

    .count-btn {
      display: flex;
      gap: 0.8rem;
      align-items: center;

      input {
        background: none;
        outline: none;
        color: var(--white);
        font-size: 2rem;
        font-weight: 300;

        display: flex;
        width: 7.2rem;
        height: 4.8rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 8px;
        border: 1px solid var(--white);
      }

      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      input[type="number"] {
        -moz-appearance: textfield;
        appearance: none;
      }

      .substract,
      .add {
        background: none;
        border: none;
        cursor: pointer;
        width: 2.4rem;
        height: 2.4rem;

        svg {
          width: 100%;
          height: 100%;
          fill: var(--white);
          transition: all 0.1s;
        }

        svg:hover {
          fill: var(--font-main);
        }
      }
    }
  }
`;

export default StyledItemSummary;
