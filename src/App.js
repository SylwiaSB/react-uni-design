import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";

import './App.css';



function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/projects" exact element={<Projects/>} />
                <Route path="/about" exact element={<About/>} />
                <Route path="/contact" exact element={<Contact/>} />
                <Route path="/sign-up" exact element={<SignUp/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
