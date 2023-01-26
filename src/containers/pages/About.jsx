import Carrer from "components/about/Carrer"
import Header from "components/about/Header"
import PhotoDescriptcion from "components/about/PhotoDescriptcion"
import TimeLine from "components/about/TimeLine"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-16">
            <Helmet>
      <title>Gaston Franco | Sobre Mí</title>
      <meta
      name="description"
      content="Gaston Franco, Data Scientists and Python Developer"
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
        <PhotoDescriptcion/>
        <Carrer/>
        <TimeLine/>
    </Layout>
    </div>
  )
}

export default About