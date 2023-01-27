import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";


const skills = [
  {
    name: 'Lenguajes de Programación',
    subskills : [
      {name:'Python', color: 'hover:bg-blue-300'},
      {name:'Javascript', color: 'hover:bg-yellow-200'}
      ]
  },
  {
    name: 'Análisis de Datos',
    subskills : [
    {name:'numpy', color : 'hover:bg-blue-200'},
    {name:'pandas', color : 'hover:bg-indigo-200'},
    {name:'matplotlib', color : 'hover:bg-orange-200'},
    {name:'seaborn', color : 'hover:bg-green-200'},
    ]
  },
  {
  name: 'Machine & Deep Learning',
  subskills : [
    {name:'scikit-learn', color : 'hover:bg-blue-200'},
    {name:'tensorflow', color:'hover:bg-orange-200'},
    {name:'keras', color:'hover:bg-red-200'},
  ]
},
{
  name: 'Base de datos',
  subskills : [
    {name:'Postgres', color:'hover:bg-violet-200'},
    {name:' MySQL ', color:'hover:bg-blue-200'},
  ]
},
{
  name: 'Conocimientos matemáticos y Estadísticos',
  subskills : [
    {name:'estadística descriptiva', color:'hover:bg-yellow-200'},
    {name:' álgebra lineal', color:'hover:bg-green-200'},
    {name:'probabilidad', color:'hover:bg-blue-200'},
  ]
},
{
  name: 'Control de Versiones',
  subskills : [
    {name:'git', color:'hover:bg-blue-200'},
    {name:'github', color:'hover:bg-indigo-200'},
  ]
},
/* 
  {
    name: 'Frameworks web',
    subskills : [
      'django', 'react'
    ]
  },  */
]



function Skills() {

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
    <div className="w-5/6 mx-auto my-52">
      <div className="w-11/12 mx-auto">
    <Waypoint
    onEnter={() => setIsVisible(true)}
    onLeave={() => setIsVisible(false)}
  >
    <motion.div initial={{ x: 120, opacity: 0 }} animate={controls}>
        <h2 className="text-center text-3xl font-gilroy-semibold py-2">Skills</h2>
        <p className="text-center font-gilroy-medium text-gray-800 text-sm mb-8 w-1/2 mx-auto">
        Mis habilidades en lenguajes de programación, herramientas de análisis y visualización
        , y metodologías de aprendizaje automático son fundamentales para mi desarrollo como Data Scientist.
          </p>
      
      <div className="w-full grid lg:grid-cols-3 pt-6 px-2">
        {skills.map((skill, index) => (
        <div className="h-72 bg-white m-4 rounded-2xl hover:scale-105 transition duration-700" key={index}>
      <h2 className="text-xl font-gilroy-medium text-center mt-5">
         <span className="font-gilroy-bold mt-4 uppercase text-gray-500 text-[0.95rem]"> {skill.name}</span> 
        </h2>  
    <ul className="mx-6 mt-8 text-lg font-gilroy-medium">
    {skill.subskills.map((subskill, sub_index) => (
      
      <li className={`transition duration-700 ease-in-out capitalize ${subskill.color} my-2 text-center rounded- font-gilroy-semibold text-[15px]`} key={sub_index}>
      {subskill.name}
      </li>
      ))}
    </ul>
        </div>
      ))}
      </div>
      </motion.div>
      </Waypoint>
      </div>
    </div>
  )
}

export default Skills