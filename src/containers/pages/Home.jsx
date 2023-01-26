// Base Layout
import Layout from "hocs/layouts/Layout"

// Components
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Header from "components/home/Header"
import Details from "components/home/Details"
import Intereses from "components/home/Intereses"
import Skills from "components/home/Skills"
import { useEffect } from "react"
import ProjectList from "components/home/ProjectList"
import Contact from "components/home/Contact"


function Home() {

  useEffect(() => {
    window.scrollTo(0,100)

    setTimeout(() => window.scrollTo(0,0), 1000)
  }, [])
 

  return (
    <div>
      
      <Navbar/>
    <Layout>
      <div className="pt-10">
      <Header/>
      <Details/>
      <Intereses/>
      <Skills/>
      <ProjectList/>
      <div className="py-52 w-5/6 mx-auto">
      <Contact/>
      </div>
      </div>
{/*       <Footer/> */}
    </Layout>
    </div>
  )
}

export default Home