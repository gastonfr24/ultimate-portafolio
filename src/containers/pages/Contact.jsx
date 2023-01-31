// Components
import Footer from 'components/navigation/Footer'
import Navbar from 'components/navigation/Navbar'
import Layout from 'hocs/layouts/Layout'
import Contacto from 'components/home/Contact'

import { Helmet } from 'react-helmet-async'
import Header from 'components/contact/Header'
import { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="pt-16">
            <Helmet>
      <title>Gaston Franco | Contacto</title>
      <meta
      name="description"
      content="Gaston Franco, Data Scientist and Python Developer"
    />
    <meta name="keywords" content="portafolio personal de gaston franco, cientifico de datos y desarrollador web con python" />
    <link rel="canonical" href="https://www.gfranco.com/" />
     <meta name="robots" content="all"/>
     <meta name="author" content="GastonFranco" />
     <meta name="publisher" content="GastonFranco" />
      </Helmet>
      <Navbar/>
    <Layout>
    <Header/>
    <div className='bg-white py-20 lg:w-8/12 mx-auto rounded-lg px-20 lg:px-0'>
    <Contacto/>
    </div>


    <Footer/>
        </Layout>
        </div>
  )
}

export default Contact