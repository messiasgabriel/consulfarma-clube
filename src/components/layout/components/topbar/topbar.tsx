import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { NavBarStyled, NavStyled, NavLinkStyled } from "./topbar.styles";
import { FormattedMessage } from "react-intl";
import { ERoutes } from "../../../../core/enums/routes";
import Button from "../button/button";

const TopBarComponent = () => {

  const currentRoute = useLocation().pathname;
  const isHome = currentRoute=="/"? true: false;

  function redirect(link:string){
	window.location.replace(link);
  }

  return (
    <NavBarStyled isHome={isHome} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={ERoutes.HOME}>
          <img src="/src/assets/images/logo-clube.svg" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavStyled className="me-auto d-flex flex-row align-items-center justify-content-between">
			<div className="d-flex flex-column flex-lg-row">
				<NavLinkStyled as={Link} to={ERoutes.ABOUT_US}>
				<FormattedMessage
					id="topbar_about_us_link"
					defaultMessage="Conheça a Plataforma"
				/>
				</NavLinkStyled>
				<NavLinkStyled as={Link} to={ERoutes.BENEFITS}>
				<FormattedMessage
					id="topbar_benefits_link"
					defaultMessage="Benefícios"
				/>
				</NavLinkStyled>
				<NavLinkStyled as={Link} to={ERoutes.PARTNERS}>
				<FormattedMessage
					id="topbar_partners_link"
					defaultMessage="Parceiros"
				/>
				</NavLinkStyled>
				<NavLinkStyled as={Link} to={ERoutes.TESTIMONIALS}>
				<FormattedMessage
					id="topbar_testimonials_link"
					defaultMessage="Depoimentos"
				/>
				</NavLinkStyled>
				<NavLinkStyled as={Link} to={ERoutes.RECOMMENDATION}>
				<FormattedMessage
					id="topbar_recommendation_link"
					defaultMessage="Indicação"
				/>
				</NavLinkStyled>
			</div>

			<div className="d-flex flex-column flex-lg-row">
				<Button outlined="outlined" color="#0B344E" className="mt-2 mt-lg-0" onClick={()=>{redirect("https://www.integra.consulfarma.com/")}}>Já sou cliente, login</Button>
				<Button color="#FF41AD" className="mt-2 mt-lg-0 ms-0 ms-lg-2" onClick={() => redirect("https://www.integra.consulfarma.com/demo?campanha=novoconhecer")}>Começar teste grátis</Button>
			</div>
          </NavStyled>
        </Navbar.Collapse>
      </Container>
    </NavBarStyled>
  );
};

export default TopBarComponent;
	