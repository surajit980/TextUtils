import './App.css';
import Navbar from './components/Navbar';
import Textinputs from './components/Textinputs';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState(false)

  const handdleMode = () => {
    if (mode) {
      setmode(false)
      document.body.style.backgroundColor = "white"
    }
    else {
      setmode(true)
      document.body.style.backgroundColor = "#000000"
    }
  }
  const styleText = mode ? "dark" : "light"

  return (
    <>
      <Navbar style={styleText} darkmode={handdleMode} />
      <Textinputs style={styleText} />
    </>
  );
}

export default App;
