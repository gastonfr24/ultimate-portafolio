
import {useEffect} from "react"
import { connect } from "react-redux"
import { get_prices } from "redux/actions/prices/prices"

// Components
import Grafico from "components/ethGraph/Grafico"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"

// Details
import { RingLoader } from "react-spinners";


function EthGraph({
    get_prices,
    real_price,
    pred_price
}) {
  
      
      useEffect(() => {
        get_prices()
      }, [])

    return (
        <>
        <Navbar/>
        <div className="xl:w-full my-24 w-11/12 mx-auto">
            <div className="my-8">
                <h1 className="text-center font-gilroy-semibold text-xl lg:text-3xl text-gray-800">Predicción del precio de Ethereum mediante una red neuronal LSTM</h1>
                <p className="w-3/5 mx-auto text-center font-gilroy-medium text-sm lg:text-lg mt-4 text-gray-600">En este proyecto se creo una red neuronal recurrenete que se entrena todos los meses con nuevos datos de forma
                    automatica con AWS Lambda y SageMaker.
                </p>
            </div>
    <div className="w-8/12 mx-auto bg-gray-900 p-4 rounded-xl transition duration-700">
     {real_price && pred_price ? <Grafico real_price={real_price} pred_price={pred_price}/>:
     <div className="flex items-center justify-center m-6 p-8">
             <RingLoader
        className="my-10"
            loading={true}
            color="#f2f2f2"
            size={90}
            />
     </div>
     }
    </div>
    </div>
    <Footer/>
    </>
  )
}

const mapStateToProps = state =>({
    real_price: state.prices.real_price,
    pred_price: state.prices.pred_price,
    })

export default connect(mapStateToProps,{
    get_prices
})(EthGraph);