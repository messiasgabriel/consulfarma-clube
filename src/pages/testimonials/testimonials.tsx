import HeaderPage from "../../components/layout/components/headerPage/headerPage";
import { TestimonialItemStyled, TestimonialsContainerStyled, RepresentativePersonStyled, HeaderTestimonialStyled } from "./testimonials.styles";
import Quotes from '/src/assets/images/quotes.png';
import { useState } from 'react';
import ContactModal from '../../components/layout/components/contactModal/contactModal';
import Button from "../../components/layout/components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type TestimonialT = {
	representativePerson: string;
	customer: string;
	testimonial: string;
	image?: string;
}

const TestimonialsPage = () => {
	const testimonials:Array<TestimonialT> = [
		{
			representativePerson:"Lara",
			customer:"Verde Folha",
			testimonial:"Somos clientes da Consulfarma há muitos anos e utilizamos a revista In Doctors para fazer a Visitação Médica. O resultado é muito legal, os médicos gostam muito, prescrevem os ativos, recebemos muitas novidades e até ativos antigos que aparecem em uma nova utilização. É muito interessante, os médicos ficam muito satisfeitos, porque ela é toda embasada em artigos científicos."
		},
		{
			representativePerson:"Eunice",
			customer:"Farma Vida",
			testimonial:"Implantamos aqui na FarmaVida o Integra, uma plataforma interativa entre a farmácia e o prescritor, onde ele tem acesso pelo seu tablet ou celular, aos artigos científicos e sugestões que auxiliam nas suas prescrições. Mais facilidade e capacitação ao prescritor."
		},
		{
			representativePerson:"Frederico",
			customer:"Pharman",
			testimonial:"No ano de 2018 crescemos 30% em janeiro, 20% em fevereiro e mais de 50% em março. Esse aumento aconteceu principalmente pelas visitas, aliadas a outras ações que estamos implantando. De qualquer forma, a visitação médica é o que nos trará crescimento sustentável. Temos utilizado muito o canal técnico para esclarecer dúvidas sobre novas formulações de indicação no balcão e estamos bem satisfeitos com os serviços oferecidos no pacote da Consulfarma."
		}
	];
	const [isModalContactOpen, setIsModalContactOpen] = useState(false);

  return(
    <>
	    <ContactModal isOpen={isModalContactOpen} handleShow={()=>{setIsModalContactOpen(true)}} handleClose={()=>{setIsModalContactOpen(false)}} />

      	<HeaderPage 
			title="Depoimentos"
			text="Veja depoimentos reais de quem já faz parte do Clube"
			textToStyle="depoimentos reais"
			style={{
				color: '#FF41AD'
			}}
		/>

		<TestimonialsContainerStyled className="d-flex flex-wrap align-items-start justify-content-center">

			{
				testimonials.map(testimonial => {
					return(
						<TestimonialItemStyled className="d-flex flex-column" id={`${testimonial.customer} - ${testimonial.representativePerson}` }>
							<HeaderTestimonialStyled className="d-flex align-items-center justify-content-between">
								<div>
									<img className='img-fluid' src={Quotes} />
								</div>
								<img className='img-fluid' src={Quotes} />
							</HeaderTestimonialStyled>

							<p>"{testimonial.testimonial}"</p>

							<RepresentativePersonStyled className="d-flex flex-column">
								<h4>{testimonial.representativePerson}</h4>
								<p>{testimonial.customer}</p>
							</RepresentativePersonStyled>
						</TestimonialItemStyled>
					)
					
				})
			}
			<Button className="d-block mt-3" color="#FF41AD" outlined="none" onClick={() => setIsModalContactOpen(true)}>
				Faça parte você também
				<FontAwesomeIcon className="px-3" icon={faArrowRight} />
          </Button>
		</TestimonialsContainerStyled>
    </>

  )
};

export default TestimonialsPage;
