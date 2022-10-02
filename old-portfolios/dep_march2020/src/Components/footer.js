import React, { Component } from 'react';
import { Button } from 'react-mdl';

class Footer extends Component {
    render() {
        return (
            <div className={"section-dark"}>
                <div className="title-content">
                    <p>Created by Samraj Moorjani</p>
                    <Button ripple style={{color: "white", border: "1px solid white"}} colored href="https://github.com/smoorjani/" target="_blank">Source</Button>
                </div>
            </div>
        )
    }
}

export default Footer;