import styled from "styled-components";

const StyledOrderXP = styled.div`
  padding: 1.6rem;
  border-radius: 8px;
  background-color: var(--ui-darker);

  .textbox {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 1.6rem;
    align-items: center;

    span {
      color: var(--white);
      font-size: 2rem;
      font-weight: 500;
    }

    input {
      color: var(--white);
      font-size: 2rem;
      font-weight: 500;
      background: none;
      border: none;
      outline: none;
      height: 3.2rem;
      width: 20%;
      padding: 0.4rem 0.8rem;
      text-align: center;

      border-radius: 8px;
      border: 1px solid var(--white);
    }

    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  }

  .input-range {
    width: 100%;
    -webkit-appearance: none;
    cursor: pointer;
    background: none;
    border-radius: 4px;
    outline: none;
    background: ${({ $xpDiscount, $userXP }) =>
      `linear-gradient(to right,
       var(--accent-main) 0% ${($xpDiscount / $userXP) * 100}%,
       var(--ui-bright) ${($xpDiscount / $userXP) * 100}% 100%)`};

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 0.4rem;
      border-radius: 4px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      background: var(--white);
      transform: translateY(-35%);
    }
  }
`;

export default StyledOrderXP;
