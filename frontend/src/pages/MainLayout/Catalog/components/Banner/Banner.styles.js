import styled from "styled-components";
import bannerBack from "./banner-back.png";

const StyledBanner = styled.div`
  width: 100%;
  height: 45rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1)), url(${bannerBack});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 12rem;

  div {
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--white);
      font-size: 6.4rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
    }

    p {
      color: var(--font-darker);
      font-size: 3.6rem;
      font-weight: 500;
      margin-bottom: 2.8rem;
    }
  }

  img {
    position: absolute;
    transform: translate(+50%, -50%);
    top: 55%;
    right: 25%;
    filter: brightness(0.7);
  }

  /* 1200px */
  @media (max-width: 75em) {
    height: 40rem;
    padding: 0 6rem;

    div {
      h2 {
        font-size: 5.4rem;
      }

      p {
        font-size: 3rem;
      }

      button {
        font-size: 1.8rem;
        height: 4rem;
        width: 16rem;
      }
    }

    img {
      transform: translate(+50%, -50%) scale(0.9);
    }
  }
`;

export default StyledBanner;
