import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Details() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        x: 120,
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [isVisible, controls]);

  return (
    <div className="w-5/6 mx-auto sm:my-52 pt-40 pb-20">
      <div className="w-11/12">
      <Waypoint
        onEnter={() => setIsVisible(true)}
        onLeave={() => setIsVisible(false)}
      >
        <motion.div initial={{ x: 120, opacity: 0 }} animate={controls}>
          <div>
            <h2 className="text-3xl font-gilroy-semibold uppercase">
              Detalles Personales
            </h2>

            <div className="py-6 border-l-[2px] border-violet-cus mb-6">
              <p className="py-2 text-gray-800 font-gilroy-regular mx-4 text-lg">
              Soy un programador y Científico de Datos junior con un gran interés en el aprendizaje automático e Inteligencia Artificial.
               He adquirido una amplia experiencia en estos campos a través de cursos especializados en Machine Learning, Deep Learning y 
               Análisis de Datos con Python. 
               Actualmente, estoy en mi ultimo año de la Tecnicatura en Programación dentro de la UTN, donde estoy ampliando mis conocimientos 
               y habilidades en esta área.



              </p>

              <p className="py-2 pt-4 text-gray-800 font-gilroy-regular mx-4 text-lg">
              En mi tiempo libre, disfruto jugando videojuegos de estrategia y resolviendo puzzles.
               Esta afición me ha permitido desarrollar una perspectiva única al enfrentar grandes conjuntos de datos.
                Los veo como un gran rompecabezas que me apasiona resolver.
               Encontrar patrones que otros no ven es mi desafío personal.
              </p>
            </div>
            <Link to='about' className="bg-gradient-to-r from-violet-cus to-indigo-400
            py-3 px-6 mt-6 text-white uppercase font-gilroy-medium text-sm">
            Sobre Mí
            </Link>
          </div>
        </motion.div>
      </Waypoint>
      </div>
    </div>
  );
}

export default Details;
