import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/Images/Logo.png'
import logistic from '../../assets/Images/logistics.png'
import pickup from '../../assets/Images/pickup.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bgColor">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <button type="button" className="btn btnSignIn d-md-block d-lg-none  d-none   ms-auto">Register / Sign In</button>
                <span className="ms-auto btnBucket onSmallScreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#E5BE69" className="bi bi-bucket" viewBox="0 0 16 16">
                        <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
                        <text x="50%" y="64%" dy=".3em" textAnchor="middle" fontSize={6} fontWeight="bold">0</text>
                    </svg>
                </span>
                <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-md-between justify-content-lg-between" id="navbarSupportedContent">
                    <div className="btn-group mt-lg-0 mt-3 nav-link text-center ms-md-5" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btnDelivery btn-outline-primary" htmlFor="btnradio1">
                            <img src={logistic} className="me-2" alt />
                            Delivery
                        </label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btnPickUp btn-outline-primary" htmlFor="btnradio2">
                            <img src={pickup} className="me-2" alt />
                            Pick Up
                        </label>
                    </div>
                    <div className="nav-link text-center mt-lg-0 mt-3">
                        <button type="button" className="btn btnLocation ms-md-5 ">
                            <span className="me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                            </span>
                            Select Location
                            <span className="ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="nav-link my-md-0 my-3 text-center d-flex justify-content-center">
                        <span className="me-5 btnBucket d-lg-block d-none " type="button" >
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#E5BE69" className="bi bi-bucket" viewBox="0 0 16 16">
                                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
                                <text x="50%" y="64%" dy=".3em" textAnchor="middle" fontSize={6} fontWeight="bold">0</text>
                            </svg>
                        </span>
                        <NavLink to="/sign-up" type="button" className="btn btnSignIn d-md-none d-lg-block d-block  mt-lg-0 mt-3  me-2">Sign Up</NavLink>
                        <NavLink to="/sign-in" type="button" className="btn btnSignIn d-md-none d-lg-block d-block  mt-lg-0 mt-3  me-2">Sign In</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header