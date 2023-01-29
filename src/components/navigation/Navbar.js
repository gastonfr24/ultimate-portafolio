import {Link, NavLink} from "react-router-dom";

import { useState } from "react";
import { SkewLoader } from "react-spinners";

// Icons
import {AiOutlineMenu} from "react-icons/ai"
import {ImCross} from "react-icons/im"
import { HiUser } from "react-icons/hi"
import { MdEmail } from "react-icons/md"
import { BsBriefcaseFill } from "react-icons/bs"

// Headles UI
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

// CV
import CV from 'assets/pdf/CV Gaston Franco.pdf'

const solutions = [
  {
    name: 'Proyectos',
    description: 'Measure actions your users take',
    href: '/portfolio',
    icon: BsBriefcaseFill,
  },

  {
    name: 'Sobre Mi',
    description: 'Keep track of your growth',
    href: '/nosotros',
    icon: HiUser,
  },
  {
    name: 'Contacto',
    description: 'Keep track of your growth',
    href: '/contacto',
    icon: MdEmail,
  },
]

function Navbar() {

  const [open, setOpen] = useState(false)

  const [loading, setLoading] = useState(true)

  window.onscroll = function() {scrollFunction()}

  function scrollFunction(params) {
    if(document.getElementById('navbar')){
      if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById('navbar').classList.remove('bg-transparent');
        document.getElementById('navbar').classList.add('bg-white');
        document.getElementById('navbar').classList.add('shadow-navbar');


      } else {
        document.getElementById('navbar').classList.remove('bg-white');
        document.getElementById('navbar').classList.remove('shadow-navbar');
        document.getElementById('navbar').classList.add('bg-transparent');
      }
    }
  }


  return (
    <nav id='navbar' className="w-full py-4 top-0 fixed z-40 transition-colors duration-300 ease-in-out">
      
      <div className="px-4 sm:px-6 pt-2">
      {/* Desktop Navbar */}
        <div className="px-2 -ml-4 hidden lg:flex -mt-2 flex-wrap items-center justify-between sm:flex-nowrap">
          <Link to='/' className="ml-6 mt-1 pb-3">

            
            <h2 className=" font-gilroy-semibold text-2xl text-black">G Franco</h2>
          </Link>
          <div className=" ml-4 flex-shrink-0 mr-2">
          <NavLink to="/portfolio" className="uppercase text-xs mx-4 inline-flex font-gilroy-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-violet-cus transition duration-500 ease-in-out">
              Portfolio
            </NavLink>
            <NavLink to="/about" className="uppercase text-xs mx-4 inline-flex font-gilroy-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-violet-cus transition duration-500 ease-in-out">
              Sobre Mi
            </NavLink>
            <NavLink to="/contacto" className="uppercase text-xs mx-3 ml-4 inline-flex font-gilroy-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-violet-cus transition duration-500 ease-in-out">
              Contacto
            </NavLink>

            <a
        href={CV}
        download
        className="inline-flex items-center rounded-[4px] border border-transparent bg-gray-800 pl-3 pr-2 pb-1 pt-1.5  text-xs uppercase font-gilroy-medium text-white shadow-sm hover:bg-violet-cus transition duration-300 ease-in-out ml-6 focus:outline-none focus:ring-2 focus:ring-violet-cus focus:ring-offset-2"
      >
        Descargar CV
        <SkewLoader
        className="ml-2 h-5 w-5"
            loading={loading}
            color="#f2f2f2"
            size={6}
            />
      </a>
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="px-2 md:px-14 -ml-4 lg:hidden flex -mt-2 flex-wrap items-center justify-between sm:flex-nowrap">
          <Link to='/' className="ml-4 mt-2">

            
          <h2 className=" font-gilroy-semibold text-2xl text-black">G Franco</h2>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
         
          <div className="fixed top-16 w-full max-w-sm px-4">

    </div>

    <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                focus:ring-none focus:outline-none`}
            >
         <button className=""
         >
          {
            open ?         
            <ImCross className="text-gray-900 text-4xl hover:text-violet-cus"/>
            :
            <AiOutlineMenu className="text-gray-900 text-4xl hover:text-violet-cus"/>
          }
         </button>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className=" absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon className="text-violet-cus" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar