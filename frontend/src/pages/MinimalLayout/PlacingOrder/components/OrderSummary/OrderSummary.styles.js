import styled from "styled-components";

const StyledOrderSummary = styled.div`
  height: fit-content;
  background-color: var(--ui-darker);
  border-radius: 8px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    color: var(--white);
    font-size: 3.6rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  .prices-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    .price-items,
    .price-delivery,
    .xp-discount {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 2rem;
      font-weight: 300;
    }

    .xp-discount span {
      color: var(--green);
    }
  }

  .total-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 300;
    padding: 1.2rem 0;
    border-top: 1px solid var(--ui-bright);
    border-bottom: 1px solid var(--ui-bright);

    span {
      color: var(--white);
      font-size: 3.2rem;
    }
  }

  .btn-order {
    font-size: 2.4rem;
    font-weight: 500;
    border-radius: 4px;
  }
`;

export default StyledOrderSummary;
