import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Carousel from './carousel';
import { Modal, Button, Row, Col} from 'react-bootstrap/';
import Formulario from "./formulario";



const MainContent = () => {
    const [show, setShow] = useState(false);
    const router = useRouter();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const imagesUrl = [
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-propiedades.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-credito-hipotecario.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-administracion-de-propiedades.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-renta-en-dolares.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-asesoria-contable-y-legal.png'
    ]
    const sliderClick = (event) => {
        router.push('/info');
    }

    const infoSlides = [
        { image: "https://pfsrealty.com/wp-content/uploads/2023/01/Silverland-4.png", clickEvent: handleShow },
        { image: "https://pfsrealty.com/wp-content/uploads/2023/01/1.png", clickEvent: handleShow },
        { image: "https://pfsrealty.com/wp-content/uploads/2023/01/Shoma-Bay-Exterior-with-Logo-scaled.webp", clickEvent: handleShow },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/12/1.-Oasis-Entrance-scaled.webp", clickEvent: handleShow },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/12/1.png", clickEvent: handleShow },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/12/Pool-Shot-2.jpeg", clickEvent: handleShow },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/10/79323-Centris-Brochure-10-21-22-25-jpg.webp", clickEvent: handleShow },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/10/519931666283904-jpg.webp", clickEvent: handleShow }
    ]



    return (
        <>

            <Container fluid >
                <Image style={{ height: '40rem', width: '100%', borderRadius: '1rem' }} src={require('../assets/images/pexels-photo-1732414.jpeg')}></Image>
            </Container>
            <section>
                <div className='Container d-flex justify-content-center align-items-center my-5'>
                    <h2 style={{ fontSize: '2rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '1rem', color: '#121212' }} className='mt-4'>Lo acompañamos durante todo el proceso</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center my-5'>
                    {imagesUrl.map(item => (
                        <img className="fluid-image mx-4 cursor-pointer" src={item} alt></img>
                    ))}
                </div>
            </section>

            <section>
                <div className='Container d-flex justify-content-center align-items-center'>
                    <h2 style={{ fontSize: '1rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '1rem', color: '#121212' }} className='mt-4'>Propiedades destacadas</h2>
                </div>

                <div style={{ marginTop: '-3rem' }} className='w-100 d-flex justify-content-center align-items-center'>
                    <Carousel slides={infoSlides} customStylesForSlides={'mx-2 h-100'} mainCustomStylesForSliderContainer={'w-75 mx-5 my-4 cursor-pointer'}></Carousel>
                </div>

                <div className='d-flex justify-content-center alig-items-center'>
                    <Button size='lg' style={{ background: '#a80552', border: 'none', borderRadius: '8px', width: '20%', fontWeight:'300' }}>Ver más apartamentos</Button>{' '}
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Pagina Prototipo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Esta es una pagina Prototipo</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>

            <section>
                <div className='d-flex justify-content-center align-items-center my-5'>
                    <h2 style={{ fontSize: '1.3rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '1rem', color: '#121212' }} className='mt-4'>Próximos eventos</h2>
                </div>

                <div style={{ marginTop: '-6rem' }} className='d-flex justify-content-center align-items-center'>
                    <Carousel slides={infoSlides2} customStylesForSlides={'mx-2 h-100'} mainCustomStylesForSliderContainer={'mx-5 my-4 cursor-pointer'}></Carousel>
                </div>
            </section>


            <section>
                <Row>
                    <Col className="mx-5 my-5">
                        <h2 style={{ marginLeft: '7rem', fontSize: '1.688rem', marginBottom: '1.875rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#121212', lineHeight: '1.56', textAlign: 'justify' }}>La mejor empresa de bienes raíces en Miami</h2>
                        <p style={{ marginLeft: '7rem', fontSize: '1rem', marginBottom: '1.875rem', lineHeight: '1.56', textAlign: 'justify', fontWeight: '250' }}>
                            La mejor empresa de bienes raíces en Miami
                            <br />
                            <br />

                            En PFS Realty tenemos la misión de inspirar a las familias para cumplir su sueño de construir un patrimonio de inversión inmobiliario de una manera fácil gracias a nuestro servicio 360 y al equipo humano comprometido contigo y tu familia.
                        </p>
                        <p style={{ marginLeft: '7rem', marginBottom: '2.5rem', lineHeight: '1.56', textAlign: 'justify', fontWeight: '250' }}>
                            Dentro del área de inversiones, PFS Realty ofrece una alta oferta de proyectos inmobiliarios que abarca todas las necesidades y particularidades de nuestros clientes.
                            <br />
                            <br />

                            Realizamos la búsqueda de la propiedad, tramitamos la obtención del crédito hipotecario ya sea como residente o extranjero, administramos la propiedad para garantizar el cuidado y mantenimiento de tu inversión y lograr el más óptimo nivel de renta.
                        </p>

                        <div className='d-flex justify-content-center alig-items-center'>
                            <Button size='lg' style={{ marginLeft: '7rem', background: '#a80552', border: 'none', borderRadius: '8px', width: '11rem' }}>CONTÁCTENOS</Button>{' '}
                        </div>


                    </Col>

                    <Col className="mx-5 my-5">
                        <Image style={{ height: '20rem', width: '30rem', marginTop: '4rem', marginLeft: '6rem' }} src={require('../assets/images/pfs-our-team.jpg')}></Image>
                    </Col>
                </Row>
            </section>

            <section>

                <div className='my-5'>
                    <h3 style={{ fontSize: '.75rem', fontWeight: '300', margin: '0 auto 0.635rem' }} className='d-flex justify-content-center'>¡Disfrute Miami!</h3>
                    <h2 className='d-flex justify-content-center' style={{ fontSize: '1.688rem', marginBottom: '1.875rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#121212', lineHeight: '1.56' }}>Noticias sobre bienes raíces y eventos</h2>

                </div>


                <Row style={{ marginTop: '-5rem' }}>
                    <Col>
                        <Image style={{ height: '20rem', width: '30rem', borderRadius: '1rem', marginTop: '4rem', marginLeft: '5rem' }} src={require('../assets/images/noticias-bienes-1.jpg')}></Image>
                        <div className='my-4'>
                            <h3 style={{ fontSize: '.75rem', fontWeight: '300', marginLeft: '2rem', margin: '0 auto 0.635rem' }} className='d-flex justify-content-center'>25 OCTUBRE, 2022</h3>
                            <p className='d-flex justify-content-center' style={{ fontSize: '1rem', marginLeft: '3rem', marginBottom: '1.875rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#a80552', lineHeight: '1.56' }}>
                                <span style={{ textAlign: 'center' }}>
                                    Carteras de inversión: consejos para crear la
                                    <br />
                                    suya
                                </span>
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <Image style={{ height: '20rem', width: '30rem', borderRadius: '1rem', marginTop: '4rem', marginLeft: '2rem' }} src={require('../assets/images/noticias-bienes-2.jpg')}></Image>
                        <div className='my-4'>
                            <h3 style={{ fontSize: '.75rem', fontWeight: '300', marginRight: '3rem', margin: '0 auto 0.635rem' }} className='d-flex justify-content-center'>18 OCTUBRE, 2022</h3>
                            <p className='d-flex justify-content-center' style={{ fontSize: '1rem', marginRight: '2rem', marginBottom: '1.875rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#a80552', lineHeight: '1.56' }}>
                                <span style={{ textAlign: 'center' }}>
                                    Estudio de títulos:
                                    ¿cuáles son sus principales ventajas?
                                </span>
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <Image style={{ height: '20rem', width: '30rem', borderRadius: '1rem', marginTop: '4rem', marginLeft: '1rem' }} src={require('../assets/images/noticias-bienes-3.jpg')}></Image>
                        <div className='my-4'>
                            <h3 style={{ fontSize: '.75rem', fontWeight: '300', marginRight: '4rem', margin: '0 auto 0.635rem' }} className='d-flex justify-content-center'>11 OCTUBRE, 2022</h3>
                            <p className='d-flex justify-content-center' style={{ fontSize: '1rem', marginRight: '4rem', marginBottom: '1.875rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#a80552', lineHeight: '1.56' }}>
                                <span style={{ textAlign: 'center' }}>
                                    Propiedades en Florida: lo que debe saber
                                    <br />
                                    antes de invertir
                                </span>
                            </p>
                        </div>
                    </Col>
                    <div style={{ marginBottom: '5rem' }} className='d-flex justify-content-center alig-items-center'>
                        <Button size='lg' style={{ background: '#a80552', border: 'none', borderRadius: '3px', width: '12rem', fontWeight:'200' }}>Ver más noticias</Button>{' '}
                    </div>
                </Row>
            </section>

            <section>
                <Row>
                    <Col md={4}>
                        <Image style={{ height: '100%', width: '100%', marginLeft: '1rem' }} src={require('../assets/images/pfs-fondo-2.jpg')}></Image>
                    </Col>

                    <Col md={4}>
                        <di className='d-flex justify-content-center my-5'>
                            <Image style={{ height: '3rem', width: '10rem', marginLeft: '1rem' }} src={require('../assets/images/PFS.png')}></Image>
                        </di>

                        <di className='d-flex justify-content-center'>
                            <Image style={{ height: '16rem', width: '28rem', marginLeft: '1rem' }} src={require('../assets/images/bg-video.webp')}></Image>
                        </di>

                        <di className='d-flex justify-content-center'>
                        <p style={{marginTop:'2rem' ,textAlign: 'center', fontSize: '1rem', fontWeight: '200', color: '#333' }}>
                            21 años liderando PFS Realty, contamos con un excelente talento humano: Realtors
                            <br />
                            <span style={{ display: 'block', textAlign: 'center' }}>y International Real Estate Advisor que puedes encontrar en todos estos países</span>
                        </p>

                        </di>

                        <di className='d-flex justify-content-center my-4'>
                        <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: '200', color: '#333' }}>
                            EE.UU, Mexico - Colombia - Argentina - Spain - Venezuela - Ecuador - Chile - Peru -
                            <br />
                            <span style={{ display: 'block', textAlign: 'center' }}>Canadá - Portugal</span>
                        </p>

                        </di>

                        <di className='d-flex justify-content-center'>
                        <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: '200', color: '#333' }}>
                        ¿Quieres recibir asesoría?
                            <br />
                            <span style={{ display: 'block', textAlign: 'center' }}>
                                <a style={{textDecoration:'none', color:'#333'}}  href="mailto:info@pfsrealty.com">info@pfsrealty.com</a>
                            </span>
                        </p>

                        </di>
                    </Col>

                    <Col md={4}>

                        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '300', color: '#333' }} className='mt-4'>
                            ¡Esta es su oportunidad
                            <br />
                            <span style={{ display: 'block', textAlign: 'center' }}>de invertir en Miami!</span>
                        </h2>
                        <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: '200', color: '#333' }}>
                            Déjenos sus datos y reciba
                            <br />
                            <span style={{ display: 'block', textAlign: 'center' }}>asesoría personalizada</span>
                        </p>

                        <div className='d-flex justify-content-center'>   
                            <Formulario />
                        </div>


                    </Col>
                </Row>
            </section>

        </>
    )
}

export default MainContent