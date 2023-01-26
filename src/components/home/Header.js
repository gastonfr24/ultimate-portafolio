import me from "assets/img/avatar.jpg";
import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from 'react-scroll';

// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"



function Header() {
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
    <section className="bg-white w-5/6 mx-auto sm:pt-0 pt-24">
      <Waypoint
        onEnter={() => setIsVisible(true)}
        onLeave={() => setIsVisible(false)}
      >
        <motion.div initial={{ x: -100, opacity: 0 }} animate={controls}>
          <div className="container py-10 mx-auto">
            <div className="lg:flex lg:items-center">
              <div className="w-full space-y-12 lg:w-1/2 px-12">
                <div>
                  <h1 className="sm:text-5xl text-4xl font-semibold text-gray-800 capitalize lg:text-4xl text-center lg:text-left">
                    {/* <span className="text-xl text-gray-600">Hola, soy </span> */}
                    {" "}
                    <br /> Gaston Franco
                  </h1>
                  {/*                         
                            <div className="mt-2">
                              
                                <span className="inline-block w-40 h-1 rounded-full bg-violet-cus"></span>
                                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-violet-cus"></span>
                                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-violet-cus"></span>
                            </div> */}
                  <h1 className="text-2xl font-semibold text-violet-cus capitalize text-center lg:text-left">
                    <Typewriter
                      words={["Data Scientist", "Python Developer"]}
                      loop={0}
                      cursor
                      cursorColor="#8884d8"
                      cursorStyle="|"
                      typeSpeed={120}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </h1>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                  <div className="mt-4 md:mx-4 md:mt-0">
                    <p className="mt-3 text-gray-500 font-gilroy-medium-italic text-center lg:text-left">
                      <p className="flex">
                      <RiDoubleQuotesL className="text-violet-cus hidden lg:flex"/>
                    Quiero ayudar a otros a tomar las decisiones correctas,
                      </p>
                    <p className="lg:flex">
                     decisiones basadas en datos.
                    <RiDoubleQuotesR className="text-violet-cus hidden lg:flex"/>
                    </p>
                    </p>
                    <div className="flex justify-center lg:justify-start pt-6 lg:pt-0">
                      <Link to='work' smooth={true} duration={500} >
                      <button
                        className="bg-gradient-to-r from-violet-cus to-indigo-400 
                               py-3 px-6 mt-6 text-white uppercase font-gilroy-medium text-xs"
                      >
                        Mis Proyectos
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img
                  className="w-[28rem] h-[28rem] object-cover xl:w-[30rem] xl:h-[30rem] rounded-full avatar-home"
                  src={me}
                  alt="foto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Waypoint>
    </section>
  );
}

export default Header;
