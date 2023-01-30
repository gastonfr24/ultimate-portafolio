import { Link } from "react-router-dom"
import moment from "moment"

function HorizontalCard({data}) {
  return (
    <li 
    className="bg-white sm:max-w-5xl w-full rounded-lg hover:drop-shadow-2xl transition duration-300 ease-in-out pr-4"
        >
            <Link to={`/portfolio/${data.slug}`}
            className="group block relative">
              <div className="flex items-cente my-10">
                <div className="lg:flex min-w-0 lg:flex-1 items-center overflow-hidden rounded-lg ">
                  <figure className="lg:flex-shrink-0">
                    <img className=" rounded-lg h-60 lg:w-80 w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out" src={data.thumbnail} alt="" />
                  </figure>
                  <div className="min-w-0 flex-1 px-8 sm:mb-40 mb-6">
                    <p  className="pt-4 lg:mt-0 lg:top-4 leading-10 text-3xl pb-4 xl:pb-0 font-semibold transition duration-300 ease-in-out group-hover:text-violet-cus">{data.title.length > 80 ? data.title.slice(0,79):data.title}</p>
                    <div className="lg:absolute">
                        <span className="mx-1 font-medium text-gray-800 text-sm"><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                        <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">{moment(data.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                        <span className="mt-2 mx-2 font-medium text-gray-800 text-sm">{data.time_read} min read</span> 
                        <span className="mt-2 mx-2 font-medium text-gray-800 text-sm"><span className="text-violet-cus font-semibold">{data.views}</span> views</span> 
                        <p className="mt-4 text-lg font-regular text-gray-800 leading-8">{data.description.length > 150 ? data.description.slice(0,149):data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
          </li>
  )
}

export default HorizontalCard