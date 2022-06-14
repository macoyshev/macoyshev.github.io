import React from "react";
import { ReactElement } from 'react';

import '../SocialNetworks.css'

const Github: React.FC = (): ReactElement => {
    return (
        <div className="social-network">
            <img src={require('./github.png')} alt='github-logo' className='social-network__logo'></img>
            <a href='https://github.com/macoyshev'>Github</a>
        </div>
    );
}


export default Github