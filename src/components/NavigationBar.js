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
function NavigationBar (props) {
	return (
		<header>
			<Navbar bg='light' expand='lg' >
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="../images/honeycomb.svg"
						width="60"
						height="60"
					/>{' '}
					Apiarios Wainz
				</Navbar.Brand>
				<Nav >
					<Nav.Item>
						<Nav.Link href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="">Colmenares</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="">Informes y Costos</Nav.Link>
					</Nav.Item>	
					<Nav.Item>
						<Nav.Link href="">Contactos</Nav.Link>
					</Nav.Item>	
				</Nav>
			</Navbar>
		</header>
	)
}

export default NavigationBar;