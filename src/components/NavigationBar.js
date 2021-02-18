import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// class NavigationBar extends React.Component{
// 	render(){
// 		return (
// 			<header>
// 				<Navbar bg='light' expand='lg' >
// 					<Navbar.Brand href="#home">
// 						<img
// 							alt=""
// 							src="../images/honeycomb.svg"
// 							width="60"
// 							height="60"
// 						/>{' '}
// 						Apiarios Wainz
// 					</Navbar.Brand>
// 					<Nav >
// 						<Nav.Item>
// 							<Nav.Link href="/">Home</Nav.Link>
// 						</Nav.Item>
// 						<Nav.Item>
// 							<Nav.Link href="">Button</Nav.Link>
// 						</Nav.Item>	
// 					</Nav>
// 				</Navbar>
// 			</header>
// 		)
// 	}
// }
function NavigationBar ({ goToPage }) {
	return (
		<header>
			<Navbar bg='light' expand='lg' >
				{/* <Nav > */}
					<Navbar.Brand><b>Apiarios Wainz</b></Navbar.Brand>
					<Nav.Item onClick={() => goToPage('Home')}>
						<Nav.Link>Home</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => goToPage('Apiaries')}>
						<Nav.Link >Colmenares</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => goToPage('Logs')}>
						<Nav.Link >Informes y Costos</Nav.Link>
					</Nav.Item>	
					<Nav.Item onClick={() => goToPage('Contacts')}>
						<Nav.Link >Contactos</Nav.Link>
					</Nav.Item>	
				{/* </Nav> */}
			</Navbar>
		</header>
	)
}

export default NavigationBar;