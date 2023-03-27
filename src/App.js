import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';

import './App.css';



function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
