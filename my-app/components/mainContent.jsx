import React from 'react'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';

const MainContent = () => {
    const imagesUrl = [
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-propiedades.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-credito-hipotecario.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-administracion-de-propiedades.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-renta-en-dolares.png',
        'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-asesoria-contable-y-legal.png'
    ]
    return (
        <>
            <Container fluid>
                <Image style={{ height: '40rem', width: '100%', borderRadius: '1rem' }} src={require('../assets/images/pexels-photo-1732414.jpeg')}></Image>
            </Container>
            <section>
                <div className='Container d-flex justify-content-center align-items-center'>
                    <h2 style={{ fontSize: '2rem', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '1rem', color: '#121212' }} className='mt-4'>Lo acompañamos durante todo el proceso</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    {imagesUrl.map(item => (
                        <img className="fluid-image mx-4 cursor-pointer" src={item} alt></img>
                    ))}
                </div>
            </section>
        </>
    )
}

export default MainContent