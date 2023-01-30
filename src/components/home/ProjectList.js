import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";

// Requests
import { get_portfolio_list } from 'redux/actions/portfolio/portfolio'

// Hooks
import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import SkeletonHomeCard from "components/loaders/SkeletonHomeCard";
import { Link } from "react-router-dom";

function ProjectList({
  get_portfolio_list,
  posts,
  count,
}) {

    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

      // Lamado a la API
      useEffect(() => {
        get_portfolio_list();
      }, []);


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
    <Waypoint onEnter={() => setIsVisible(true)} onLeave={() => setIsVisible(false)}>
      <motion.div initial={{ x: -100, opacity: 0 }} animate={controls}>
    <div className='pb-40 w-5/6 mx-auto' name='work'>
        <h2 className='text-3xl text-center font-gilroy-semibold'>Proyectos</h2>


        <div className='w-full'>
          {
            posts ? 
            <div className="grid lg:grid-cols-3 gap-x-3 gap-y-12 max-w-full lg:px-12 pt-10">
            {posts&&posts.slice(0, 3).map((data,index) => (
            <div className="">
                       <div className="rounded-xl group flex-col items-start overflow-hidden shadow-sm  hover:scale-95 transition-transform duration-1000">
                        <a href="#_" className="block transition duration-1000 ease-out transform group-hover:scale-125">
                            <img className="object-cover w-full shadow-sm h-60" src={data.thumbnail}/>
                        </a>
                            </div>
                            <div className="flex flex-col items-start px-6 bg-white py-4 rounded-b-2xl">
                            <div className="">
                  <span className="mt-2 mx-2 font-gilroy-medium text-gray-800 text-sm">{data.time_read} min read</span> 
                        <h2 className="text-base text-gray-900 font-gilroy-bold sm:text-lg md:text-lg mt-2 uppercase"><a href="#_">{data.title.length > 80 ? data.title.slice(0,79):data.title}</a></h2>
                            <p className="mt-2 text-sm font-regular text-gray-800 leading-8">{data.description.length > 150 ? data.description.slice(0,147)+'...':data.description}</p>
                        </div>
                        </div>
            </div>
            ))}
            </div>

            :
    <div className="grid lg:grid-cols-3 gap-x-3 gap-y-12 max-w-full lg:px-12 pt-10">
                <SkeletonHomeCard/>
                <SkeletonHomeCard/>
                <SkeletonHomeCard/>
                    </div>
          }  


        <div className="w-full items-center justify-center flex mt-8">
            <Link to='/portfolio' className="bg-gradient-to-r from-violet-cus to-indigo-400 text-white px-4 py-3 hover:from-indigo-400 hover:to-violet-cus transition duration-500">
                    Ver Más
            </Link>
        </div>


        </div>
    </div>
        </motion.div>
    </Waypoint>
  )
}
const mapStateToProps = (state) => ({
  posts: state.portfolio.portfolio_list,
  count: state.portfolio.count,
});
export default connect(mapStateToProps, {
  get_portfolio_list,
})(ProjectList);
