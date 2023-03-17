import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/bicycle.png'



function Footer() {
    return (
        <>
            <div id="footer" className="text-white">
                <div className="row container-xl pt-5 mx-auto">

                    <div className='col-12 col-lg col-md mx-auto'>
                        <NavLink className="navbar-brand" to="/"><img className="mb-3" src={logo} alt="logo" style={{ width: '130px' }} /></NavLink>
                        <NavLink>
                        <p className="mt-3"><i class="mx-2 nav-link fa-xl nav-item fa-brands fa-facebook"></i>
                        <i class=" mx-2 nav-link nav-item fa-xl fa-brands fa-instagram "></i>
                        <i class="mx-2 nav-link nav-item fa-xl fa-brands fa-youtube"></i>
                        <i class="mx-2 nav-link nav-item fa-xl fa-brands fa-twitter"></i>
                        </p>
                        </NavLink>

                    </div>

                    <div className="col-12 col-lg col-md mx-auto footer2">
                        <h3>Useful Links</h3>
                        <ul class="list-unstyled mt-3">
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink className="nav-link text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink className="nav-link text-white" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink className="nav-link text-white" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink className="nav-link text-white" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg col-md mx-auto footer3">
                        <h3>Our Collection</h3>
                        <ul class="list-unstyled mt-3">
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink to={{ pathname: `/shop/road`}} className="nav-link text-white">Road Bikes</NavLink>
                            </li>
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink to={{ pathname: `/shop/city`}} className="nav-link text-white">City Bikes</NavLink>
                            </li>
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink to={{ pathname: `/shop/mountain`}} className="nav-link text-white">Mountain Bikes</NavLink>
                            </li>
                            <li className="nav-item mx-2 fs-6 fw-normal">
                                <NavLink to={{ pathname: `/shop/electric`}} className="nav-link text-white">Electric Bikes</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row container mx-auto'>
                    <p className="col text-center lh-1">Copyright © 2023 Cycle Store</p>
                </div>
            </div>
        </>
    )
}

export default Footer;