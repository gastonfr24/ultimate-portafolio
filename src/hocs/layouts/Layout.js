import { motion } from "framer-motion"
import { connect } from "react-redux"

function Layout({children}) {
  return (
    <motion.div
    initial={{opacity:0, transition: {duration: 0.5}}}
    animate={{opacity:1, transition: {duration: 0.5}}}
    exit={{opacity:0, transition: {duration: 0.5}}}
    >

        {children}

    </motion.div>
  )
}



const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

})(Layout)
