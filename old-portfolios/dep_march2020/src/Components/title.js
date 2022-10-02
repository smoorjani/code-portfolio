import React, { Component } from 'react';
import { Button } from 'react-mdl';

class Title extends Component {
    render() {
        return (
            <div>
                <div className={"section-dark"}>
                    <div className="title-content">
                        <h1>Samraj Moorjani</h1>
                    </div>
                </div>

                <div className={"section"}>
                    <div className="button-content">
                        <Button ripple style={{border: "1px solid black"}} href="https://github.com/smoorjani" target="_blank">GitHub</Button>
                        <Button ripple style={{border: "1px solid black"}} href="https://docs.google.com/document/d/19UJ3voazJUr8UzZZLHy5K9lLix1CSU6U7LB_RrSOP6U/edit?usp=sharing" target="_blank">Resume</Button>
                        <Button ripple style={{border: "1px solid black"}} href="https://www.linkedin.com/in/samrajmoorjani/">LinkedIn</Button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Title;