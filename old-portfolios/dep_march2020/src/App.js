import React, { Component } from "react";
import "./App.css";
import About from "./Components/aboutme";
import Title from "./Components/title"
import Footer from "./Components/footer"
import Projects from "./Components/projects"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
