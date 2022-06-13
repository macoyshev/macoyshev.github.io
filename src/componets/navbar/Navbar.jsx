import React from "react"
import './Navbar.css'
import Github from '../social_networks/github/Github.jsx'
import Gmail from '../social_networks/gmail/Gmail.jsx'
import Telegram from '../social_networks/telegram/Telegram.jsx'


const handleClick = ()=> {
    let contacst = document.getElementById('contacts')
    if (contacst.style.opacity === '1')contacst.style.opacity = 0
    else contacst.style.opacity = 1
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