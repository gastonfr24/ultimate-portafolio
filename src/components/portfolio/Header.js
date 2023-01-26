import background from "assets/img/background.jpg"

function Header() {
  return (
    <div className="w-5/6 mx-auto px-6 lg:px-6">
    <div className="mx-auto w-full xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div>
  
        <div className="lg:w-10/12">
          <h1 className="text-4xl pb-16 font-gilroy-semibold tracking-tight sm:text-3xl">
           Portfolio
          </h1>

          <p className="mt-2 text-lg leading-8 text-gray-800 font-gilroy-medium">
          Conoce algunos de mis proyectos más recientes en el campo de la ciencia de datos y el aprendizaje automático.
           Mi experiencia en el uso de Python para desarrollar algoritmos avanzados y crear visualizaciones,
            junto con mis conocimientos sólidos en estadística,
           me permite ayudarte a comprender tus datos y construir modelos precisos que te ayudarán a maximizar tus resultados.</p>

        </div>
        <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu blur-none overflow-hidden bg-white lg:top-[calc(100%-42rem)] sm:top-[calc(100%-35rem)]">
        <img src={background} className='w-full h-full object-cover sm:opacity-[0.07] opacity-0'/>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Header