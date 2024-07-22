import styled from 'styled-components';
export const TestimonySection = styled.section`
  padding: 90px 0;
  background: #edf8ff;
  border-radius: 20px;
  button {
    width: -webkit-max-content;
    font-size: 20px;
    padding: 2px 30px;
  }
  button > svg {
    margin-left: 10px;
  }

  @media (max-width: 600px) {
    overflow: hidden;
  }
`;
export const TestimonyTitleStyled = styled.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: #0b344e;
  text-align: center;
  margin-bottom: 120px;
`;
export const TestimoyVideoWrapper = styled.div`
  max-width: 750px;
  margin: auto;
  margin-bottom: 70px;
  position: relative;
  img {
    position: absolute;
    max-width: 118%;
    height: 120%;
    margin-left: -122px;
    margin-top: -113px;
  }
`;
