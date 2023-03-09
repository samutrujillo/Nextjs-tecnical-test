import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Carousel from './carousel';
import {Modal, Button} from 'react-bootstrap/';


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
        {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:handleShow},
        {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
        {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]

    return (
        <>
            
            <Container fluid >
                <Image style={{ height: '40rem', width: '100%', borderRadius: '1rem' }} src={require('../assets/images/pexels-photo-1732414.jpeg')}></Image>
            </Container>
            <section>
                <div className='Container d-flex justify-content-center align-items-center my-5'>
                    <h2 style={{ fontSize: '2rem', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1rem', color: '#121212' }} className='mt-4'>Lo acompañamos durante todo el proceso</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center my-5'>
                    {imagesUrl.map(item => (
                        <img className="fluid-image mx-4 cursor-pointer" src={item} alt></img>
                    ))}
                </div>
            </section>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <Carousel slides={infoSlides} customStylesForSlides={'mx-2'} mainCustomStylesForSliderContainer={'w-75 mx-5 my-4 cursor-pointer'}></Carousel>

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
        </>
    )
}

export default MainContent