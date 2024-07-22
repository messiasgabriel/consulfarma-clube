import styled from 'styled-components';

export const CommonQuestionsSection = styled.section`
  padding: 90px 0;
  .accordion {
    max-width: 800px;
    width: 100%;
    border: unset;
  }

  .accordion-body {
    padding: 20px 0;
    color: #4b697c;
  }
  .accordion-item {
    border: none;
    color: #0b344e;
  }
  .accordion-button:focus {
    border-color: none;
    box-shadow: none;
  }
  .accordion-button {
    font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
    background-color: transparent;
    border-bottom: 2px solid #0b344e;
    outline: unset;
    text-align: left;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 20px 0px;
    color: #0b344e;
  }
  .container > button {
    margin-top: 5rem;
  }
  .container > button > svg {
    margin-left: 10px;
  }
`;
export const QuestionsTitleStyled = styled.h1`
  font-size: calc(22px + (32 - 22) * ((100vw - 300px) / (1600 - 300)));
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 60px;
  color: #0b344e;
`;
