import { Container, Row } from 'react-bootstrap';
import {
  IconDiscountStyled,
  InfosStyled,
  SuppliersBarIcons,
  SuppliersHomeSection,
  SuppliersLogoBox,
  SuppliersStyled,
  SuppliersTextStyled,
} from './suppliers.styles';

type SuppliersSectionPropsT = {
  handleModalContact: () => void;
}

type SuppliersT = {
  image: string;
};


const SuppliersSection:React.FC<SuppliersSectionPropsT> = ({handleModalContact}) => {
  const imagesPath = 'src/assets/images/home/suppliers/';
  const discountIcon = 'discount.svg';
  const shineIcon = 'shine.svg';
  const suppliers: Array<SuppliersT> = [
    {
      image: 'apus.svg',
    },
    {
      image: 'emfal.svg',
    },
    {
      image: 'fagron.svg',
    },
    {
      image: 'ideal.svg',
    },
  ];
  
  return (
    <>
      <SuppliersHomeSection>
        <Container>
          <Row>
            <SuppliersStyled className="d-flex flex-wrap col-lg-12">
              <InfosStyled className="col-lg-6 d-flex flex-column justify-content-lg-center align-items-center">
                <SuppliersTextStyled>
                  <p>Fornecedores</p>
                  <h3>
                    <span>Condições especiais</span> com grandes fornecedores do
                    mercado magistral
                  </h3>
                  O Associado pode ganhar descontos, frete grátis, brindes e
                  muito mais
                </SuppliersTextStyled>
              </InfosStyled>
              <SuppliersLogoBox className="d-flex justify-content-center flex-wrap col-lg-6">
                <SuppliersBarIcons>
                  <img id="icon-1" src={`${imagesPath}${shineIcon}`}  className='img-fluid'/>
                  <img id="icon-2" src={`${imagesPath}${shineIcon}`}  className='img-fluid'/>
                  <img id="icon-3" src={`${imagesPath}${shineIcon}`}  className='img-fluid'/>
                  <IconDiscountStyled src={`${imagesPath}${discountIcon}`} />
                </SuppliersBarIcons>
                {suppliers.map((supplier, index) => {
                  return (
                    <div className="d-flex flex-wrap ">
                      <img
                        key={index}
                        className="img-fluid"
                        src={`${imagesPath}${supplier.image}`}
                      />
                    </div>
                  );
                })}
              </SuppliersLogoBox>
            </SuppliersStyled>
          </Row>
        </Container>
      </SuppliersHomeSection>
    </>
  );
};

export default SuppliersSection;
