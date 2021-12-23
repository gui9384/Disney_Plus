import React from 'react';
import Header  from './components/Header.js'
import Home from './components/Home.js';
import Details from './components/Details.js';
import Login from './components/Login.js';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <Routes>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Details" element={<Details/>} />
            <Route path="/"element={<Home/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
