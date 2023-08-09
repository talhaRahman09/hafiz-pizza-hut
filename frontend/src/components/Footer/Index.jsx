import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import footerLogo from '../../assets/Images/Logo.png'
const Footer = () => {
    return (
        <div className="container-fluid px-0  mt-5 pt-md-3 bgFooter">
            <div className="container">
                <div className="row g-3 justify-content-between">
                    <div className="col-md-4 p-2">
                        <div className="footerLogoHolder">
                            <img src={footerLogo} alt="" />
                        </div>
                        <p className='my-3'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                        <div className="socialLinks d-flex align-items-center">
                            <span><i className='bi bi-instagram fs-3'></i></span>
                            <span><i className='bi bi-instagram fs-3'></i></span>
                            {/* need Icons and styling  */}
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="HeadingFooter">
                            <h5 className='fw-bold'>Important Links</h5>
                        </div>
                        <p className='my-3'>
                            <NavLink to="/about-us" className='text-decoration-none'>About Us</NavLink>
                        </p>
                        <p>
                            <NavLink to="/contact" className='text-decoration-none'>Contact Us</NavLink>
                        </p>
                        <p>
                            <NavLink href="#" className='text-decoration-none'>Agent Contact</NavLink>
                        </p>
                        <p>
                            <NavLink href="#" className='text-decoration-none'>Services</NavLink>
                        </p>
                        <div className="socialLinks d-flex align-items-center">
                            <span><i className='bi bi-instagram fs-3'></i></span>
                            <span><i className='bi bi-instagram fs-3'></i></span>
                            {/* need Icons and styling  */}
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="HeadingFooter">
                            <h5 className='fw-bold'>Get In Touch</h5>
                        </div>
                        <p className='my-3'>
                            Question or feedback? We’d love to hear from you.
                        </p>
                        <div class=" mb-3">
                            <input class="form-control  EmailFooter" type="text" placeholder="Your Email" aria-label=".form-control-lg example" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer