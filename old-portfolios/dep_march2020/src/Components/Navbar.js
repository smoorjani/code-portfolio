import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a 
                href="https://docs.google.com/document/d/19UJ3voazJUr8UzZZLHy5K9lLix1CSU6U7LB_RrSOP6U/edit?usp=sharing" 
                rel="noopener noreferrer" 
                target="_blank">
                  Resume
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="https://github.com/smoorjani" 
                rel="noopener noreferrer" 
                target="_blank">
                  GitHub
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="https://www.linkedin.com/in/samrajmoorjani/" 
                rel="noopener noreferrer" 
                target="_blank">
                  LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
