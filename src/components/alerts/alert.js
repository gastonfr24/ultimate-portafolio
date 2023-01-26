import { Fragment } from "react";
import { connect } from "react-redux";
import 'animate.css/animate.min.css';


 function Alert({alert}) {
    let textcolor = 'text-blue-500'
    if(alert !== null){
    textcolor =`h-6 w-6 ${alert.alertType}`
    }

    const displayAlert = () =>{
        if(alert !== null){
            return(
                <div className="fixed left-0 bottom-4 z-10 w-72 animate__animated animate__bounceInUp">
                <div className=" mx-4 pb-0.5 bg-white rounded-lg drop-shadow-xl">
                  
                <div className="py-2 flex items-center px-5"> 
                <span className="flex p-1 rounded-full bg-gray-100">
                  <alert.icon className={textcolor} aria-hidden="true"/></span>
                  <p className="ml-3 font-medium"> {alert.msg} </p>
                 </div>
                </div>
              </div>
            )
        }else{
            return(
                <Fragment>

                </Fragment>
            )
        }
    }
 
 
 
    return (
        <Fragment>
        {displayAlert()}             
        </Fragment>
  )
}

const mapStateToProps = state =>({
    alert: state.alert.alert,
});

export default connect(mapStateToProps)(Alert);

