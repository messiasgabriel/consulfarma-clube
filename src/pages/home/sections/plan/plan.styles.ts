import styled, { css } from 'styled-components';
interface Props {
  color?: string;
  type?: string;
}

export const PlansStyledSection = styled.section`
  background: #edf8ff;
  padding: 90px 0px;
  position: relative;
  .swiper-button-next {
    position: absolute;
    background-image: url('/src/assets/images/home/plans/arrow-right-long-solid.svg') !important;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    top: 1150px;
    right: 45%;
  }
  .swiper-button-prev {
    position: absolute;
    background-image: url('/src/assets/images/home/plans/arrow-left-long-solid.svg') !important;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    top: 1150px;
    left: 45%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #0b344e !important;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-pagination-bullet {
    display: none;
  }
`;
export const PlansTitleStyled = styled.div`
  h2,
  h3,
  h4 {
    font-style: normal;
    color: #0b344e;
  }
  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 45px;
  }
  h3 {
    position: relative;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    text-align: left;
    border-bottom: 1px solid #0b344e;
    padding-bottom: 28px;
    padding-left: 30px;
    margin-bottom: 28px;
  }
  h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    margin: 3px 0px;
    padding-left: 24px;
  }
`;
export const PlansWrapperBox = styled.div<Props>`
  h3:before {
    content: '';
    width: 12px;
    height: 38px;
    position: absolute;
    border-radius: 40px;
    margin-left: -30px;
    top: -3px;
    background-color: ${(props) => props.color};
  }
`;
export const PlansBox = styled.div`
  background: #ffffff;
  border: 1px solid #c5dfe8;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 70px;
  button {
    margin: 0 auto !important;
    width: 100%;
  }
`;
export const PlansList = styled.ul<Props>`
  margin-bottom: 28px;
  li:nth-child(2),
  li:nth-child(7) {
    list-style: none;
    margin-left: -22px;
    font-weight: 700;
  }
  ${(props) =>
    props.type === 'Select' &&
    css`
      li {
        list-style-image: url('/src/assets/images/home/plans/check.svg');
      }

      li:nth-child(n + 14),
      li:nth-child(6) {
        list-style-image: url('/src/assets/images/home/plans/xIcon.svg');
      }
    `}
  ${(props) =>
    props.type === 'Prime' &&
    css`
      li {
        list-style-image: url('/src/assets/images/home/plans/check.svg');
      }
      li:nth-child(6),
      li:nth-child(n + 18) {
        list-style-image: url('/src/assets/images/home/plans/xIcon.svg');
      }
    `}
    ${(props) =>
    props.type === 'Premium' &&
    css`
      li {
        list-style-image: url('/src/assets/images/home/plans/check.svg');
      }
    `}
`;

export const PlansListItens = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #0b344e;
  margin: 3px 0px;
  padding-left: 24px;
`;
