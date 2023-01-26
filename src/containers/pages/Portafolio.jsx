// Components
import Header from 'components/portfolio/Header'
import Navbar from 'components/navigation/Navbar'
import SqueletonCard from 'components/loaders/SqueletonCard';
import PortfolioList from 'components/portfolio/PortfolioList';

// Requests
import { get_portfolio_list, get_portfolio_list_page, } from 'redux/actions/portfolio/portfolio'

// Hooks
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from 'hocs/layouts/Layout';
import { Helmet } from 'react-helmet-async';

function Portafolio({
  get_portfolio_list,
  get_portfolio_list_page,
  posts,
  count,
}) {

  // Lamado a la API
  useEffect(() => {
    window.scrollTo(0, 0);
    get_portfolio_list();
  }, []);

  return (
    <div className='pt-16'>
      <Helmet>
      <title>Gaston Franco | Portfolio</title>
      <meta
      name="description"
      content="Gaston Franco, Data Scientists and Python Developer"
    />
    <meta name="keywords" content="portafolio personal de gaston franco, cientifico de datos y desarrollador web con python" />
    <link rel="canonical" href="https://www.gfranco.com/" />
     <meta name="robots" content="all"/>
     <meta name="author" content="GastonFranco" />
     <meta name="publisher" content="GastonFranco" />
      </Helmet>
        <Navbar/>
        <Layout>
        <Header/>
        <div className='pt-6'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl my-10">
                  {
                    posts ? 
                    <>
                    <PortfolioList posts={posts&&posts} get_portfolio_list_page={get_portfolio_list_page} count={count}/>
                    </>
                    :
                    <div className="overflow-hidden px-8">
                    <ul role="list" className="">
                      <SqueletonCard/>
                      <SqueletonCard/>
                      <SqueletonCard/>
                    </ul>
                  </div>
                  }
          </div>
        </div>
        </div>
        </Layout>
    </div>
  )
}

const mapStateToProps = (state) => ({
  posts: state.portfolio.portfolio_list,
  count: state.portfolio.count,
});
export default connect(mapStateToProps, {
  get_portfolio_list,
  get_portfolio_list_page
})(Portafolio);
