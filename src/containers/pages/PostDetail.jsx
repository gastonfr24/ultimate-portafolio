import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import moment from "moment"
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_portfolio } from "redux/actions/portfolio/portfolio"

import {Helmet} from "react-helmet-async"
import DomPorify from "dompurify"

import avatar from "assets/img/avatar.jpg"

// Icons
import {
    FaGithub,
    FaLinkedinIn,
  } from 'react-icons/fa';
import { BsImageAlt } from "react-icons/bs"
import { SiGmail } from "react-icons/si"


import Alert from "components/alerts/alert"



function PostDetail({get_portfolio, post}) {

    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        window.scrollTo(0,0)
        get_portfolio(slug)
    },[])

  return (
    <Layout>     
        <Helmet>
    <title>Gaston Franco | {post && post.slug=== slug ? post.title:"Blog"}</title>
    <meta
      name="description"
      content="Gaston Franco, Data Scientists and Python Developer"
    />
    <meta name="keywords" content="portafolio personal de gaston franco, detalles sobre proyecto de machine learning e inteligencia artificial" />
    <link rel="canonical" href="https://www.gfranco.com/" />
     <meta name="robots" content="all"/>
     <meta name="author" content="GastonFranco" />
     <meta name="publisher" content="GastonFranco" />
      </Helmet>
        <Navbar/>
{
    post && post.slug=== slug ?
    <div classNameName="pt-28">
 
    <div className="mt-6">
              <div className="mx-auto">

                  {/*   <!--author--> */}
                 <div className="w-full mx-auto pt-28">
                    

                                        {/* 	<!--post heading--> */}
                                        <div className="ml-8 px-10 lg:mx-12">
                                        <p
                            className="max-w-full mx-auto  text-4xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-semibold text-black">{post.title}</p>
                                            </div>
                        {/*     <!--post views--> */}
                            <div className="px-16 lg:mx-12 flex justify-start items-center mt-8 ml-3 pb-10">
                                <p className="text-base text-violet-cus font-semibold rounded-full hover:text-green-500">{post.views}</p>
                                <p className="text-base text-gray-800 font-semibold ml-2">Views</p>
                                <span className=" text-base text-gray-800 font-semibold ml-6 hover:text-violet-cus transition duration-500 ease-in-out"><Link to={`/category/${post.category.slug}`}>{post.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                                <span className="text-base text-gray-800 font-semibold ml-6">{moment(post.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                                <span className=" text-base text-gray-800 font-semibold ml-6">{post.time_read} min read</span> 

                            
                            </div>


                            <div className=" w-full bg-white  mx-auto md:text-2xl text-gray-900 pt-10 rounded">

                            {/*    	<!--content body--> */}
                                <div className="w-10/12 px-10 lg:mx-6 pb-2">
                                        <p className="lg:p-8 p-4 pb-6 text-semibold">{post.description}</p>
                                </div>
                                    </div>

     {/* Social icons */}
     <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
        <li className=' w-[60px] h-[60px] flex justify-between items-center mb-2 ml-2 bg-white border border-gray-300 hover:bg-blue-500 transition duration-500 ease-in-out rounded-full text-blue-500 hover:text-white'>
            <a
              className='flex justify-center items-center w-full'
              href='https://github.com/gastonfr24'
            >
            <FaGithub className="text-xl" />
            </a>
          </li>
          <li className=' w-[60px] h-[60px] flex justify-between items-center mb-2 ml-2 bg-white border border-gray-300 hover:bg-blue-500 transition duration-500 ease-in-out rounded-full text-blue-500 hover:text-white'>
            <a
              className='flex justify-center items-center w-full'
              href='https://mail.google.com/mail/u/0/?fs=1&to=gastonfr24@gmail.com&su=&body=&tf=cm'
            >
            <SiGmail className="text-xl" />
            </a>
          </li>
          <li className=' w-[60px] h-[60px] flex justify-between items-center ml-2 bg-white border border-gray-300 hover:bg-blue-500 transition duration-500 ease-in-out rounded-full text-blue-500 hover:text-white'>
            <a
              className='flex justify-center items-center w-full'
              href='https://www.linkedin.com/in/gaston-franco/'
            >
            <FaLinkedinIn className="text-xl" />
            </a>
          </li>

        </ul>
      </div>

      <div className=" w-full mt-24 absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white lg:top-[calc(100%-45rem)] sm:top-[calc(100%-35rem)]">
              <img src={post.thumbnail} className='w-full h-full object-cover opacity-10'/>
            </div>

                        <img className="px-10 lg:px-24 object-cover w-full shadow-sm h-full bg-white" src={post.thumbnail}/>


                   {/*  <!--post categories--> */}
                    <div className="px-10 lg:px-24 pt-2 bg-white">
                         {/*    <!--author avator--> */}
                           <div className="font-light text-gray-600">
                              
                                <a href="#" className="flex items-center pt-6 pb-6"><img
                                        src={avatar}
                                        alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"/>
                                    <h1 className="font-bold text-gray-700 hover:underline">By Gaston Franco</h1>
                                </a>
                          </div>
                   </div>
                
              {/*      <!--end post header--> */}
                        {/* <!--post content--> */}
             <div className="bg-white px-10 lg:px-24 max-w-full lg:text-xl mx-auto text-gray-900 pt-4 rounded">

          {/*    	<!--content body--> */}
                 <div>
                        <p dangerouslySetInnerHTML={{__html:DomPorify.sanitize(post.content)}} 
                        className="mt-2 py-8 leading-relax"/>
                 </div>

                 

                    </div>
                </div>
      </div>
  </div>
</div>:

<>
<div classNameName="pt-28">
 
 <div className="mt-6">
           <div className="">

               {/*   <!--author--> */}
              <div className="w-full pt-28">
                 

                                     {/* 	<!--post heading--> */}
                                     <div className="lg:ml-8 px-10 lg:mx-12 lg:mb-12">
                                     <div className="max-w-full mx-auto h-20 font-semibold grid grid-cols-12 items-center gap-4">
                                     <div className='col-span-5 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                           <div className='col-span-2 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                             <div className='col-span-3 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                                        </div>
                                     <div className="max-w-full mx-auto h-20 font-semibold grid grid-cols-12 items-center gap-4 lg:mt-4">
                           <div className='col-span-2 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                             <div className='col-span-3 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                                        </div>

                                        <div className='w-full h-8 lg:mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>

                                         </div>

                           <div className=" w-full bg-white  mx-auto md:text-2xl text-gray-900 pt-10 rounded">

                        {/*    	<!--content body--> */}
                            <div className="w-full px-10 lg:mx-6 pb-2">
                            <div className='w-full h-8 mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-6 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-3 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>
              <div className='w-full h-8 mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-8 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-1 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>
              <div className='w-full h-8 mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>
                            </div>
                                </div>



   </div>
                  <div className=" lg:px-24 w-11/12 shadow-sm h-96 lg:ml-20 mt-6">
                  <div className='flex items-center justify-center w-full bg-gray-100 h-full'>
                <BsImageAlt className='text-gray-50 h-12 w-12'/>
                </div>
                    </div>

   </div>
</div>
</div>
</>
}
        <Footer/>
        <Alert/>
    </Layout>
  )
}

const mapStateToProps = state => ({
    post : state.portfolio.post,
})

export default connect(mapStateToProps,{
    get_portfolio,
})(PostDetail)