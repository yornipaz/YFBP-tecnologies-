import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component {
   
    
    render() {
        return (
            <Navbar variant="dark" expand="lg" className="o-navbar">
               <Link to="/"> <Navbar.Brand href="#home">Agro Word</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-4" />
                <Navbar.Collapse id="basic-navbar-nav"  >
                    <Nav justify variant="pills" className="ml-lg-auto" defaultActiveKey={this.props.active}>
                    <Link to="/"><Nav.Link href="#home">Inicio</Nav.Link></Link>
                    <Link to="/Prices" > <Nav.Link href="#Precios">Precios</Nav.Link></Link>
                    <Link to="/News">   <Nav.Link href="#Noticias">Noticias</Nav.Link></Link>
                    <Link to="/Statistics"> <Nav.Link href="#Estadistica">Estadisticas</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

export default Header;