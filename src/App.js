import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import "./styles/app.css";
import Background from "./components/Background.js";
import PlayerStats from "./components/PlayerStats.js";


const App = () => {
  return (
    <Router>
    <Nav/>
    <Background/>
    <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes> 
     <PlayerStats/>
    </Router>
  );
}

export default App;
