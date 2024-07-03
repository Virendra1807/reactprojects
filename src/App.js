import logo from './logo.svg';
import './App.css';
import { useState } from "react";

// import Greeting from './Components/Greeting';

import { Greeting, Ching } from './Components/Greeting';
import componentClass from './Components/ClassCompo';

import CountriesList from './Components/Country';


function App() {

  // const [count, setCount] = useState(0);

  // const [toggle, setToggle] = useState(true);

  // const [text, getText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
      
        <CountriesList />

        <componentClass />

        {/* <img src={logo} className="App-logo" alt="logo" />
    
        <input value={text} placeholder='Type Something' onChange={(event)=> getText(event.target.value)}></input>
        <p>Text : {text}</p>

        <h2>Toggle Button</h2>
        <button onClick={()=> setToggle(!toggle)}>{toggle ? 'On' : 'Off'}</button>

        <p>Count is : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increase</button> <br/>
        <button onClick={()=>setCount(count-1)}>Decrease</button> <br/>
        <button onClick={()=>setCount(0)}>Reset</button> */}

        {/* <Greeting />
        <Ching name='Jayesh' /> */}

      </header>
    </div>
  );
}

export default App;
