import React from 'react'
import Image from 'next/image';


import { Container, Row, Col, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <>

      <Row className='bg-dark'>
        <Col md={3}>
          <di className='d-flex justify-content-end my-5'>
            <Image style={{marginTop:'3rem' ,height: '3rem', width: '10rem' }} src={require('../../assets/images/logo-pfs-white.webp')}></Image>
          </di>
        </Col>

        <Col md={6}>
          <div className='d-flex justify-content-center align-items-center my-5'>
            <h2 style={{ fontSize: '1rem', fontWeight: '300', textTransform: 'uppercase', color: '#fff' }} className='mt-4'>nuestras oficinas</h2>
          </div>
          <di className='d-flex justify-content-center my-4'>
            <p style={{ textAlign: 'center', fontSize: '1rem', fontWeight: '300', color: '#fff' }}>
              EE.UU - Mexico - Colombia - Argentina - España - Venezuela - Ecuador - Chile - Peru -
              <br />
              <span style={{ display: 'block', textAlign: 'center' }}>Canadá - Portugal</span>
            </p>

          </di>
        </Col>

        <Col md={3}>
          <div className='d-flex justify-content-start align-items-center my-5'>
            <h2 style={{ fontSize: '1rem', fontWeight: '300', textTransform: 'uppercase', color: '#fff' }} className='mt-4'>de interés</h2>
          </div>
          
          <div className='d-flex align-items-center'>

          <ul className='my-4 p-1' style={{fontSize: '1rem', fontWeight: '200', textTransform: 'uppercase', color: '#fff', listStyle:'none'}}>
            <li className='my-2'>Blog</li>
            <li className='my-2'>Términos y condiciones</li>
            <li className='my-2'>Quienes somos?</li>
            <li className='my-2'>Intranet</li>
            <li style={{marginBottom:'-1rem'}}>Login</li>
          </ul>
          </div>

        </Col>
      </Row>


      <Row style={{ backgroundColor: '#000', paddingBottom: '4.375rem' }}>
        <Col md={3}>
          <div className='d-flex  align-items-center mx-2'>
            <h2 style={{ fontSize: '11px', fontWeight: '200', color: '#fff' }} className='mt-4'>
              Copyright© 2023 PFS Realty Group All
              <br />
              Rights Reserved
            </h2>
          </div>
        </Col>

        <Col md={6}>
          <div className='d-flex justify-content-center align-items-center'>

            <Image className='mx-2 my-4' src={require('../../assets/images/logo-avanti-1.webp')}></Image>
            <Image className='mx-2' src={require('../../assets/images/logo-avanti-2.webp')}></Image>
            <Image className='mx-2' src={require('../../assets/images/logo-cnn.webp')}></Image>
            <Image className='mx-2' src={require('../../assets/images/logo-ntn24.webp')}></Image>
            <Image className='mx-2' src={require('../../assets/images/logo-mls.webp')}></Image>

          </div>
        </Col>

        <Col md={3}>
          <div className='d-flex justify-content-end align-items-center'>
            <h2 style={{ fontSize: '1rem', fontWeight: '200', textTransform: 'uppercase', color: '#fff' }} className='mt-4'>diseñado</h2>
          </div>
        </Col>
      </Row>

    </>
  )
}

export default Footer