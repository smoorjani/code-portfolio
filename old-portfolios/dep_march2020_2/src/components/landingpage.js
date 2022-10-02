import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://i.ya-webdesign.com/images/avatar-png-1.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Samraj Moorjani</h1>
                            <hr/>

                            <p>CS @ Illinois | Incoming CapitalOne Intern</p>

                            {/* <div className="social-links">
                                <a href="https://github.com/smoorjani" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" /> 
                                </a> 
                                <a href="https://www.linkedin.com/in/samrajmoorjani/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" /> 
                                </a>
                            </div> */}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;