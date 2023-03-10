import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Carousel from './carousel';
import { Modal, Button } from 'react-bootstrap/';


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
        { image: "https://pfsrealty.com/wp-content/uploads/2023/01/1.png", clickEvent: sliderClick },
        { image: "https://pfsrealty.com/wp-content/uploads/2023/01/Shoma-Bay-Exterior-with-Logo-scaled.webp", clickEvent: sliderClick },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/12/1.-Oasis-Entrance-scaled.webp", clickEvent: sliderClick },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/12/1.png", clickEvent: sliderClick },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/12/Pool-Shot-2.jpeg", clickEvent: sliderClick },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/10/79323-Centris-Brochure-10-21-22-25-jpg.webp", clickEvent: sliderClick },
        { image: "https://pfsrealty.com/wp-content/uploads/2022/10/519931666283904-jpg.webp", clickEvent: sliderClick }
    ]

    return (
        <>

            <Container fluid >
                <Image style={{ height: '40rem', width: '100%', borderRadius: '1rem' }} src={require('../assets/images/pexels-photo-1732414.jpeg')}></Image>
            </Container>
            <section>
                <div className='Container d-flex justify-content-center align-items-center my-5'>
                    <h2 style={{ fontSize: '2rem', fontWeight: '200', textTransform: 'uppercase', letterSpacing: '1rem', color: '#121212' }} className='mt-4'>Lo acompañamos durante todo el proceso</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center my-5'>
                    {imagesUrl.map(item => (
                        <img className="fluid-image mx-4 cursor-pointer" src={item} alt></img>
                    ))}
                </div>
            </section>

            <section>
                <div className='Container d-flex justify-content-center align-items-center'>
                    <h2 style={{ fontSize: '1rem', fontWeight: '200', textTransform: 'uppercase', letterSpacing: '1rem', color: '#121212' }} className='mt-4'>propiedades destacadas</h2>
                </div>

                <div className='w-100 d-flex justify-content-center align-items-center'>
                    <Carousel slides={infoSlides} customStylesForSlides={'mx-2 h-100'} mainCustomStylesForSliderContainer={'w-75 mx-5 my-4 cursor-pointer'}></Carousel>

                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>

        </>
    )
}

export default MainContent