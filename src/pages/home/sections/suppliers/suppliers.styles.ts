import styled from 'styled-components';

export const SuppliersHomeSection = styled.section`
  padding: 120px 0px;
`;
export const SuppliersStyled = styled.div`
  margin: 0 auto;
`;
export const SuppliersTextStyled = styled.div`
  width: 385px;
  p {
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
    color: #0b344e;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    color: #0b344e;
    font-size: calc(28px + (32 - 28) * ((100vw - 300px) / (1600 - 300)));
  }
  span {
    color: #ff41ad;
  }
  @media (max-width: 991px) {
    height: 240px;
  }
`;
export const InfosStyled = styled.div`
  margin: 0 auto;
  p:first-of-type {
    color: #36c5f3;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    margin: 5px auto;
    width: 100%;
  }
`;
export const SuppliersLogoBox = styled.div`
  padding: 40px 60px;
  border: 1px solid #c5dfe8;
  position: relative;
  max-width: 100%;
  border-radius: 10px 10px 0px 0px;
`;
export const SuppliersBarIcons = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #c5dfe8;
  height: 36px;
  border-radius: 10px 10px 0px 0px;
  #icon-1 {
    position: absolute;
    left: 400px;
    top: -40px;
    @media (max-width: 600px) {
      max-width: 200px;
      left: 344px;
      top: -65px;
    }
  }
  #icon-2 {
    position: absolute;
    width: 18px;
    left: 150px;
    top: -40px;
    @media (max-width: 600px) {
      max-width: 200px;
      left: 225px;
      top: -50px;
    }
  }
  #icon-3 {
    position: absolute;
    width: 18px;
    left: 270px;
    top: -60px;
    @media (max-width: 600px) {
      max-width: 200px;
      left: 290px;
      top: -70px;
    }
  }
`;
export const IconDiscountStyled = styled.img`
  position: absolute;
  left: 200px;
  top: -23px;
  @media (max-width: 600px) {
    max-width: 200px;
    left: 50%;
  }
`;
