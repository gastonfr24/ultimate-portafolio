import { Waypoint } from "react-waypoint";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import axios from "axios";

import { PulseLoader } from "react-spinners"

// Alert
import { setAlert } from "redux/actions/alerts/alert";
import 'animate.css/animate.min.css';

// Icons
import { MdMail } from "react-icons/md"
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import Alert from "components/alerts/alert";
import { connect } from "react-redux";

function Contact({setAlert}) {

  // Form
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const {
  name,
  email,
  subject,
  message,
    } = formData

  const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

const onSubmit = (e) =>{
    e.preventDefault()
      setLoading(true)
      const config ={
        header:{
          'Content-Type' : 'application/json'
        }
      }

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      formData.append('subject', subject)
      formData.append('message', message)

      const fetchData = async() =>{
        try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, formData, config)
        
      if(res.status === 200){
        setLoading(false)
        setAlert('Se ha enviado el mail', 'text-green-500', CheckCircleIcon) 
         setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        }) 
       
      }else{
        setLoading(false)
         setAlert('No se ha podido enviar el mail', 'text-rose-500', MdMail) 
      }
      }catch{
        setLoading(false)
        setAlert('No se ha podido enviar el mail', 'text-rose-500', MdMail)
      }
      }
      fetchData()

  }


    // Animation
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
    <motion.div initial={{opacity: 0 }} animate={controls}>
      
        <h2 className="text-3xl text-center font-gilroy-semibold mb-12">
        Contact
        </h2>

        <form 
         onSubmit={e=>onSubmit(e)}
         className="grid grid-cols-1 gap-y-6 lg:w-1/2 w-full mx-auto">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-violet-cus focus:ring-violet-cus"
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-violet-cus focus:ring-violet-cus"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="full-name" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-violet-cus focus:ring-violet-cus"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={e=>onChange(e)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-violet-cus focus:ring-violet-cus"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>

              <div className="ml-4 mt-2 flex-shrink-0">
          {
            loading  ? 
            <div
            className="relative inline-flex items-center rounded-md border border-transparent bg-violet-cus px-4 py-2 text-sm font-medium text-white shadow-sm">
          <span className='px-2 flex'>
             Enviando <div className="flex">
              <PulseLoader size={4} color="white" className="mt-2 ml-0.5" />
              </div>
            </span>
          </div>
          :
          <button
            type="submit"
            className="relative inline-flex items-center rounded-md border border-transparent bg-violet-cus px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-violet-cus focus:ring-offset-2"
          >
            Enviar mail
          </button>
          }
        </div>

        </form>
        

            {/* Alerts */}
            {loading ?
      <div className="fixed left-0 bottom-4 z-10 w-72 animate__animated animate__bounceInUp">
      <div className=" mx-4 pb-0.5 bg-white rounded-lg drop-shadow-xl">
      <h1 className=" pt-2 px-10 -mb-3 text-orange-cus">Enviando email</h1>
      <div className=" loader-line"/>
      </div>
    </div>
      :
      <></>
    }
    <Alert/>

          </motion.div>
      </Waypoint>
  )
}

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, {
  setAlert
})(Contact);