import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import Button from '../../components/layout/components/button/button';

export const ModalStyled = styled(Modal)`
  color: #0b344e;
`;
export const ModalCloseButton = styled(Button)`
  border-radius: 0;
  border: none !important;
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
  #close-icon {
    width: 16px;
    height: 16px;
    opacity: 0.5;
  }
  #close-icon:hover {
    opacity: 1;
  }
`;
export const ModalBodyStyled = styled.div`
  h2 {
    text-transform: uppercase;
  }
  h3 {
    font-size: 2rem;
  }
  a {
    color: #0d6efd !important;
    text-decoration: underline;
  }
  img {
    width: 40%;
    margin: 30px 0;
  }
`;
export const BenefitsSection = styled.section`
  * {
    color: #fff;
  }
`;
export const TitleStyled = styled.h2`
  font-size: 22px;
  font-weight: 600;
  font-style: normal;
  line-height: 36px;
  color: #0b344e;
  margin-bottom: 21px;
`;
export const SafraBoxStyled = styled.div`
  background: #4a70d1;
  border-radius: 10px;
  width: 100%;
  padding: 30px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
export const SafraBoxOne = styled.div`
  max-width: 280px;
  font-weight: 400;
`;
export const SafraBoxTwo = styled.div`
  th {
    color: #b9c4f9;
    margin: 0;
    border-bottom: 0;
  }
  table td {
    text-align: center;
    padding: 6px 2px;
  }
  td:first-child {
    text-align: left;
  }
  table tr:last-child td {
    border-bottom: 0;
  }
`;
export const TableWrapper = styled.div`
  border: solid 1px hsl(0deg 0% 100% / 40%);
  padding: 10px 20px 2px 20px;
  border-radius: 10px;
  font-weight: 400;
  min-width: 400px;
  p {
    border-bottom: solid 1px hsl(0deg 0% 100% / 40%);
    padding-bottom: 8px;
    margin-bottom: 2px;
  }
  @media screen and (max-width: 512px) {
    min-width: 300px;
  }
`;
export const SafraBoxThree = styled.div`
  img {
    margin-top: 10px;
    min-width: 120px;
    margin-right: 113px;
  }
  span {
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    color: #c5b97b;
    width: 153px;
    display: block;
    margin-left: -100px;
    font-weight: 600;
    margin-top: 30px;
  }
`;

export const SmallTextStyled = styled.small`
  color: #0b344e;
  font-weight: 400;
`;

export const DiscountSection = styled.section`
  padding: 90px 0;
  position: relative;
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: center;
    top: 340px;
    width: 24px;
    height: 24px;
    padding: 0px 25px 0px 25px;
  }
  .swiper-button-next {
    background-image: url('/src/assets/images/partners/arrow-right-long-solid.svg') !important;
    right: 40%;
  }
  .swiper-button-prev {
    background-image: url('/src/assets/images/partners/arrow-left-long-solid.svg') !important;
    left: 40%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #0b344e !important;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background-color: #869791;
    border-radius: 5px;
  }
  .swiper-pagination-bullet {
    display: none;
  }
`;
export const DiscountPartners = styled.div`
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  img {
    max-height: 110px;
  }
  margin-bottom: 40px;
`;
export const DiscountPartnersCards = styled.div`
  h3 {
    color: #0b344e;
  }
`;
export const PartnersLogo = styled.div`
  background: #d1e8f596;
  padding: 30px 20px 12px;
  max-height: 120px;
  overflow: hidden;
`;
export const PartnersWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #c5dfe8;
  border-radius: 10px;
  margin-bottom: 10px;
  min-height: 310px;
`;
export const DiscountBand = styled.div`
  position: absolute;
  height: 40px;
  top: 38px;
  background: #00a3ff;
  transform: rotate(32.2deg);
  width: 150%;
  h3 {
    font-weight: 700;
    line-height: 16px;
    color: white;
    text-transform: uppercase;
    padding: 10px 0;
  }
`;
export const PartnersDescription = styled.div`
  padding: 1rem;
  flex: 1;
`;
