import './App.css';
import Navbar from './components/Navbar';
import Textinputs from './components/Textinputs';
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
      <Router>
        <Navbar style={styleText} darkmode={handdleMode} />
        <Switch>
          <Route path="/about">
            <About style={styleText} />
          </Route>
          <Route path="/">
            <Textinputs style={styleText} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
