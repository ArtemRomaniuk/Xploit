import styled from "styled-components";

const StyledProfile = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 0.3rem;
    color: var(--white);

    p:first-child {
      font-size: 1.4rem;
      font-weight: 300;
    }

    p:last-child {
      font-size: 1.6rem;
    }
  }

  & > figure {
    width: 4rem;
    height: 4rem;
    position: relative;
    overflow: hidden;

    svg:first-child {
      width: 4rem;
      height: 4rem;
    }

    svg:last-child {
      width: 2.8rem;
      height: 3.3rem;

      position: absolute;
      transform: translate(-50%, 0);
      bottom: 0;
      left: 50%;
    }
  }
`;

export default StyledProfile;
