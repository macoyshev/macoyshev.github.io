import React from "react";
import { ReactElement } from 'react'

import '../SocialNetworks.css'


const Telegram: React.FC = (): ReactElement => {
    return (
        <div className='social-network'>
            <img src={require('./telegram.png')} alt="telegram-logo"/>
            <a href='https://t.me/Macoyshev'>Telegram</a>
        </div>
    )
}


export default Telegram