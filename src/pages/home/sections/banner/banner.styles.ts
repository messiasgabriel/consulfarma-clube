import styled, { css } from 'styled-components';

export const BannerSectionStyled = styled.section`
  /*background-image: url("/src/assets/images/home/banner.png");  --> excluir essa imagem
background-size: cover;*/

  height: 80vh;

  position: relative;
  background-position: top right;
  background-repeat: no-repeat;
  background-color: #d1e8f5;
  background: url('/src/assets/images/home/bg-farmacia.jpg'), #d1e8f5;
  min-height: 60vh;
  background-size: contain;
  background-position: left 1031px center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding-top: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 998px) {
    & {
      height: unset;
      padding-top: 40px;
    }
  }

  .conteudo {
    width: 100%;
  }

  h1 {
    font-weight: 700;
    font-size: calc(32px + (46 - 32) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(40px + (56 - 40) * ((100vw - 300px) / (1600 - 300)));
    color: var(--dark-blue-500);
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: var(--dark-blue-500);
  }

  @media (max-width: 998px) {
    h1,
    p {
      text-align: center;
    }

    p {
      margin: 10px 0 20px 0;
    }

    button {
      margin-bottom: 30px;
    }

    .wraper-text {
      max-width: 100%;
      margin-bottom: 30px;
      padding-top: 200px;
    }
  }
`;

export const WrapperImageStyled = styled.div`
  position: relative;

  @media (max-width: 1000px) {
    & {
      margin-top: 50px;
    }
  }

  img.founders {
    width: 90%;
    margin-bottom: -25px;
    user-select: none;
  }
`;

export const FloatingIconStyled = styled.div`
  user-select: none;
  max-width: 70px;

  img {
    display: block;
    margin: auto;
    cursor: pointer;
    width: 90%;

    &:hover {
      animation: float 2s ease-in-out infinite;
    }
  }
  label {
    border-radius: 8px;
    padding: 6px 12px;
    margin-top: 21px;
    opacity: 1;
    color: transparent;
    background: transparent;
  }

  /* Faz o label com texto aparecer, por causa do opacity */
  &:hover label {
    opacity: 1;
    color: #0b344e;
    background: #fff;
  }

  &.top-l {
    position: absolute;
    top: 79px;
    left: 10px;
  }

  &.top-r {
    position: absolute;
    top: -8px;
    right: 32px;
  }

  &.mid-l {
    position: absolute;
    top: 70%;
    left: -87px;
  }

  &.mid-r {
    position: absolute;
    top: 141px;
    right: -67px;
  }

  &.bottom {
    position: absolute;
    bottom: 0%;
    right: -43px;
  }

  @media (max-width: 1200px) {
    label {
      font-size: 14px;
    }
    &.top-r {
      position: absolute;
      top: 0px;
      right: 50px;
      width: 60px;
    }
    &.top-l {
      position: absolute;
      top: 79px;
      left: 10px;
      width: 50px;
    }

    &.mid-l {
      top: 260px;
      left: -7px;
      width: 60px;
    }

    &.mid-r {
      top: 58px;
      right: -14px;
      width: 60px;
    }

    &.bottom {
      bottom: -10%;
      right: -3px;
      width: 60px;
    }
  }

  @media (max-width: 800px) {
    &.top-r {
      position: absolute;
      top: -20px;
      right: 50px;
      width: 50px;
    }

    &.mid-l {
      top: 260px;
      left: -7px;
      width: 50px;
    }

    &.mid-r {
      top: 78px;
      right: -14px;
      width: 50px;
    }

    &.bottom {
      bottom: 57px;
      right: -3px;
      width: 50px;
    }

    @media (max-width: 512px) {
      &.top-l {
        top: 36px;
        left: -20px;
      }

      &.top-r {
        top: -20px;
        right: 23px;
        width: 50px !important;
      }

      &.top-r label {
        margin-top: 2px;
      }

      &.mid-l {
        top: 150px;
        left: -30px;
      }

      &.mid-r {
        top: 54px;
        right: -25px;
      }

      &.mid-r label {
        margin-top: 2px;
      }

      &.bottom {
        bottom: -10px;
        right: -10px;
      }
    }
  }

  @media (max-width: 512px) {
    label {
      font-size: 12px;
    }

    &.top-l {
      top: 0%;
      left: -2%;
    }

    &.top-r {
      top: -25%;
      right: 10%;
    }

    &.top-r label {
      margin-top: 2px;
    }

    &.mid-l {
      top: 60% !important;
      left: 0% !important;
    }
    &.mid-l label {
      margin-top: 2px;
    }

    &.mid-r {
      top: 54px;
      right: 2%;
    }

    &.mid-r label {
      margin-top: 2px;
    }

    &.bottom {
      bottom: 0%;
      right: 15%;
    }
    &.bottom label {
      margin-top: 0px;
    }
  }

  /* component animations */
  @keyframes float {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-10px);
    }
  }
`;

export const NumbersStyled = styled.div`
  background: #f5ded1;
  padding: 20px 0px;
`;

export const NumberItemStyled = styled.div`
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 52px;
    text-align: center;
    color: var(--pink-500);
    display: inline-block;
    @media (max-width: 1000px) {
      & {
        font-size: 40px;
        margin-bottom: 0px;
      }
    }
  }
  p {
    color: var(--blue-dark-500);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    /* or 130% */
    text-align: center;
    display: block;
    margin-top: 18px;
    max-width: 199px;
    margin: 0px auto;

    @media (max-width: 1000px) {
      & {
        margin-bottom: 10px;
        font-size: 20px;
      }
    }
  }
`;
