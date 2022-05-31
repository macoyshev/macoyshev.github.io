import '../SocialNetworks.css'

const Github = ()=> {
    return (
        <div className="social-network">
            <img src={require('./github.png')} alt='github-logo' className='social-network__logo'></img>
            <span>Github</span>
        </div>
    );
}


export default Github