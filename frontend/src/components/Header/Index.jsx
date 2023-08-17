import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/Images/Logo.png'
import logistic from '../../assets/Images/logistics.png'
import pickup from '../../assets/Images/pickup.png'
import { useAuth } from '../../context/auth'
const Header = () => {
    const [auth, setAuth] = useAuth()
    const logOut = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        })
        localStorage.removeItem("auth")
    }
    return (
        <nav className="navbar navbar-expand-lg bgColor">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>

                <NavLink to="/sign-up" type="button" className="btn btnSignIn d-md-block d-lg-none  d-none   ms-auto">Sign Up</NavLink>
                <NavLink to="/sign-in" type="button" className="btn btnSignIn d-md-block d-lg-none  d-none   ms-auto">Sign In</NavLink>
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
                            <img src={logistic} className="me-2" alt="logistic" />
                            Delivery
                        </label>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btnPickUp btn-outline-primary" htmlFor="btnradio2">
                            <img src={pickup} className="me-2" alt="pickup" />
                            Pick Up
                        </label>
                    </div>

                    <div className="nav-link my-md-0 my-3 text-center d-flex justify-content-center align-items-center">
                        <span className="me-4 btnBucket d-lg-block d-none " type="button" >
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="#E5BE69" className="bi bi-bucket" viewBox="0 0 16 16">
                                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
                                <text x="50%" y="64%" dy=".3em" textAnchor="middle" fontSize={6} fontWeight="bold">0</text>
                            </svg>
                        </span>
                        {!auth.user ? (
                            <>
                                <NavLink to="/sign-up" type="button" className="btn btnSignIn d-md-none d-lg-block d-block  mt-lg-0 mt-3  me-2">Sign Up</NavLink>
                                <NavLink to="/sign-in" type="button" className="btn btnSignIn d-md-none d-lg-block d-block  mt-lg-0 mt-3  me-2">Sign In</NavLink>
                            </>
                        ) : (
                            <li className="nav-item dropdown d-flex align-items-center">
                                <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {auth?.user.name}
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className='dropdown-item px-0 my-0'>
                                        <NavLink to="/dashboard" type="button" className="dropdown-item">Profile</NavLink>
                                    </li>
                                    <li className='dropdown-item px-0 my-0'>
                                        <NavLink to="/" onClick={logOut} type="button" className="dropdown-item">LogOut</NavLink>
                                    </li>
                                </ul>
                            </li>


                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header