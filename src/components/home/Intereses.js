import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Iconos
import { RiBarChartBoxLine } from "react-icons/ri"
import { TiMediaFastForwardOutline } from "react-icons/ti"
import { TbRobot } from "react-icons/tb"
import { BsCodeSquare } from "react-icons/bs"


const intereses = [
  {
    title: 'Análisis de Datos',
    description : 'Me divierte encontrar patrones, relaciones y tendecias ocultas en los datos a través del análisis exploratorio.',
    icon: RiBarChartBoxLine
  },
  {
    title: 'Machine Learning',
    description : 'Me encanta aprender sobre las teorías y técnicas más recientes de ML & DL y su aplicación en diferentes campos.',
    icon: TbRobot
  },
  {
    title: 'Forecasting',
    description : 'Me apasiona utilizar técnicas de análisis de series temporales para pronosticar eventos y tomar decisiones informadas.',
    icon: TiMediaFastForwardOutline
  },
  {
    title: 'Desarrollo Web',
    description : 'Me entusiasma utilizar mis habilidades en desarrollo web y ciencia de datos para construir soluciones innovadoras.',
    icon: BsCodeSquare
  },
]


function Intereses() {

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
        x: -100,
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [isVisible, controls]);

  return (
    <div className="pb-20">
    <Waypoint onEnter={() => setIsVisible(true)} onLeave={() => setIsVisible(false)}>
      <motion.div initial={{ x: -100, opacity: 0 }} animate={controls}>
      <div className="w-3/4 mx-auto">
        <h2 className="text-center text-3xl font-gilroy-semibold py-2">Areas de Interés</h2>
        <p className="text-center font-gilroy-medium text-sm text-gray-800 py-1">Conoce algunos de mis intereses en cuanto a trabajo</p>
      </div>

        <div className="grid lg:grid-cols-3 w-5/6 mx-auto gap-x-8 gap-y-4 pt-6">
          
        {intereses.map((interes, index) => (
          <div className="flex items-center w-full h-52 group" key={index}>
        <div className="mx-auto">
          <interes.icon className="text-4xl mx-auto my-4 group-hover:text-violet-cus transition duration-300"/>
          <h2 className="text-center font-gilroy-semibold text-lg my-2 group-hover:text-violet-cus transition duration-300">{interes.title}</h2>
          <p className="text-center font-gilroy-medium text-sm text-gray-800">{interes.description}</p>
         </div>
         </div>
        ))}

        </div>
    </motion.div>
    </Waypoint>
    </div>
  )
}

export default Intereses