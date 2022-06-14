import React from "react";
import { ReactElement } from "react";

import "./styles/App.css"
import Navbar from './componets/navbar/Navbar'
import Greeting from './componets/greeting/Greeting'

function App(): ReactElement {
  return (
    <div className='app'>
      <Navbar/>
      <Greeting/>
    </div>
  );
}

export default App;
