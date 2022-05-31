import "./styles/App.css"
import Navbar from './componets/navbar/Navbar.jsx'
import Greeting from './componets/greeting/Greeting.jsx'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Greeting/>
    </div>
  );
}

export default App;
