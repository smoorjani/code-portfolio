import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div className={"section-dark"}>
                <div className="section-content" id={"section2"}>
                    <Grid className="about-grid">
                        <Cell col={6} className="about-cell">
                            <img 
                                src="https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/68481452_180629962961363_8843530420596244480_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=V2LAVWrdbEUAX85TZJr&_nc_ht=scontent.faus1-1.fna&oh=8b2c61dcfa6780bca40270f0bcbbe088&oe=5E989C2F"
                                
                                alt="avatar"
                                className="avatar-img"
                            />
                        </Cell>
                        <Cell col={6}>
                            <h1>About Me</h1>
                            <p>I am a freshman in Computer Science at the University of Illinois at Urbana-Champaign.
                            I am interested in the study of intelligence and how we can replicate it through computers.
                            I enjoy understanding the nuances and underlying meanings in how we communicate and I'd like to pursue a career in NLP.
                            I have experience with multiple deep learning frameworks (TensorFlow, Keras, etc.) along with database tools 
                            (SQL, MongoDB, etc.), web frameworks (React, Bootstrap, etc.), and more.</p>
                        </Cell>
                        
                    </Grid>
                </div>
            </div>
        )
    }
}

export default About;