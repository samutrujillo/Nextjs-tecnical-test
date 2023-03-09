import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Homeview from '../components/home'
import Container from 'react-bootstrap/Container';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Inmobiliaria en Miami Florida | Bienes Raices - PFS Realty Group</title>
        <meta name="description" content="Inmobiliaria en Miami Florida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Homeview/>
      </Container>
    </>
  )
}
