import styled from 'styled-components';

interface Props {
  image: string;
  color: string;
}

export const BenefitSection = styled.section`
  background: #0b344e;
  padding-top: 0;
  padding-bottom: 90px;
`;
export const BenefitTitleStyled = styled.div`
  background-color: #edf8ff;
  padding: 0 0 132px;
  margin-bottom: -40px;
  h2 {
    font-style: normal;
    font-size: 32px;
    font-weight: bold;
    line-height: 36px;
    color: #0b344e;
    max-width: 700px;
    margin: auto;
    text-align: center;
  }
`;
export const BenefitCardsWrapper = styled.div`
  background-size: 90px;
`;
export const BenefitCard = styled.div<Props>`
  background-image: url(${(props) => props.image});
  background-color: ${(props) => props.color};
  background-position: right bottom;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding-right: 200px;
  padding: 40px 60px 30px 30px;
  margin-bottom: 22px;
  h3 {
    font-weight: 700;
    font-style: normal;
    font-size: 32px;
    line-height: 32px;
    color: #0b344e;
  }
  button:hover {
    background-color: #0b344e;
  }
  button {
    white-space: nowrap;
  }
`;
export const BenefitCardSlide = styled.div`
  padding: 20px 20px;
  margin-top: -29px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 20px;
  background-color: ${(props) => props.color};
`;
export const BenefitAccessItems = styled.ul`
  transition: 5s;
  padding: 0;
  list-style: none;
  width: 100%;
  li {
    background: rgba(255, 255, 255, 0.7);
    opacity: 0.8;
    border-radius: 4px;
    margin: 6px 0px;
    color: black;
    padding: 2px 10px;
  }
  li:nth-child(even) {
    background: rgba(255, 255, 255, 0.4);
  }
`;
