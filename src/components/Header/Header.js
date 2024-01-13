import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        SHIV
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item header-line">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item header-line">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item header-line">
                                <Link className="nav-link active" to="/service">Service</Link>
                            </li>
                            <li className="nav-item header-line">
                                <Link className="nav-link active" to="/contact">Contact Us</Link>
                            </li>
                            {/* Add more items as needed */}
                        </ul>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary'><Link to="/login">Login</Link></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
