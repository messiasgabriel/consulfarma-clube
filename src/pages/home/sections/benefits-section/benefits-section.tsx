import Button from '../../../../components/layout/components/button/button';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {
  BenefitAccessItems,
  BenefitCard,
  BenefitCardSlide,
  BenefitCardsWrapper,
  BenefitSection,
  BenefitTitleStyled,
} from './benefits-section.styles';

type BenefitsSectionPropsT = {
  handleModalContact: () => void;
};

type BenefitsT = {
  title: string;
  description: string;
  icon: string;
  accessItem: Array<string>;
  color: string;
};

const BenefitsSection: React.FC<BenefitsSectionPropsT> = ({
  handleModalContact,
}) => {
  const [selectedBenefitIndex, setSelectedBenefitIndex] = useState(-1);
  const [showBenefitAccess, setShowBenefitAccess] = useState(false);
  const imagesPath = './src/assets/images/home/benefits-section/';
  const benefits: Array<BenefitsT> = [
    {
      title: 'Farmacotécnica',
      description:
        'Solucionando seus problemas dentro do laboratório, nosso pilar científico contempla benefícios únicos no mercado.',
      icon: 'icon-farmacotecnica.svg',
      accessItem: [
        'Canal de Dúvidas Técnicas',
        'Vídeos Práticos de Manipulação',
        'Apoio Farmacoténico',
      ],
      color: '#94BFFF',
    },
    {
      title: 'Marketing',
      description:
        'Há quem diga que a propaganda é a alma do negócio. Aqui, você encontra todas as ferramentas de marketing para positivar, divulgar e vender seus produtos',
      icon: 'icon-marketing.svg',
      accessItem: [
        'Cursos Online',
        'Posts para Redes Sociais',
        'Dicas de Marketing Magistral',
        'Criação de Logotipo',
        'Criação de Website',
        'Campanha Publicitária',
        'Jornal Especial',
        'Calendário de Datas Comemorativas.',
      ],
      color: '#C8A7FF',
    },
    {
      title: 'Inovação',
      description:
        'É possível se tornar único na região com nossos materiais de inovação, atraindo prescrições, fidelizando clientes e consolidando sua marca.',
      icon: 'icon-inovacao.svg',
      accessItem: [
        'Cursos Online',
        'Projetos Científicos de Formulações',
        'Formulários',
        'Buscardor de Insumos',
        'Desenvolvimento de Fórmulas Exclusivas',
      ],
      color: '#F096E7',
    },
    {
      title: 'Visitação',
      description:
        'O suporte comercial mais importante da sua farmácia agora tem capacitações, materiais e soluções exclusivas.',
      icon: 'icon-visitacao.svg',
      accessItem: [
        'Cursos Online',
        'Materiais Científicos',
        'Treinamentos',
        'Gerenciamento de Prescritores',
        'Gerenciamento de Propagandistas',
        'Consultoria de Visitação',
      ],
      color: '#E8FB74',
    },
    {
      title: 'Capacitação',
      description:
        'Evitando a rotatividade de equipe dentro da farmácia, esse pilar contempla todas as soluções em capacitação para todos os departamentos.',
      icon: 'icon-capacitacao.svg',
      accessItem: [
        'Cursos Online',
        'Eventos',
        'Treinamentos',
        'E-books',
        'Artigos Científicos',
        'Prescrição Farmacêutica',
        'Projeto Especialidades Médicas',
        'Palestrantes Exclusivos',
      ],
      color: '#94FFD8',
    },
    {
      title: 'Descontos Especiais',
      description:
        'Quem faz parte da nossa comunidade não fica de fora dos principais eventos do mercado magistral. O Clube garante descontos especiais para investir na sua capacitação.',
      icon: 'icon-descontos-especiais.svg',
      accessItem: [
        'Congresso Consulfarma',
        'Empreenda Magistral',
        'Seminários',
        'Cursos Online',
        'Cursos Presenciais',
      ],
      color: '#FFE2D1',
    },
  ];

  function redirect(link: string) {
    window.location.replace(link);
  }

  const handleAccessClick = (index: number) => {
    setSelectedBenefitIndex(index === selectedBenefitIndex ? -1 : index);
    setShowBenefitAccess(!showBenefitAccess);
  };

  return (
    <>
      <BenefitSection>
        <BenefitTitleStyled>
          <h2>
            Todos os benefícios da melhor plataforma de assinatura do mercado
            magistral
          </h2>
        </BenefitTitleStyled>
        <Container>
          <Row>
            {benefits.map((benefit, index) => {
              const isSelected = index === selectedBenefitIndex;
              return (
                <BenefitCardsWrapper
                  className="col-lg-4 col-md-6 col-12"
                  key={index}
                >
                  <BenefitCard
                    color={benefit.color}
                    image={`${imagesPath}${benefit.icon}`}
                  >
                    <h3>{benefit.title}</h3>
                    <Button
                      color={'#0B344E'}
                      outlined="outlined"
                      onClick={() => handleAccessClick(index)}
                    >
                      Veja o que você acessa
                      <FontAwesomeIcon className="px-3" icon={faArrowRight} />
                    </Button>
                  </BenefitCard>
                  {isSelected && (
                    <BenefitCardSlide className="active" color={benefit.color}>
                      <p>{benefit.description}</p>
                      <BenefitAccessItems>
                        {benefit.accessItem.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </BenefitAccessItems>
                    </BenefitCardSlide>
                  )}
                </BenefitCardsWrapper>
              );
            })}
          </Row>
          <Button
            className="mt-4 mx-auto d-block"
            color="#FF41AD"
            outlined="none"
            onClick={() => {
              redirect(
                'https://www.integra.consulfarma.com/demo?campanha=novoconhecer',
              );
            }}
          >
            Veja todos os benefícios
            <FontAwesomeIcon className="px-3" icon={faArrowRight} />
          </Button>
        </Container>
      </BenefitSection>
    </>
  );
};

export default BenefitsSection;
