import React, { Component } from 'react';
import axios from 'axios';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    

    componentDidMount() {
        axios
        .get('http://localhost:4000/projects')
        .then( res => this.setState({ projects: res.data }))
        .catch( err => console.error(err));
    }

    render() {
        return (
            <div className="projects-container">
            {console.log(this.state.projects)}
            {this.state.projects.map(project => {
                return(
                    <div>
                        <h2>{project.name}</h2>
                        <p><strong>Description:</strong>{project.description}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}