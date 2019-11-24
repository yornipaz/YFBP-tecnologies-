import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer className="page-footer font-small  lighten-5 mt-5 mb-1" style={{ fontFamily: 'Roboto,sans-serif', backgroundColor: '#eceff1' }}>
                <div style={{ backgroundColor: '#27ae60 ' }}>
                    <Container fluid>
                        <Row className="py-4 d-flex align-items-center">
                            <Col md={6} lg={5} className=" text-center text-md-left  mb-4 mb-md-0">
                                <h6 className="mb-0  " style={{ color: '#222b33', fontWeight: '700' }} >¡Conéctate con nosotros en las redes sociales!</h6>
                            </Col>
                            <Col md={6} lg={7} style={{ color: '#222b33' }} className=" text-center text-md-right">
                                <FontAwesomeIcon className="mr-4" icon={faFacebookF} />
                                <FontAwesomeIcon className="mr-4" icon={faInstagram} />
                                <FontAwesomeIcon className="mr-4" icon={faTwitter} />
                                <FontAwesomeIcon className="mr-4" icon={faLinkedin} />
                                <FontAwesomeIcon className="mr-4" icon={faYoutube} />

                            </Col>
                        </Row>

                    </Container>

                </div>
                <Container fluid style={{ backgroundColor: '#eceff1',alignItems:'center' }} className="text-center text-md-left mt-5">
                    <Row  className="mt-3 dark-grey-text">
                        <Col md={4} lg={5} xl={5} className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">agro word</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: '#27ae60' }}></hr>
                            <p>Red de Información y Comunicación del Sector Agropecuario Colombiano que centraliza información y servicios, para la toma de decisiones de productores y usuarios del sector.</p>

                        </Col>
                        <Col style={{alignItems:'center'}} md={4} lg={3} xl={2} className="mx-auto mb-4 ml-4">
                            <h6 className="text-uppercase font-weight-bold">enlaces utíles</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: '#27ae60' }}></hr>
                            <p>
                            <Link to="/">   <a className="o-link-footer" href="#!">Inicio</a></Link>
                            </p>
                            <p>
                            <Link to="/Prices">   <a className="o-link-footer" href="#!">Precios</a></Link>
                            </p>
                            <p>
                            <Link to="/News">  <a className="o-link-footer" href="#!">Noticias</a></Link>
                            </p>
                            <p>
                            <Link to="/Statistics"> <a className="o-link-footer" href="#!">Estadisticas</a></Link>
                            </p>
                        </Col>
                        <Col md={4} lg={4} xl={4} className=" mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">contactos</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: '#27ae60' }}></hr>
                            <p>
                                <FontAwesomeIcon icon={faHome} className=" mr-3"></FontAwesomeIcon>Guachené,Cauca,CO.</p>
                            <p>

                                <FontAwesomeIcon icon={faEnvelope} className=" mr-3"></FontAwesomeIcon>yorni.bonilla@uao.edu.co</p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className=" mr-3"></FontAwesomeIcon>+56 316-310-1456</p>

                        </Col>

                    </Row>
                </Container>
                <div style={{ backgroundColor: 'rgba(0,0,0,.2)' }} className="footer-copyright text-center  py-3">© 2019 Copyright:
                   <a className="o-link-footer-copy" href="https://github.com/yornipaz/"> YFBPTecnologies.com</a>
                </div>


            </footer>

    );

};

export default Footer;