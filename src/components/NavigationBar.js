import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import logo from '../images/ggdao_circle_800.png';

const StyledNavLink = styled(Nav.Link)`
	font-size:1.15rem;
	font-weight:500;
`

function NavigationBar ({ goToPage }) {
	return (
		<header>
			<Navbar bg='light' expand='lg' >
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="75"
							height="75"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
				{/* <StyledNavLink onClick={() => goToPage('Home')}>Home</StyledNavLink> */}
				<StyledNavLink onClick={() => goToPage('CharacterMint')}>Character Minting</StyledNavLink>
				<StyledNavLink onClick={() => goToPage('Potion Mint')}>Potion Minting</StyledNavLink>
				
			</Navbar>
		</header>
	)
}

export default NavigationBar;