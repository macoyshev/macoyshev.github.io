import React from "react"
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='menu'>
            <a href="/#" className="menu__link">Home</a>
            <a href="/#" className="menu__link">Portfolio</a>
            <a href="/#" className="menu__link">Contacts</a>
        </nav>
    );
}


export default Navbar