import background from "assets/img/avatar.jpg"


function Header() {
  return (
    <div className="w-5/6 mx-auto px-6 lg:px-6">
    <div className="mx-auto w-full xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div>
  
        <div className="lg:w-10/12">
          <h1 className="text-4xl pb-16 font-gilroy-semibold tracking-tight sm:text-3xl">
           Sobre Mí
          </h1>

          <p className="mt-2 text-lg leading-8 text-gray-800 font-gilroy-medium">
          Conoce más sobre mí, mis intereses y pasiones, y cómo me involucré en el campo de la ciencia de datos y el aprendizaje automático.
           También podrás ver mi ruta de aprendizaje, incluyendo los estudios y cursos que he realizado.
          </p>

        </div>
        <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu blur-none overflow-hidden bg-white lg:top-[calc(100%-42rem)] sm:top-[calc(100%-35rem)]">
        <img src={background} className='w-full h-5/12 object-cover sm:opacity-10 opacity-0'/>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Header