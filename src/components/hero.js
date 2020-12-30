import React from "react";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Home from "./home";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Hero() {
    return(
        <Router>
        <div >
            <nav className="navbar" >
                <div className="links container" >
                    <Link to="/" >HOME</Link>
                <Link to="/projects" >PROJECTS</Link>
                    <Link to="/about" >ABOUT</Link>
                    <Link to="/contact" >CONTACT</Link>
                </div>
                    
                   
               
            </nav>
           
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </div>
    </Router>
    );
}

export default Hero;