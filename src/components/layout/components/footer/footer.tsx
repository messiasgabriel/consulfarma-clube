import React, { useState } from 'react'
import { StyledFooter, ContentStyled, LgpdStyled, LogoStyled, RowStyled } from './footer.styles'
import Button from '../button/button';
import logoClube from "/src/assets/images/footer/logo-clube-consulfarma.png";
import logoConsul from "/src/assets/images/footer/logo-consul.png";
import ContactModal from '../contactModal/contactModal';

const Footer = () => {
  const [isModalContactOpen, setIsModalContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isModalContactOpen} handleShow={()=>{setIsModalContactOpen(true)}} handleClose={()=>{setIsModalContactOpen(false)}} />
      <StyledFooter>
        <ContentStyled className='d-flex flex-column justify-content-around'>
          <RowStyled className='d-flex flex-wrap justify-content-between'>
            <LogoStyled className='col-md-6 col-12 d-flex'>
              <img className='img-fluid' src={logoClube} />
              <img className='img-fluid' src={logoConsul} />
            </LogoStyled>
            <Button color="#212529"  outlined='outlined' onClick={() => setIsModalContactOpen(true)}>Fale conosco</Button>
          </RowStyled>
        </ContentStyled>
        <LgpdStyled>
          <p>A Consulfarma solicita sua coleta de dados para identificação do usuário com a finalidade de entrarmos em contato para fornecermos mais detalhes do tema desejado, com base-legal por legítimo interesse conforme a nova lei LGPD. Estes dados não serão utilizados para envio de SPAM.</p>
        </LgpdStyled>
      </StyledFooter>
    </>
  )
}
export default Footer