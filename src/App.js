// Rutas
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AllRoutes from "hocs/routes/Routes";

// Helmet
import {Helmet, HelmetProvider} from "react-helmet-async"

// Redux Store
import store from "store";
import { Provider } from "react-redux";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
      <title>Gaston Franco</title>
      <meta
      name="description"
      content="Gaston Franco, Data Scientist and Python Developer"
    />
    <meta name="keywords" content="portfolio personal de gaston franco, cientifico de datos y desarrollador web con python" />
    <link rel="canonical" href="https://www.gfranco.com/" />
     <meta name="robots" content="all"/>
     <meta name="author" content="GastonFranco" />
     <meta name="publisher" content="GastonFranco" />
      </Helmet>
    <Provider store={store}>
      <Router>

    <AllRoutes/>

      </Router>
    </Provider>

    </HelmetProvider>
  );
}

export default App;
