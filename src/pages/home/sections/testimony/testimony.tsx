import {
	TestimonyTitleStyled,
	TestimonySection,
	TestimoyVideoWrapper,
} from './testimony.styles';
import { Container, Row, Ratio } from 'react-bootstrap';
import TestimonyImage from '../../../../assets/images/home/testimony/colors-circle.svg';
import Button from '../../../../components/layout/components/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type TestimonialsSectionPropsT = {
	handleModalContact: () => void;
}

const TestimonialsSection:React.FC<TestimonialsSectionPropsT> = ({handleModalContact}) => {
	function redirect(link:string){
		window.location.replace(link);
	}
	
	return (
		<>
			<TestimonySection>
				<TestimonyTitleStyled>
					Depoimentos reais de quem ja faz parte
				</TestimonyTitleStyled>
				<Container>
					<Row className="d-flex flex-column">
						<TestimoyVideoWrapper className="col-lg-12">
							<img className="img-fluid" src={TestimonyImage} />
							<Ratio className="ratio-16x9">
								<iframe src="https://player.vimeo.com/video/710553114?h=70edf91a22&badge=0&autopause=0&player_id=0&app_id=58479" />
							</Ratio>
						</TestimoyVideoWrapper>
						<Button className="mx-auto d-block" color="#FF41AD" outlined="none" onClick={() => {
							redirect("https://www.integra.consulfarma.com/demo?campanha=novoconhecer");
							}}>
							Faça parte você também
							<FontAwesomeIcon icon={faArrowRight} />
						</Button>
					</Row>
				</Container>
			</TestimonySection>
		</>
		);
	};
	
	export default TestimonialsSection;
	