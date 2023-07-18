import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cards from '../../components/Cards'

const index = () => {
  return (
    <div className='ProductDetailWrapper'>
        <Header/>
            <div className="container">
            <h2 className='my-md-4 my-3 fw-bold text-center'>Top Selling</h2>
              <div className="row g-md-4 g-3">
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 justify-content-center d-flex">
                  <Cards/>
                </div>
              </div>
            </div>
        <Footer/>
    </div>
  )
}

export default index