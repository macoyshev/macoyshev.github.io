import './Greeting.css'


const Greeting = () => {
    return (
        <div className='greeting'>
            <div className='greeting__text'>
                <h1>Hi, I'm Maksim</h1>
                <h3>A Web developer</h3>
            </div>
            <div className='greeting__image'>
                <img src="logo.png" alt="logo" />
            </div>
        </div>
    );
}


export default Greeting