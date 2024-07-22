import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/layout/components/button/button";
import { 
  BenefitsPageStyled,
  BenefitStyled,
  ContainerButtonStyled,
  InfosStyled,
  CardStyled,
  WrapperButtonStyled,
  ContainerStyled
 } from "./benefits.styles";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import HeaderPage from "../../components/layout/components/headerPage/headerPage";
import ContactModal from "../../components/layout/components/contactModal/contactModal";
import { useState } from "react";

type BenefitT = {
  type:string;
  name: string;
  description:string;
  image: string;
};
type CardBenefitT = {
  name: string;
  description:string;
  icon: string;
};

const BenefitsPage = () => {
  const [isModalContactOpen, setIsModalContactOpen] = useState(false);
  
  const imagesPath = "src/assets/images/benefits/";
  const benefits: Array<BenefitT> = [
    {
      type: "Canal Direto",
      name:"Tenha um canal exclusivo para esclarecer dúvidas técnicas",
      description:"Você tem dúvidas de farmacotécnica? Tenha um canal exclusivo com o nosso time técnico para esclarecimentos de dúvidas, que pode te atender tanto via WhatsApp como através da nossa plataforma.",
      image:"canal-direto.jpg"
    },
    {
      type: "Projetos Científicos",
      name:"Baixe fórmulas inovadoras todos os meses",
      description:"Sem sofrer com a concorrência desleal, sua farmácia pode ser única através dos projetos científicos do Clube, com formulações inéditas e repletas de inovação.",
      image:"projetos-cientificos.jpg"
    },
    {
      type: "Farmacoflix",
      name:"Assista vídeos incríveis sobre farmacoténica e diversos temas",
      description:"Esse é o seu serviço de streaming magistral. Um canal de vídeo-aulas com dicas de farmacotécnica e resolução de dúvidas mais frequentes para o seu laboratório, além de treinamentos em marketing, gestão e vendas! Somente para quem faz parte do Clube.",
      image:"farmacoflix.jpg"
    },
    {
      type: "Materiais Científicos",
      name:"Acesse atualizações para suas visitas",
      description:"Uma visita que traz retorno. É isso que um material científico atualizado e inovador pode trazer. Materiais técnico-científicos para levar ao prescritor e auxiliar nas prescrições!",
      image:"materiais-cientificos.jpg"
    },
    {
      type: "Projeto Especialidades",
      name:"Veja formulações e conteúdos sobre diferentes Especialidades",
      description:"Lâminas técnicas com formulações especializadas em determinadas doenças, com vídeo-tutorial de como manipular essas prescrições, aula de tratamento farmacológico e não-farmacológico, conteúdos sobre visitação médica, marketing e comunicação. Tudo para a sua farmácia se tornar especialista no assunto!",
      image:"especialidades.jpg"
    },
    {
      type: "Mídias Digitais",
      name:"Publique diversos posts e stories em suas redes sociais",
      description:"Escolha os seus posts e stories preferidos, e publique na hora em suas redes sociais! São + de 1000 conteúdos voltados para o mercado magistral.",
      image:"midias-digitais.jpg"
    },
  ];
  const cards: Array<CardBenefitT> = [
    {
      name:"Formulários com até 390 sugestões de fórmulas",
      description: "Tenha seu estoque de fórmulas magistrais exclusivas, presenteie prescritores ou treine seus farmacêuticos. ",
      icon: "formulas.svg"
    },
    {
      name:"Cursos online para treinamento!",
      description: "Os melhores cursos para capacitação da sua equipe nas áreas de veterinária, cosmetologia, nutrição, farmácia magistral ou gestão e vendas!",
      icon: "cursos.svg"
    },
    {
      name: "Treinamentos em Visitação",
      description: "Aulas e e-books para ajudar sua farmácia e aumentar seus resultados com as visitas.",
      icon: "visitacao.svg"
    },
    {
      name: "Sistema de gestão dos médicos e propagandistas",
      description: "A ferramenta que ajuda o gestor a administrar o trabalho dos visitadores. Cadastre seus médicos, datas especiais e muito mais.",
      icon: "formulas.svg"
    },
    {
      name: "Escola de Gestores Magistrais",
      description: "Encontros ao vivo que ajudam gestores de farmácia a planejarem seu crescimento saudável, alavancando os resultados da sua farmácia.",
      icon: "gestao.svg"
    },
    {
      name: "Buscador de insumos automático",
      description: "Verifique a disponibilidade de produtos em apenas um clique! Envolve ativos, insumos, embalagens e disponibilidade de estoque.",
      icon: "buscador.svg"
    },
    {
      name: "Consultoria Consulfarma Resultados",
      description: "Consultoria que trabalha com o aumento da performance das farmácias, desde a fase de diagnóstico, até potencialização de vendas.",
      icon: "resultados.svg"
    },
    {
      name: "Kits de Visitação Médica Online",
      description: "Mantenha o relacionamento com os prescritores à distância e reinvente sua visitação médica! Materiais científicos em vídeo, todo kit de visita adaptadas ao digital.",
      icon: "kit-visitacao.svg"
    }
  ];


  return (
    <>
      <ContactModal isOpen={isModalContactOpen} handleShow={()=>{setIsModalContactOpen(true)}} handleClose={()=>{setIsModalContactOpen(false)}} />

      <BenefitsPageStyled>
          <HeaderPage text="Veja o que você tem acesso fazendo parte do Clube Consulfarma" textToStyle="Clube Consulfarma" title="Benefícios" 
          style={{
            color: "#FF41AD"
          }}/>

          {
            benefits.map((benefit, index)=>{
              return(
                <BenefitStyled key={index} className={`row ${index%2== 0 ? "": "d-flex flex-row-reverse"}`}>
                  <InfosStyled className="col-lg-6 d-flex flex-column justify-content-lg-center align-items-center">
                      <p className="type-material">{benefit.type}</p>
                      <h3>{benefit.name}</h3>
                      <p>{benefit.description}</p>
                      <ContainerButtonStyled>
                        <Button className="button-benefits d-flex align-items-center" outlined="outlined" color="#ff41ad" onClick={() => setIsModalContactOpen(true)}>
                          Saiba mais 
                          <FontAwesomeIcon icon={faArrowRight} className="ms-2"/>
                        </Button>
                      </ContainerButtonStyled>
                  </InfosStyled>
                  <div className="imagem col-lg-6">
                    <img className="img-fluid" src={`${imagesPath}${benefit.image}`} />
                  </div>
                </BenefitStyled>
              );
            })
          }
          <ContainerStyled className="mt-3">
            <h2>Além de tudo você ainda tem acesso:</h2>
            
            <div className="d-md-flex d-none flex-wrap justify-content-center justify-content-md-start">
              {cards.map((card,index)=>{
                return(
                  <CardStyled key={index} className="d-flex flex-column justify-content-center">
                      <img src={`${imagesPath}icon-${card.icon}`} className="img-fluid" />
                      <h3>{card.name}</h3>
                      <p>{card.description}</p>
                  </CardStyled>
                );
              })}
            </div>

            <WrapperButtonStyled className="d-flex justify-content-center align-items-center">
              <Button color="#FF41AD" onClick={() => setIsModalContactOpen(true)}>
                Quero todos esses benefícios
                <FontAwesomeIcon icon={faArrowRight} className="ms-2"/>
              </Button>
            </WrapperButtonStyled>
          </ContainerStyled>
      </BenefitsPageStyled>
    </>
  );
};

export default BenefitsPage;