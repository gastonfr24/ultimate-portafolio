import me from "assets/img/avatar.jpg"
import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// icons
import { FaGamepad } from "react-icons/fa"
import { GiEvilBook } from "react-icons/gi"

function PhotoDescriptcion() {
      const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [isVisible, controls]);
  return (
<Waypoint
        onEnter={() => setIsVisible(true)}
        onLeave={() => setIsVisible(false)}
      >
        <motion.div initial={{ opacity: 0 }} animate={controls}>
          <div className="bg-white w-full">
<div className="w-5/6 mx-auto py-20 lg:flex pt-40">
    {/* image */}
    <div className="lg:w-1/2 w-full">
        <img src={me} alt="foto"  className="w-full p-6"/>
    </div>
    <div className="lg:w-1/2 w-full">
    <h2 className="text-3xl font-gilroy-semibold uppercase p-6 text-gray-800 text-center">Algunas cosas interesantes sobre mi</h2>
                <div className="pt-8 w-10/12 mx-auto text-center">
         <GiEvilBook className="w-8 h-8 text-violet-300 mx-auto pb-1"/>
    <p className="font-gilroy-medium leading-7">
            Me encanta leer thrillers psicológico, mi escritor favorito es Stephen King.
         </p>
         </div>

         <div className="pt-8 w-10/12 mx-auto text-center">
         <FaGamepad className="w-8 h-8 text-violet-300 mx-auto"/>
    <p className="font-gilroy-medium leading-7">
    Tambien soy un apasionado de los puzzles y juegos de lógica, y un amante de sagas como Cube Scape de Rusty Lake,
    siempre me ha gustado pensar y resolver problemas. 
         </p>
         </div>

         </div>
</div>
</div>
        </motion.div>
      </Waypoint>
  );
}

export default PhotoDescriptcion;
