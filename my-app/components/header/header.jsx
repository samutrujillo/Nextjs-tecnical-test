import React, { useState } from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';




const Header = () => {
    return (
        <>
            <Row>
                <Col md={6} className="bg-ligth">
                    <Navbar className='' expand="lg">
                        <Image className='m-1 p-1 cursor-pointer' style={{ width: '10rem', height: 'auto' }} src={require('../../assets/images/PFS.png')}></Image>
                        <Container style={{ padding: '10px 30px 11px 3px' }}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="PROPIEDADES" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/1.1">Nuevas Construcciones</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/1.2">
                                            Usados
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="FINANCIAMIENTO" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/2.1">Financiamiento para extrangeros</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.2">
                                            Residentes
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.3">Calculadora de Hipotecas</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="SERVICIOS" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Préstamos hipotecarios Para Extrangeros</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Administración de propiedades
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Asesoria contable y legal </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </Col>
                <Col md={6} className="bg-ligth d-flex justify-content-end">
                    <Navbar className='' expand="lg">
                        <Container style={{ padding: '10px 30px 11px 3px' }}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">


                                    <Nav.Link href="#renta-dolares">RENTA EN DÓLARES</Nav.Link>

                                    <NavDropdown title="NOSOTROS" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/4.0">Quienes somos?</NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link href="#blog">BLOG</Nav.Link>

                                    <Nav.Link href="#contactenos">CONTÁCTENOS</Nav.Link>

                                    <Button style={{ background: '#f9097d', border: 'none', borderRadius: '2rem', width: '6rem' }}>Login</Button>{' '}

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </>
    )
}

export default Header
