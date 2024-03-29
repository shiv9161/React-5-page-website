import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Login from './components/Login/Login'


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="service" element={<Service />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default Router
