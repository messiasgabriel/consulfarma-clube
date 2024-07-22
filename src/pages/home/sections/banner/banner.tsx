import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { Container, Row } from "react-bootstrap";
import { BannerSectionStyled, FloatingIconStyled, NumberItemStyled, NumbersStyled, WrapperImageStyled } from "./banner.styles";
import Button from "../../../../components/layout/components/button/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import useWindowDimensions from "../../../../core/hooks/useWindowDimensions";


type BannerSectionPropsT = {
  handleModalContact: () => void;
}

type NumbersT = {
  value: number;
  label: string;
}

const BannerSection:React.FC<BannerSectionPropsT> = ({handleModalContact}) => {
  const imagesPath = "src/assets/images/home";
  const bandNumbersData : Array<NumbersT> = [
    {
      value: 200,
      label: "Horas de cursos"
    },
    {
      value: 3000,
      label: "Posts para redes sociais"
    },
    {
      value: 4000,
      label: "Materiais científicos liberados até hoje"
    },
    {
      value: 5000,
      label: "Farmácias já se beneficiaramcom o Clube Consulfarma"
    },
  ];
  const {width:viewWidth} = useWindowDimensions();

  return (
    <>
      <BannerSectionStyled>

        <div className="conteudo d-flex align-items-center">
          <Container>
            <Row>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="wrapper-text">
                  <h1>Aumente seu faturamento com o Clube Consulfarma</h1>
                  <p>
                      Unindo os principais pilares de uma farmácia magistral,
                      nosso plano de benefícios contempla suporte para todas as áreas do seu negócio!
                  </p>
                  <Button color="#ff41ad" customStyles={viewWidth < 1000 ? {
                      width: "100%"
                    }:{}}  onClick={()=>{handleModalContact()}}>
                    Assine agora
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2"/>
                  </Button> 
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-end justify-content-center">
                <WrapperImageStyled className="d-flex align-items-end">
                  <FloatingIconStyled className="top-l">
                      <img className="icon img-fluid" src={`${imagesPath}/Materiais científicos.png`} />
                      <label>
                          Materiais científicos
                      </label>
                  </FloatingIconStyled>

                  <FloatingIconStyled className="top-r">
                      <img className="icon img-fluid " src={`${imagesPath}/Cursos online.png`} />
                      <label>
                          Cursos online
                      </label>
                  </FloatingIconStyled>

                  <FloatingIconStyled className="mid-l">
                      <img className="icon img-fluid " src={`${imagesPath}/Formulações.png`} />
                      <label>
                          Formulações
                      </label>
                  </FloatingIconStyled>

                  <FloatingIconStyled className=" mid-r">
                      <img className="icon img-fluid" src={`${imagesPath}/Materiais de Marketing.png`} />
                      <label>
                          Materiais de Marketing
                      </label>
                  </FloatingIconStyled>
                  <FloatingIconStyled className="bottom">
                      <img className="icon img-fluid " src={`${imagesPath}/Suporte técnico.png`} />
                      <label>
                          Suporte técnico
                      </label>
                  </FloatingIconStyled>

                  <picture>
                      <img src={`${imagesPath}/img-lucas-neto.png`} className="founders img-fluid" />
                  </picture>
                </WrapperImageStyled>
              </div>
            </Row>
          </Container>
        </div>


      </BannerSectionStyled>

      <NumbersStyled>
        <Container>
          <div className="d-none d-md-flex align-items-start justify-content-around">
              {
                bandNumbersData.map((data, index)=>{
                  return(
                    <NumberItemStyled key={index} className="item d-flex flex-column">
                      <h2>+{data.value}</h2>
                      <p>{data.label}</p>
                    </NumberItemStyled>
                  )
                })
              }
          </div>

          {/* faixa de números mobile */}
          <div className="d-block d-md-none align-items-center justify-content-around">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >

              {
                bandNumbersData.map((data, index)=>{
                  return(
                    <SwiperSlide>
                      <NumberItemStyled key={index} className="item d-flex flex-column">
                        <h2>+{data.value}</h2>
                        <p>{data.label}</p>
                      </NumberItemStyled>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>

              
          </div>
        </Container>
      </NumbersStyled>
    </>
  );
};

export default BannerSection;
