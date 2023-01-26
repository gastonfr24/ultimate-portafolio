import background from "assets/img/contacto.jpg"


function Header() {
  return (
    <div className="w-5/6 mx-auto px-6 lg:px-6">
    <div className="mx-auto w-full xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div>
  
        <div className="lg:w-10/12">
          <h1 className="text-4xl pb-16 font-gilroy-semibold tracking-tight sm:text-3xl">
           Contacto
          </h1>

          <p className="mt-2 text-lg leading-8 text-gray-800 font-gilroy-medium">
          ¿Tienes preguntas o estás interesado en trabajar juntos? No dudes en ponerte en contacto conmigo.
           Puedes enviarme un correo electrónico a gastonfr24@gmail.com,
           llamarme al +54 2625-661694, o rellenar el formulario de contacto.
          </p>

        </div>
        <div className="absolute inset-x-0 top-[calc(100%-38rem)] -z-10 transform-gpu blur-none overflow-hidden bg-white lg:top-[calc(100%-42rem)] sm:top-[calc(100%-38rem)]">
        <img src={background} className='w-full lg:h-5/12 object-cover sm:opacity-10 opacity-0'/>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Header