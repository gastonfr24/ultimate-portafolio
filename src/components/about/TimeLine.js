import me from "assets/img/avatar.jpg"
import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const courses = [
  {
    name:'Tecnicatura Universitaria en Programación',
    finished: '2021 - Actualidad',
    description: 'Carrera universitaria de la Universidad Tecnológica Nacional de San Rafael.',
    skills:['Lógica de Programación', 'Python, Java, Javascript', 'Git', 'SCRUM', 'Estadística Descriptiva', 'Inglés Técnico'],
  },
  {
    name:'Machine Learning de A a la Z',
    finished: 'Terminado en Octubre 2022',
    description: 'Curso de Machine Learning de +50 horas, impartido por Juan Gabroel Gomila, Legacy Team y SuperDataScience.',
    skills:['Preprocesamiento de Datos', 'Modelos de Regresión, Clasifición y Clustering', 
    'Reglas de Asociación', 'Aprendizaje por refuerzo','NLP', 'Reducción de Dimnesión', 'Selección de Modelos'],
  },
  {
    name:'Deep Learning de A a la Z',
    finished: 'Terminado en Diciembre 2022',
    description: 'Curso de Deep Learning de +30 horas, impartido por Juan Gabroel Gomila, Legacy Team y SuperDataScience.',
    skills:['Redes Neurales Artificiales', 'Redes neuronales convolucionales', 'Redes neuronales recurrentes', 
    'Mapas auto-organizados', 'Máquinas de Boltzmann', 'AutoEncoders apilados'],
  },
  {
    name:'Data Science aplicado a Negocios',
    finished: 'Terminado en Noviembre 2022',
    description: 'Curso avanzado de Ciencia de Datos de +20 horas con enfoque en aplicaciones prácticas y estudios de casos reales',
    skills:['Análisis Estadístico', 'Aprendizaje por Transferencia', 'Pronóstico de Series Temporales', 
    'Análisis de Texto', 'Visualización de Datos'],
  },
  {
    name:'Curso completo de Estadística a nivel universitario',
    finished: 'En Curso',
    description: 'Curso de Estadística desde cero de +12 horas, donde se aprende de manera teórica y práctica.',
    skills:['Estadística Descriptiva', 'Probablidad(En curso)'],
  },
]


function TimeLine() {
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
    <div className="w-5/6 mx-auto my-20">
    <h2 className="text-3xl font-gilroy-semibold uppercase text-gray-800 pt-8 text-center"> mi aprendizaje </h2>
    <p className="text-center font-gilroy-medium text-sm text-gray-800 pt-7 pb-20 w-10/12 mx-auto">
    Mi enfoque actual en estudios matemáticos me está permitiendo comprender
     mejor los algoritmos de aprendizaje automático y llevar a cabo análisis descriptivos más precisos. 
    </p>
    <ol className="relative border-l border-indigo-500 ">  
{courses.map((course, index) => (
<li className="mb-10 ml-4" key={index}>
<div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
<time className="mb-1 text-sm font-normal leading-none text-gray-400 ">{course.finished}</time>
<h3 className="text-lg font-semibold text-violet-cus ">{course.name}</h3>
<p className=" text-base font-gilroy-medium text-gray-500 pt-1 pb-2">{course.description}</p>
<p className=" text-sm font-gilroy-bold text-gray-500">
{course.skills.map((skill, index) => (
        `${skill}${index === course.skills.length - 1 ? '.' : ', '}`
    ))}
  </p>
</li>
))}

</ol>
</div>
        </motion.div>
      </Waypoint>
  )
}

export default TimeLine