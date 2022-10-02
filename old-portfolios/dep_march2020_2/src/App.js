import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (

    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Samraj Moorjani" scroll>
              <Navigation>
                  <a href="https://docs.google.com/document/d/19UJ3voazJUr8UzZZLHy5K9lLix1CSU6U7LB_RrSOP6U/edit?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  {/* Github */}
                  <a href="https://github.com/smoorjani" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" /> Github 
                  </a> 
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/samrajmoorjani/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" /> LinkedIn 
                  </a>
              </Navigation>
          </Header>
          {/* 
          <Drawer title="Samraj Moorjani">
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <a href="https://github.com/smoorjani" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" /> Github 
                  </a> 
                  <a href="https://www.linkedin.com/in/samrajmoorjani/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" /> LinkedIn 
                  </a>
              </Navigation>
          </Drawer> 
          */}
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
  );
}

export default App;
