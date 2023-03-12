import React from 'react'
import Header from './header/header'
import MainContent from './mainContent'
import Footer from './footer/footer'

const Homeview = () => {
  const imagesUrl = [
      'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-propiedades.png',
      'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-credito-hipotecario.png',
      'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-administracion-de-propiedades.png',
      'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-renta-en-dolares.png',
      'https://pfsrealty.com/wp-content/themes/pfsrealty/img/pfsrealty-home-servicios-asesoria-contable-y-legal.png'
  ]
  return (
    <>
      <Header/>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  )
}

export default Homeview