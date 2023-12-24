import React from 'react'
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


const Navbar = () => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg  bg-success `}>

                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-1 fst-italic" to={"/"}>Go Food</NavLink>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id='navbarNav' >
                        <ul className="navbar-nav align-items-center ">
                            <li className=" mx-5 nav-item">
                                <NavLink className="nav-NavLink active " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-5 px-5 justify-content-center text-danger">
                                <NavLink className="nav-NavLink" to={"/login"}>Log In</NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-NavLink " to={"/signup"}>Sign Up</NavLink>
                            </li>
                            

                        </ul>


                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
