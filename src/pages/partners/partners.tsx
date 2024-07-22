import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Modal, Table } from 'react-bootstrap';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SafraPay from '../../assets/images/partners/safrapay-white 1.svg';
import SafraCalculator from '../../assets/images/partners/icon-card.svg';
import VisaIcon from '../../assets/images/partners/icon-visa.svg';
import MastercardIcon from '../../assets/images/partners/icon-mastercard.svg';
import Button from '../../components/layout/components/button/button';
import {
  BenefitsSection,
  DiscountPartners,
  DiscountSection,
  SafraBoxOne,
  SafraBoxStyled,
  SafraBoxThree,
  SafraBoxTwo,
  SmallTextStyled,
  TableWrapper,
  TitleStyled,
  DiscountPartnersCards,
  PartnersLogo,
  PartnersWrapper,
  PartnersDescription,
  DiscountBand,
  ModalStyled,
  ModalCloseButton,
  ModalBodyStyled,
} from './partners.styles';
import HeaderPage from '../../components/layout/components/headerPage/headerPage';
import { useState } from 'react';
import ContactModal from '../../components/layout/components/contactModal/contactModal';
import useWindowDimensions from '../../core/hooks/useWindowDimensions';

type PartnersT = {
  name: string;
  description: string;
  image: string;
  discount: string;
  site: string;
  about: string;
  modalInfo: string;
};

SwiperCore.use([Navigation, Pagination]);
const PartnersPage = () => {
  const { width: viewWidth } = useWindowDimensions();
  const [isModalContactOpen, setIsModalContactOpen] = useState(false);
  const imagesPath = './src/assets/images/partners/';
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(-1);
  const [showPartner, setShowPartner] = useState(false);
  const handlePartnerClick = (index: number) => {
    setSelectedPartnerIndex(index === selectedPartnerIndex ? -1 : index);
    setShowPartner(showPartner);
  };
  const partners: Array<PartnersT> = [
    {
      name: 'Salix Farma - Consultoria em Gestão da Qualidade',
      description: '20% nas consultorias',
      image: 'salixFarma.svg',
      discount: '20%',
      site: 'http://salixconsultoria.com/',
      about:
        'Contando com profissionais farmacêuticos atuantes há mais de 20 anos no Setor Magistral, a Salix Farma realiza AUDITORIAS, IMPLANTAÇÃO e REESTRUTURAÇÃO do Sistema para Gestão da Qualidade, TREINAMENTO de funcionários nos setores do ATENDIMENTO AO CLIENTE, CONTROLE DA QUALIDADE e na realização de AUTOINSPEÇÃO.',
      modalInfo: '20% nas consultorias',
    },
    {
      name: 'Editora Cia Farmacêutica',
      description: 'Descontos de 10% na compra dos livros',
      image: 'editoraCiaFarma.svg',
      discount: '10%',
      site: 'https://ciafarmaceutica.com.br/',
      about:
        'A recém-inaugurada Editora Cia Farmacêutica nasceu da paixão dos Farmacêuticos Daniel Antunes Junior e Valéria Maria de Souza Antunes pela profissão, que há 20 anos publicam livros, em específico para as áreas de Farmácia Magistral, Dermatologia, Cosméticos e Estética e, agora, Farmacologia. São 20 obras publicadas e mais de 40.000 exemplares vendidos por esses autores, que há cinco anos publicam de forma independente.',
      modalInfo: '10% nas consultorias',
    },
    {
      name: 'You and Us - Marketing',
      description: 'Desconto de 20% nos serviços e consultorias de marketing',
      image: 'youAndUs.svg',
      discount: '20%',
      site: 'https://youandus.com.br/',
      about:
        'Iniciamos nossas atividades em julho de 2007 na cidade de Campinas / SP, um dos grandes polos tecnológicos do Brasil. De lá para cá, voltamos nossos esforços pela democratização da comunicação independente do porte da empresa atendida. Acreditamos que o marketing digital pode proporcionar para qualquer negócio um trabalho pertinente, adequado e memorável, lembrando que a autoridade no setor é conquistada com muita criatividade, esforço e frequência voltado ao objetivo principal. Encurtar a distância entre pequenas e médias empresas de grandes players do mercado é o nosso objetivo e se o seu negócio se encaixa neste perfil, procure-nos, sem dúvida teremos o projeto ideal para suas pretensões.',
      modalInfo: 'Desconto de 20% nos serviços e consultorias de marketing',
    },
    {
      name: 'Conttags - Serviços Contábeis',
      description: 'Desconto de 20% sobre honorários',
      image: 'conttags.svg',
      discount: '20%',
      site: 'https://conttags.com.br/',
      about:
        'A o seu lado para os desafios da gestão empresarial a performance financeira de uma empresa não é mais assunto apenas de proprietários sócios ou diretores Atualmente investidores fornecedores clientes e mesmo outras áreas internas também estão diretamente interessadas na gestão empresarial e seus resultados. A Conttags Contabilidade oferece a seus clientes atendimento especializado e ferramentas operacionais modernas que representam um efetivo suporte para a tomada de decisão Somos o parceiro de trincheira para os desafios contábeis fiscais tributários da gestão de pessoas e até o fluxo de caixa.',
      modalInfo: '20% nas consultorias',
    },
    {
      name: 'Dínamo Seguros ',
      description:
        'Desconto de 25% na contratação de seguro empresarial e seguro de vida dos funcionários',
      image: 'dinamoSeguros.svg',
      discount: '25%',
      site: 'https://dinamoseguros.com.br/',
      about:
        'A Dínamo Seguros é uma corretora de seguros sediada na cidade de Campinas/SP, atende clientes de todo o território nacional, prestando serviços em seguros de todos os ramos, procurando sempre oferecer soluções de acordo com a necessidade de cada cliente, operando com as mais importantes e conceituadas companhias de seguro do mercado. A corretora nasceu da combinação entre a sólida e duradoura amizade de seus sócios e a paixão por atendimento, relacionamento e planejamento estratégico que ambos compartilham. Edson Hypólito e Thiago Coelho são profissionais com diferentes trajetórias, mas com a mesma visão de futuro, alinhando experiência no ramo de seguros com empreendedorismo, buscando estar sempre à frente de seu tempo.',
      modalInfo:
        'Desconto de 25% na contração de seguro empresarial e seguro de vida dos funcionários',
    },
    {
      name: 'DHoffmann - Consultoria',
      description:
        'Desconto de 20% para consultorias financeiras, estratégicas, mercadológicas e pesquisas.',
      image: 'dHoffmann.svg',
      discount: '20%',
      site: 'https://www.dhoffmann.com.br/',
      about:
        'Nosso objetivo é suportar e tornar o crescimento das empresas onde atuamos significativamente superiores, com foco em ações de alto impacto. Colocamos a disposição do cliente toda a bagagem e experiência do atendimento multisetorial. Nossos clientes contam com uma equipe de atendimento que consiste em Especialistas Seniores, para tratativas de demandas do negócio; Equipe de Desenvolvimento para criação e elaboração de relatórios, indicadores e ferramenta de BI, além de acompanhamento para medições e avaliações dos serviços e entregas (pós-vendas).',
      modalInfo:
        'Desconto de 20% para consultorias financeiras, estratégica, mercadológica e pesquisas.',
    },
    {
      name: 'Ônix Farmacêutica - Consultoria Farmacêutica Veterinária',
      description: '20% nas consultorias',
      image: 'onixFarma.svg',
      discount: '20%',
      site: 'https://onixfarmaceutica.com.br/',
      about:
        'Sobre a empresa: A Ônix Farmacêutica é uma empresa de consultoria especializada na área farmacêutico-veterinária, cujo objetivo é oferecer soluções integradas em gestão da qualidade, legislação, regulamentação de documentos e implantação para farmácias de manipulação veterinária.',
      modalInfo:
        'Desconto de 20% para consultorias financeiras, estratégica, mercadológica e pesquisas.',
    },
    {
      name: 'Scott Lab - Tercerização e Consultoria Farmacêutica',
      description: '20% nas consultorias',
      image: 'ScottLab.svg',
      discount: '20%',
      site: 'http://www.scottlima.com.br//',
      about:
        'A empresa Scott&Lima está localizada na cidade de Franca, interior de São Paulo, desde 2018. Nossa equipe é formada por farmacêuticos especializados em diversas áreas, atuando no mercado desde 2007. A Consultoria Farmacêutica oferecida pela Scott&Lima e seus parceiros desenvolve produtos que atuam diretamente na vida das pessoas. Acreditamos na excelência e eficácia dos produtos, e, com isso, diversas atividades são desenvolvidas e aprimoradas no intuito de garantir mais qualidade de vida e bem-estar para os consumidores. Com isso, contribuindo para que a sociedade encontre produtos diferenciados no mercado e possam desfrutar das melhores alternativas para uma vida saudável, duradoura e feliz. Essa é nossa missão como profissionais da saúde. Nosso objetivo é desenvolver, aplicar tecnologias, utilizar novos ativos funcionais, garantir uma excelência em qualidade e processos de produção, e, consequentemente transmitir toda essa qualidade para o consumidor final.',
      modalInfo: '20% nas consultorias',
    },
  ];
  return (
    <>
      <ContactModal
        isOpen={isModalContactOpen}
        handleShow={() => {
          setIsModalContactOpen(true);
        }}
        handleClose={() => {
          setIsModalContactOpen(false);
        }}
      />

      <ModalStyled show={show} onHide={handleClose}>
        <Modal.Header className="justify-content-end">
          <ModalCloseButton
            color="#A9A9A9"
            onClick={handleClose}
            outlined="outlined"
            customStyles={{
              background: `transparent`,
            }}
          >
            <img id="close-icon" src={`${imagesPath}close-icon.svg`} />
          </ModalCloseButton>
        </Modal.Header>
        <Modal.Body>
          {partners.map((partner, index) => {
            const isSelected = index === selectedPartnerIndex;
            const url = partner.site;
            const urlSemHttp = url.replace(/^https?:\/\//, '');
            return (
              isSelected && (
                <ModalBodyStyled className="d-flex flex-column" key={index}>
                  <img
                    className="img-fluid"
                    src={`${imagesPath}${partner.image}`}
                  />
                  <h2>{partner.discount} de desconto</h2>
                  <h3>{partner.name}</h3>
                  <small className="d-block">{partner.modalInfo}</small>
                  <a href={url}>{urlSemHttp}</a>
                  <p>{partner.about}</p>
                </ModalBodyStyled>
              )
            );
          })}
        </Modal.Body>
      </ModalStyled>

      <Container>
        <HeaderPage
          title="Parceiros"
          text="Tenha descontos especiais com nossos parceiros"
          textToStyle="descontos especiais"
          style={{ color: '#FF41AD' }}
        />
        <BenefitsSection className="d-flex flex-column">
          <TitleStyled>Beneficios em parcerio com o Banco Safra</TitleStyled>
          <SafraBoxStyled className="d-flex">
            <SafraBoxOne>
              <p>
                O Safra e a Consulfarma estabeleceram uma parceria com muitas
                vantagens para o seu negócio
              </p>
              <img src={SafraPay} alt="SafraPay" />
            </SafraBoxOne>
            <SafraBoxTwo>
              <TableWrapper className="d-flex flex-column">
                <p className="text-center">TAXA PARA CLIENTES COM DOMICÍLIO</p>
                <Table>
                  <thead>
                    <tr>
                      <th scope="col">À partir de:</th>
                      <th scope="col">Crédito à vista</th>
                      <th scope="col">Débito</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src={VisaIcon} alt="Visa Icon" />
                      </td>
                      <td>1,58%</td>
                      <td>0,84%</td>
                    </tr>
                    <tr>
                      <td>
                        <img src={MastercardIcon} alt="Mastercard Icon" />
                      </td>
                      <td>1,58%</td>
                      <td>0,84%</td>
                    </tr>
                  </tbody>
                </Table>
              </TableWrapper>
            </SafraBoxTwo>
            <SafraBoxThree className="d-flex">
              <img src={SafraCalculator} alt="" />
              <span>INSENÇÃO DE ALUGUEL DE MÁQUINA DE CARTÃO*</span>
            </SafraBoxThree>
          </SafraBoxStyled>
          <SmallTextStyled>
            Oferta personalizada para a Consulfarma. Caso sejam alteradas as
            condições de contratação, o Safra reserva-se o direito de rever as
            taxas apresentadas. As condições podem sofrer alterações a qualquer
            momento sem aviso prévio. As linhas de crédito estão sujeitas à
            avaliação de risco.100% das bandeiras domiciliadas no Safra (Visa,
            Master, Amex, Elo e Hiper). As taxas de antecipação estão sujeitas à
            alteração conforme variação de mercado e políticas internas do
            Safra. Sujeito à análise e aprovação de crédito.
          </SmallTextStyled>
        </BenefitsSection>
        <DiscountSection>
          {viewWidth >= 992 ? (
            <>
              <TitleStyled>Descontos em empresa parceiras</TitleStyled>
              <DiscountPartners className="row d-flex flex-wrap">
                {partners.map((partner, index) => {
                  return (
                    <DiscountPartnersCards
                      key={index}
                      className="col-md-4 d-flex flex-column"
                    >
                      <PartnersWrapper className="d-flex flex-column">
                        <DiscountBand className="d-flex justify-content-center aligns-items-center">
                          <h3>{partner.discount} de desconto</h3>
                        </DiscountBand>
                        <PartnersLogo>
                          <img
                            className="img-fluid"
                            src={`${imagesPath}${partner.image}`}
                            alt=""
                          />
                        </PartnersLogo>

                        <PartnersDescription className="d-flex flex-column justify-content-between">
                          <h3>{partner.name}</h3>
                          <p>{partner.description}</p>
                          <Button
                            className="align-self-start"
                            color="#0B344E"
                            outlined="outlined"
                            onClick={() => {
                              handlePartnerClick(index);
                              handleShow();
                            }}
                          >
                            Veja Mais
                          </Button>
                        </PartnersDescription>
                      </PartnersWrapper>
                    </DiscountPartnersCards>
                  );
                })}
              </DiscountPartners>
              <Button
                className="d-block mx-auto"
                color="#FF41AD"
                outlined="none"
                onClick={() => setIsModalContactOpen(true)}
              >
                Quero todos esses benefícios
                <FontAwesomeIcon className="px-3" icon={faArrowRight} />
              </Button>
            </>
          ) : (
            <Swiper
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              spaceBetween={30}
              className="mySwiper"
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <DiscountPartnersCards className="d-flex flex-column">
                    <PartnersWrapper className="d-flex flex-column">
                      <DiscountBand className="d-flex justify-content-center aligns-items-center mt-3">
                        <h3>{partner.discount} de desconto</h3>
                      </DiscountBand>
                      <PartnersLogo>
                        <img
                          className="img-fluid"
                          src={`${imagesPath}${partner.image}`}
                          alt=""
                        />
                      </PartnersLogo>

                      <PartnersDescription className="d-flex flex-column justify-content-between">
                        <h3>{partner.name}</h3>
                        <p>{partner.description}</p>
                        <Button
                          className="align-self-start"
                          color="#0B344E"
                          outlined="outlined"
                          onClick={() => {
                            handlePartnerClick(index);
                            handleShow();
                          }}
                        >
                          Veja Mais
                        </Button>
                      </PartnersDescription>
                    </PartnersWrapper>
                  </DiscountPartnersCards>
                </SwiperSlide>
              ))}
              <Button
                className="d-block mx-auto mt-5"
                color="#FF41AD"
                outlined="none"
                onClick={() => setIsModalContactOpen(true)}
              >
                Quero todos esses benefícios
                <FontAwesomeIcon className="px-3" icon={faArrowRight} />
              </Button>
            </Swiper>
          )}
        </DiscountSection>
      </Container>
    </>
  );
};

export default PartnersPage;
