import './styles.css'
import {ReactComponent as Logo} from './logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        
        <nav className="main-navbar">
           <Logo/> 
           <Link to="home" className="logo-text">Ds Delivery</Link>
        </nav>
    )
}

export default Navbar