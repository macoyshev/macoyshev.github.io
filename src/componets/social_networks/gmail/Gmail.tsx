import React from "react";
import { ReactElement } from 'react'

import '../SocialNetworks.css'


const Gmail: React.FC = (): ReactElement=> {
    return (
        <div className='social-network'>
            <img src={require('./google.png')} alt="gmail-logo"/>
            <a href='mailto:make.oynoshev@gmail.com'>Gmail</a>
        </div>
    )
}


export default Gmail