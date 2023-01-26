import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function Carrer() {
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
        <div className="w-5/6 mx-auto py-40">
      <Waypoint
        onEnter={() => setIsVisible(true)}
        onLeave={() => setIsVisible(false)}
      >
        <motion.div initial={{opacity: 0 }} animate={controls}>
          <div className="w-11/12">
        <h2 className="text-3xl font-gilroy-semibold uppercase text-gray-800">sobre mi carrera</h2>
            <p className=" font-gilroy-medium leading-8 py-4 text-gray-500">  
             En 2019, aun no sabía en qué carrera me quería especializar, pero sabía que me gustaba la matemática y era bueno en ella,
              así que decidí comenzar a estudiar Profesorado de Matemáticas,
              pero debido a la pandemia
             tuve que dejarla temporalmente.
        
              Sin embargo, en el año siguiente, llego la carrera de programación a mi ciudad y no dude en etrar.
            </p>   
           
    
            <p className=" font-gilroy-medium leading-8 py-4 text-gray-500">  
            Actualmente estoy estudiando programación en la UTN , a la vez que estoy aprendiendo de forma autodidacta Ciencia de Datos. Decidí entrar a este campo
            por que me llamaba la atención la Inteligencia Artificial y  y me enamoré del lenguaje de programación Python.
            </p> 
            </div>
                    </motion.div>
      </Waypoint>
        </div>
  )
}

export default Carrer