import React from 'react'
import { BsImageAlt } from "react-icons/bs"

function SqueletonCard() {
  return (
    <li 
    className="bg-gray-50 max-w-5xl rounded-lg drop-shadow-2xl transition duration-300 ease-in-out mb-6"
        >
            <div className='h-60 grid grid-cols-12 animate-pulseslow'>
              {/* imagen */}
              <div className='col-span-4 mr-6'>
                <div className='flex items-center justify-center w-full bg-gray-100 h-full'>
                <BsImageAlt className='text-gray-50 h-12 w-12'/>
                </div>
              </div>

              {/* contenido */}
            <div className='col-span-8 mr-6'>
              {/* titulo */}
              <div className='w-full h-10 mt-4 grid grid-cols-12 gap-x-4'>
                <div className='col-span-5 w-full h-10 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-10 bg-gray-100 rounded-full'></div>
                <div className='col-span-3 w-full h-10 bg-gray-100 rounded-full'></div>
              </div>

              {/* info */}
              <div className='w-full h-8 mt-4 grid grid-cols-12 gap-x-4 ml-4'>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>

              {/* descripción */}

              <div className='w-full h-10 mt-9 grid grid-cols-12 gap-x-4'>
                <div className='col-span-5 w-full h-7 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-7 bg-gray-100 rounded-full'></div>
                <div className='col-span-3 w-full h-7 bg-gray-100 rounded-full'></div>
              </div>
              <div className='w-full h-10 grid grid-cols-12 gap-x-4'>
                <div className='col-span-7 w-full h-7 bg-gray-100 rounded-full'></div>
                <div className='col-span-3 w-full h-7 bg-gray-100 rounded-full'></div>
              </div>

            </div>
            </div>
            
          </li>
  )
}

export default SqueletonCard