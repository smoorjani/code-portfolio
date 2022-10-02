import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class About extends Component {
    render() {
        return (
            <div className={"section-dark"}>
                <div className="section-content" id={"section2"}>
                    <Grid className="about-grid">
                        <Cell col={6} className="about-cell">
                            <img 
                                src={process.env.PUBLIC_URL + '/profile_circle.png'}
                                alt="avatar"
                                className="avatar-img"
                            />
                        </Cell>
                        <Cell id="particles" col={6}>
                            <h1>About Me</h1>
                            <p>
                            I am a MS student in Computer Science at UIUC advised by Hari Sundaram. I graduated with my Bachelor's in 
                            Computer Science from UIUC as well. I am broadly interested in natural language generation (NLG), specifically
                            the control of NLG based on certain attributes. My recent work has applied this interest in the study of the
                            linguistic and psycholinguistic characteristics of persuasive/memorable messaging and how we can generate more
                            persuasive/memorable text.
                            </p>
                            
                            <p>
                            Previously, I interned at Meta on the Ads Responsibility and Privacy team, Facebook on the AI Commerce Multi-
                            modal team, and Capital One on the NLP services team.
                            </p>
                        </Cell>
                        
                    </Grid>
                </div>
            </div>
        )
    }
}

export default About;
