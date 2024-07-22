import { Container, Accordion, AccordionButton } from 'react-bootstrap';
import {
  CommonQuestionsSection,
  QuestionsTitleStyled,
} from './questions.styles';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import Button from '../../../../components/layout/components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type QuestionsSectionPropsT = {
  handleModalContact: () => void;
}

const QuestionsSection:React.FC<QuestionsSectionPropsT> = ({handleModalContact}) => {
  return (
    <>
      <CommonQuestionsSection>
        <Container className="d-flex flex-column align-items-center">
          <QuestionsTitleStyled>Perguntas Frequentes</QuestionsTitleStyled>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <AccordionButton>O que é o Clube Consulfarma?</AccordionButton>
              <AccordionBody>
                Um plano de assinatura mensal com suporte em todas as áreas da
                farmácia magistral.Comtempla, ainda, projetos e materiais
                científicos exclusivos.
              </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <AccordionButton>Como é a contratação?</AccordionButton>
              <AccordionBody>
                Você envia o seu contato, um dos nossos especialistas entrará em
                contato e apresentará nossa plataforma, o Integra. Depois disso,
                você escolhe o plano que irá atender suas necessidades, e
                realizamos a liberação do acesso.
              </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <AccordionButton>Tem fidelidade?</AccordionButton>
              <AccordionBody>Sim, de 12 meses.</AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <AccordionButton>Vou ter treinamento e suporte?</AccordionButton>
              <AccordionBody>
                Sim! Após o fechamento, nossa equipe de relacionamento agendará
                seu treinamento para apresentar detalhadamente cada área da
                plataforma, o Integra.
              </AccordionBody>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <AccordionButton>
                O que eu ganho com o Clube Consulfarma?
              </AccordionButton>
              <AccordionBody>
                Organização, aumento de faturamento e capacitação de equipe.
                Todas as áreas da sua farmácia recebem suporte.
              </AccordionBody>
            </Accordion.Item>
          </Accordion>
          <Button color={'#ff41ad'} outlined="none" onClick={handleModalContact}>
            Saiba mais
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Container>
      </CommonQuestionsSection>
    </>
  );
};

export default QuestionsSection;
