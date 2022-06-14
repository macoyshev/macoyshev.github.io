import React from "react"

import './Navbar.css'
import Github from '../social_networks/github/Github'
import Gmail from '../social_networks/gmail/Gmail'
import Telegram from '../social_networks/telegram/Telegram'


const handleClick = () => {
    let contacts = document.getElementById('contacts')!

    if (contacts.style.opacity === '1') contacts.style.opacity = '0'

    else contacts.style.opacity = '1'
}

const Navbar = () => {
    return (
        <nav className='menu'>
            <button className="menu__link">Home</button>
            <button className="menu__link">Portfolio</button>
            <button className="menu__link" onClick={handleClick}>Contacts</button>
            <div className="contacts" id="contacts">
                <Github />
                <Gmail />
                <Telegram />
            </div>  
        </nav>
    )
}


export default Navbar