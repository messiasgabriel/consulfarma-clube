import { Container, Modal } from "react-bootstrap";
import HeaderPage from "../../components/layout/components/headerPage/headerPage";
import { CallToActionStyled } from "./recommendation.styles";
import useWindowDimensions from "../../core/hooks/useWindowDimensions";
import Button from "../../components/layout/components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ContactModal from "../../components/layout/components/contactModal/contactModal";

const RecommendationPage = () => {
    const [isModalContactOpen, setIsModalContactOpen] = useState(false);
    const recommendationImagesPath = "src/assets/images/recommendation";
    const {width: viewWidth} = useWindowDimensions();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const regulation:Array<string> = [
        "1. O indicador é o cliente que indica um novo cliente para assinar um dos planos da assessoria.",
        "2. O indicador será contemplado com um cashback no valor do plano contratado pelo indicado. Sendo: Essencial, Select, Prime, Prime VET, Premium, Premium Plus, In Visit, Consulfarma Resultados ou Farma Prescritor.",
        "3. O cashback será creditado no cadastro do indicador, dentro do sistema interno da Consulfarma após a confirmação do pagamento do plano contratado pelo indicado.",
        "4. O valor do cashback será calculado com base no valor do plano contratado pelo indicado. Caso ocorra eventuais descontos ou promoções, o indicador será contemplado com o valor de cashback após o indicado ter feito seu primeiro pagamento integral à contratada.",
        "5. O cashback deverá ser utilizado pelo indicador como crédito em serviços oferecidos pelo Clube Consulfarma, como mensalidades futuras, consultorias especializadas treinamentos ou outros serviços adicionais.",
        "6. O cashback não poderá ser convertido em dinheiro ou transferido para outra pessoa ou empresa.",
        "7. A campanha de indicação poderá ser encerrada ou modificada a qualquer momento pelo Clube Consulfarma, mediante aviso prévio aos participantes.",
        "8. Em caso de inadimplência por parte do indicado, o indicador não será contemplado com o valor de cashback.",
        "9. A participação na campanha de indicação é opcional e está sujeita à aceitação dos termos e condições estabelecidos neste regulamento.",
        "10. A validade do cashback do indicador será de 12 meses, após ser contemplado.",
        "11. A campanha de indicação tem validade do dia 17/04/2023 até"
    ];

    return (
        <>
            <ContactModal isOpen={isModalContactOpen} handleShow={()=>{setIsModalContactOpen(true)}} handleClose={()=>{setIsModalContactOpen(false)}} />

            <Modal show={show} onHide={handleClose} id="regulamento">
                <Modal.Header className="d-flex justify-content-center">
                    <h5><strong>indicou, associou e ganhou.</strong></h5>
                </Modal.Header>

                <Modal.Body>
                    <strong className="title-regulation">Regulamento</strong>
                    <p>A campanha de indicação é válida para CPF e CNPJ, sendo associado do Clube Consulfarma ou não.</p>
                    {
                        regulation.map(rule=>{
                            return <p>{rule}</p>
                        })
                    }
                    <p>29/12/2023. Indicações anteriores a data de início e posteriores a data de término não são válidas.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button color="#A9A9A9" onClick={handleClose} outlined="outlined" customStyles={{
                        width:"100%"
                    }}>Fechar</Button>
                </Modal.Footer>
            </Modal>

            <Container className="d-flex justify-content-center flex-column">
                <HeaderPage title="Indicação" textToStyle="R$2.400,00"  text="Ganhe até R$2.400,00 em Cashback para gastar!"
                style={{
                    color:"var(--pink-500)"
                }}/>

                <img 
                    className="img-fluid"
                    src={`${recommendationImagesPath}/banner-indicacao-${viewWidth< 1000?"mobile":"desktop"}.svg`} 
                />

                <CallToActionStyled className="d-flex justify-content-center">
                    <div className="col-lg-4 d-flex justify-content-center flex-column">
                        <h2>indicou, associou e ganhou.</h2>
                        <h1>Indique farmácias e ganhe cashback para gastar em produtos Consulfarma</h1>
                        <a href="#regulamento" onClick={handleShow} className="mb-3 mb-lg-0">Veja o regulamento aqui</a>
                    </div>
                    <div className="col-lg-4">
                        <p>
                            Indique uma farmácia para se associar ao Clube Consulfarma, após a associação,
                            você receberá cashback de acordo com o plano contratado e poderá usá-lo para
                            comprar produtos Consulfarma ou desconto em sua mensalidade.
                        </p>
                        <Button color="#FF40AD" onClick={() => setIsModalContactOpen(true)}>Participe agora <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> </Button>
                    </div>
                </CallToActionStyled>
            </Container>
        </>
    )
}

export default RecommendationPage;