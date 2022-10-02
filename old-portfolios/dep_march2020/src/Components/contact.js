import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className={"section-dark"}>
                <div className="section-content" id={"section3"}>
                    <h1>Contact Me</h1>
                    <div className="social-links">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/samrajmoorjani/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="http://github.com/smoorjani" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Freecodecamp */}
                        <a href="mailto:moorjanisamraj@gmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;