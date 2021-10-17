import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const StyledNavLink = styled(Nav.Link)`
	font-size:1.15rem;
	font-weight:500;
`
const StyledNavbarBrand = styled(Navbar.Brand)`
	font-size:1.35rem;
	font-weight:600;
`

function NavigationBar ({ goToPage }) {
	return (
		<header>
			<Navbar bg='light' expand='lg' >
			{/* <Nav > */}
				<StyledNavbarBrand>Apiarios Wainz</StyledNavbarBrand>
				<StyledNavLink onClick={() => goToPage('Home')}>
					<Nav.Link>Home</Nav.Link>
				</StyledNavLink>
				<StyledNavLink onClick={() => goToPage('Apiaries')}>
					<Nav.Link >Colmenares</Nav.Link>
				</StyledNavLink>
				<StyledNavLink onClick={() => goToPage('Logs')}>
					<Nav.Link >Informes y Costos</Nav.Link>
				</StyledNavLink>	
				<StyledNavLink onClick={() => goToPage('Contacts')}>
					<Nav.Link >Contactos</Nav.Link>
				</StyledNavLink>	
			{/* </Nav> */}
			</Navbar>
		</header>
	)
}

export default NavigationBar;