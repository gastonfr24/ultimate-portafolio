import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";



function Error404() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div classNameName="pt-16">
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

      <div className="bg-white relative overflow-hidden h-screen">
  <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" className="absolute h-full w-full object-cover"/>
  <div className="inset-0 bg-black opacity-25 absolute">
  </div>
  <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-28">
    <div className="w-full font-mono flex flex-col items-center relative z-10">
      <Link to='/' className=" px-2 py-2 z-10 text-sm text-white bg-violet-cus bg-opacity-50">
      Volver al Inicio
      </Link>
      <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
 You are all alone here
     </h1>
      <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
  404
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Error404