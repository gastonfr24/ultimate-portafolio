import me from "assets/img/avatar.jpg"
import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
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
    <h2 className="text-3xl font-gilroy-semibold uppercase text-gray-800 py-8 text-center"> mi aprendizaje </h2>
    <ol className="relative border-l border-indigo-500 ">  
                    
<li className="mb-10 ml-4">
<div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
<time className="mb-1 text-sm font-normal leading-none text-gray-400 ">February 2022</time>
<h3 className="text-lg font-semibold text-violet-cus ">Application UI code in Tailwind CSS</h3>
<p className="mb-4 text-base font-normal text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
</li>

<li className="mb-10 ml-4">
<div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
<time className="mb-1 text-sm font-normal leading-none text-gray-400 ">March 2022</time>
<h3 className="text-lg font-semibold text-violet-cus ">Marketing UI design in Figma</h3>
<p className="text-base font-normal text-gray-500 ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
</li>

<li className="ml-4">
<div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
<time className="mb-1 text-sm font-normal leading-none text-gray-400 ">April 2022</time>
<h3 className="text-lg font-semibold text-violet-cus ">E-Commerce UI code in Tailwind CSS</h3>
<p className="text-base font-normal text-gray-500 ">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
</li>
</ol>
</div>
        </motion.div>
      </Waypoint>
  )
}

export default TimeLine