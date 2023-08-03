import React from 'react'
import './Header.css'
import Logo from '../../assets/Images/Logo.png'
import logistics from '../../assets/Images/logistics.png'
import pickup from '../../assets/Images/pickup.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Store } from '../../pages/Store'



const Header = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bgColor">
        <div className="container pb-2 mx-auto">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" className='logo' />
          </Link>
          <button type="button" className="btn btnSignIn d-md-block d-lg-none  d-none   ms-auto">Register / Sign In</button>
          <span className='ms-auto btnBucket onSmallScreen' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#E5BE69" className="bi bi-bucket" viewBox="0 0 16 16">
              <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
              <text x="50%" y="64%" dy=".3em" textAnchor="middle" fontSize="6" fontWeight="bold">0</text>
            </svg>
          </span>

          <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-md-between justify-content-lg-between" id="navbarSupportedContent">
            <div className="btn-group mt-lg-0 mt-3 nav-link text-center ms-md-5" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />

              <label className="btn btnDelivery btn-outline-primary" htmlFor="btnradio1">
                <img src={logistics} className="me-2" alt="" />
                Delivery
              </label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
              <label className="btn btnPickUp btn-outline-primary" htmlFor="btnradio2">
                <img src={pickup} className="me-2" alt="" />
                Pick Up
              </label>
            </div>

            <div className='nav-link my-md-0 my-3 text-center d-flex justify-content-center'>
              <span className='me-5 btnBucket d-lg-block d-none ' type="button"  >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#E5BE69" className="bi bi-bucket" viewBox="0 0 16 16">
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
                  {cart.cartItems.length > 0 && (
                    <text x="50%" y="64%" dy=".3em" textAnchor="middle" fontSize="6" fontWeight="bold">{cart.cartItems.length}</text>
                  )}
                </svg>
              </span>

              <button type="button" className="btn btnSignIn d-md-none d-lg-block d-block  mt-lg-0 mt-3  me-2">Register / Sign In</button>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header