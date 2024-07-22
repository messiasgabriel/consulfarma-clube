import { Container, Row } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  PlansBox,
  PlansList,
  PlansListItens,
  PlansStyledSection,
  PlansTitleStyled,
  PlansWrapperBox,
} from './plan.styles';
import Button from '../../../../components/layout/components/button/button';
import React from 'react';
import useWindowDimensions from '../../../../core/hooks/useWindowDimensions';

type PlansSectionPropsT = {
  handleModalContact: () => void;
}

type PlansT = {
  type: string;
  color: string;
  itens: Array<string>;
};
SwiperCore.use([Navigation, Pagination]);

const PlansSection: React.FC<PlansSectionPropsT> = ({handleModalContact}) => {
  const plans: Array<PlansT> = [
    {
      type: 'Select',
      color: '#5ECC8A',
      itens: [
        '4 Materiais cientificos por mês',
        'Cada material possui:',
        'Vídeo express de treinamento científico',
        'Lista de fornecedores e modo de preparo das fórmulas mais elaboradas',
        'Material Científico versão digital',
        'Avaliação do propagandista',
        'O plano possui também:',
        'Gerenciador de Prescritores',
        'Gerenciador de Propagandista',
        'Gerenciador de Vendedor',
        'Treinamento EAD sobre Visitação',
        '1 Formulário por mês',
        'Cursos EAD de gestão, marketing e vendas (definidos pela Consulfarma)',
        'Canal Direto com 10 dúvidas por mês',
        'Farmacoflix',
        'Projetos Científicos com fórmulas exclusivas',
        "POP's Magistrais",
        'Cursos EAD científicos (definidos pela Consulfarma)',
        'Personal Mídias (20) e Mídias personalizadas (12)',
        '1 Vaga para participação do Seminário',
        '1 Vaga para participação do Empreenda',
        'Voucher de 1.800 reais em troca de cursos do Congresso',
        'Projeto Especialidades',
        'Criação de logotipo (com direito a 4 alterações gratuitas após briefing)',
        'Criação de website',
        'Banco de palestrantes',
        'Consultoria In Visit',
        'Consultoria Resultados',
        'Farma Prescritor',
      ],
    },
    {
      type: 'Prime',
      color: '#E67194',
      itens: [
        '8 Materiais científicos por mês',
        'Cada material possui:',
        'Vídeo express de treinamento científico',
        'Lista de fornecedores e modo de preparo das fórmulas mais elaboradas',
        'Material Científico versão digital',
        'Avaliação do propagandista',
        'O plano possui também:',
        'Gerenciador de Prescritores',
        'Gerenciador de Propagandista',
        'Gerenciador de Vendedor',
        'Treinamento EAD sobre Visitação',
        '1 Formulário por mês',
        'Cursos EAD de gestão, marketing e vendas (definidos pela Consulfarma)',
        'Canal Direto com 10 dúvidas por mês',
        'Farmacoflix',
        'Projetos Científicos com fórmulas exclusivas',
        "POP's Magistrais",
        'Cursos EAD científicos (definidos pela Consulfarma)',
        'Personal Mídias (20) e Mídias personalizadas (12)',
        '1 Vaga para participação do Seminário',
        '1 Vaga para participação do Empreenda',
        'Voucher de 1.800 reais em troca de cursos do Congresso',
        'Projeto Especialidades',
        'Criação de logotipo (com direito a 4 alterações gratuitas após briefing)',
        'Criação de website',
        'Banco de palestrantes',
        'Consultoria In Visit',
        'Consultoria Resultados',
        'Farma Prescritor',
      ],
    },
    {
      type: 'Premium',
      color: '#36C5F3',
      itens: [
        '12 Materiais científicos por mês',
        'Cada material possui:',
        'Vídeo express de treinamento científico',
        'Lista de fornecedores e modo de preparo das fórmulas mais elaboradas',
        'Material Científico versão digital',
        'Avaliação do propagandista',
        'O plano possui também:',
        'Gerenciador de Prescritores',
        'Gerenciador de Propagandista',
        'Gerenciador de Vendedor',
        'Treinamento EAD sobre Visitação',
        '1 Formulário por mês',
        'Cursos EAD de gestão, marketing e vendas (definidos pela Consulfarma)',
        'Canal Direto com 10 dúvidas por mês',
        'Farmacoflix',
        'Projetos Científicos com fórmulas exclusivas',
        "POP's Magistrais",
        'Cursos EAD científicos (definidos pela Consulfarma)',
        'Personal Mídias (20) e Mídias personalizadas (12)',
        '1 Vaga para participação do Seminário',
        '1 Vaga para participação do Empreenda',
        'Voucher de 1.800 reais em troca de cursos do Congresso',
        'Projeto Especialidades',
        'Criação de logotipo (com direito a 4 alterações gratuitas após briefing)',
        'Criação de website',
        'Banco de palestrantes',
        'Consultoria In Visit',
        'Consultoria Resultados',
        'Farma Prescritor',
      ],
    },
  ];
  const { width: viewWidth } = useWindowDimensions();
  return viewWidth <= 1200 ? (
    <PlansStyledSection>
      <PlansTitleStyled>
        <h2>Veja o plano ideal para sua farmácia</h2>
      </PlansTitleStyled>
      <Container>
        <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
          {plans.map((plan) => (
            <SwiperSlide>
              <PlansWrapperBox color={plan.color}>
                <PlansBox>
                  <PlansTitleStyled>
                    <h3>{plan.type}</h3>
                  </PlansTitleStyled>
                  <PlansList type={plan.type}>
                    {plan.itens.map((item, index) => (
                      <PlansListItens key={index}>{item}</PlansListItens>
                    ))}
                  </PlansList>
                  <Button 
                    className="d-block" 
                    color={'#FF41AD'} 
                    outlined="none"
                    onClick={handleModalContact}
                  >
                    Assinar plano
                    <FontAwesomeIcon className="px-3" icon={faArrowRight} />
                  </Button>
                </PlansBox>
              </PlansWrapperBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </PlansStyledSection>
  ) : (
    <PlansStyledSection>
      <PlansTitleStyled>
        <h2>Veja o plano ideal para sua farmácia</h2>
      </PlansTitleStyled>
      <Container>
        <Row className="d-flex d-lg-flex">
          {plans.map((plan) => {
            return (
              <PlansWrapperBox color={plan.color} className="col-lg-4">
                <PlansBox>
                  <PlansTitleStyled>
                    <h3>{plan.type}</h3>
                  </PlansTitleStyled>
                  <PlansList type={plan.type}>
                    {plan.itens.map((item, index) => (
                      <PlansListItens key={index}>{item}</PlansListItens>
                    ))}
                  </PlansList>
                  <Button 
                    className="d-block"
                    color={'#FF41AD'}
                    outlined="none"
                    onClick={handleModalContact}
                  >
                    Assinar plano
                    <FontAwesomeIcon className="px-3" icon={faArrowRight} />
                  </Button>
                </PlansBox>
              </PlansWrapperBox>
            );
          })}
        </Row>
      </Container>
    </PlansStyledSection>
  );
};

export default PlansSection;
