import React from "react";
import { useState, useEffect, ReactElement} from 'react'

import './Greeting.css'


const parseMediaType = (sourcePath: string): string => {
    let srcPathDetails: Array<string> = sourcePath.split('.')
    
    return srcPathDetails[srcPathDetails.length - 1]
}

const getDogImage = async (): Promise<string> => {
    let res: Response = await fetch('https://random.dog/woof.json')
    let data: any = await res.json()
    
    let type = parseMediaType(data.url)

    while (type === 'mp4') {
        res = await fetch('https://random.dog/woof.json')
        data = await res.json()
        type = parseMediaType(data.url)
    }

    return data.url 
}

const Greeting: React.FC = (): ReactElement => {
    const [dogImgUrl, setDogImgUrl] = useState('/public/logo.png')
    useEffect(() => {
        getDogImage()
            .then(url => setDogImgUrl(url))
    }, [])

    return (
        <div className='greeting'>
            <div className="greeting__image">
                <img src={dogImgUrl} alt=""/>
            </div>

            <div className='greeting__text'> 
                <h1>Hi, I'm Maksim</h1>
                <h3>A Web developer</h3>
            </div>

        </div>
    );
}


export default Greeting