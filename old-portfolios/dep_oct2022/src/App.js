import React, { Component } from "react";
import "./App.css";
import About from "./Components/aboutme";
import Title from "./Components/title"
import Footer from "./Components/footer"
import Projects from "./Components/projects"

import Particles from "react-particles";
import particleParams from './Components/particlesConfig';

class App extends Component {
  render() {
    return (
      <div className="App" id="particles" style={{ position: 'relative', overflow: "hidden" }}>
        <div style={{ position: 'absolute'}}>
            <Particles height="100vh" width="100vw" params={particleParams} />
        </div>

        <Title />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
