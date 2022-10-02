import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG-7pf-QlXqP100Hpl6FSb1nK0m5tlGcRhCPxw3gahRgOK44bX) center / cover'}}>Rock Paper Scissors</CardTitle>
                        <CardText>A computer vision based game of rock, paper, scissors with a CNN for realtime gesture recognition. Submitted at PackHacks 2019.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/smoorjani/rock-paper-scissor" target="_blank">Github</Button>
                            <Button colored href="https://devpost.com/software/rock-paper-scissor" target="_blank">Devpost</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://i.pinimg.com/originals/c0/ef/3d/c0ef3de48f7c8eefbe0e0dd0d1ec243a.jpg) center / cover'}}>Caterpillar IoT ML Challenge</CardTitle>
                        <CardText>Submission for the 2020 Caterpillar IoT Machine Learning Analytics Challenge. Won first place at HackIllinois 2020.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/nikwalia/2020_Challenge_IOT_Analytics" target="_blank">Github</Button>
                            <Button colored href="https://devpost.com/software/2020_challenge_iot_analytics" target="_blank">Devpost</Button>
                        </CardActions>
                    </Card>
                </div>
            )       
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://www.zeemaps.com/world-of-maps/wp-content/uploads/sites/4/2013/05/ZeeMap-595069.png)'}}>LA Crime Analysis</CardTitle>
                        <CardText>A project that visually explores trends in Los Angeles crime.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/smoorjani/LA-Crime-Analysis" target="_blank">Github</Button>
                            <Button colored href="https://docs.google.com/presentation/d/1HvCtk0w41CW8yyg67lX4xcbRx_y-3ERLgdNIgjgxdbY/edit?usp=sharing" target="_blank">Slides</Button>
                            <Button colored href="https://www.kaggle.com/cityofLA/crime-in-los-angeles" target="_blank">Dataset</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://cdn.britannica.com/42/93542-050-E2B32DAB/women-Pima-shinny-game-field-hockey.jpg) center / cover'}}>Diabetes Classifer</CardTitle>
                        <CardText>Attempts to determine cases of diabetes in female Pima Indians with various machine learning algorithms.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/smoorjani/Diabetes-Classifer" target="_blank">Github</Button>
                            <Button colored href="https://docs.google.com/presentation/d/1crPGseCwvsXyK50GeGDdsHcZWAdq_IBA54x4xwQdjZM/edit?usp=sharing" target="_blank">Slides</Button>
                            <Button colored href="https://www.kaggle.com/uciml/pima-indians-diabetes-database" target="_blank">Dataset</Button>
                        </CardActions>
                    </Card>
                </div> 
            )       
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://lh3.googleusercontent.com/-i6WtYs4WWUI/XnOqd35sYII/AAAAAAAATyg/x0ub8RKXaBc_pt3NIZ9VygDEpH4N9FzegCK8BGAsYHg/s0/2020-03-19.png) center / cover'}}>Chrome Dino Genetic Algorithm</CardTitle>
                        <CardText>A relatively simple artificial intelligence to teach a computer how to play Chrome Dino from scratch using a simple genetic algorithm.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/smoorjani/Chrome-Dino-Genetic-Algorithm" target="_blank">Github</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://www.cdn.geeksforgeeks.org/wp-content/uploads/binary-tree-to-DLL.png) center / cover'}}>High School C++ Collection</CardTitle>
                        <CardText>A collection of programs from my year two high school computer science class.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/smoorjani/HS-CS-Year-2" target="_blank">Github</Button>
                        </CardActions>
                    </Card>
                </div> 
            )       
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://lh3.googleusercontent.com/proxy/0xeeWLwZS7E8bbisJikV0YyDMt679CklxYgnrblfWqlM9XmyWYCuHl4pIJMv44_POhip8_Ac4Vftzix40SNOyk-UeejAqGfTD1YT60iVVPXMy0P2jAA) center / cover'}}>Personal Portfolio</CardTitle>
                        <CardText>My personal website made with React JS and React MDL.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/smoorjani/" target="_blank">Github</Button>
                            <Button colored href="https://samrajmoorjani.com/" target="_blank">Website</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', 'text-shadow': "2px 2px #474747", height: '220px', background:'url(https://www.computerhope.com/jargon/e/explorer-win10.jpg) center / cover'}}>File Sorter</CardTitle>
                        <CardText>A lightweight batch script which sorts files into individual folders based on key parts of the filename. Intended to be used to sort company documents.</CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/smoorjani/File-Sorter" target="_blank">Github</Button>
                        </CardActions>
                    </Card>
                </div> 
            )     
        }   
    }
    
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Deep Learning</Tab>
                    <Tab>Data Analysis</Tab>
                    <Tab>C++</Tab>
                    <Tab>Misc</Tab>
                </Tabs>

                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;