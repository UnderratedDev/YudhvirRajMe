import React, { Component } from 'react';

import PropTypes from 'prop-types';

import uuid from 'uuid';

import ProjectItem from './ProjectItem';
import Database from '../../Database/Database';

class Projects extends Component {

    constructor () {
        super ();
        this.state = {
            projects : [],
        }
    }

    getProjects () {
        this.setState ({
            projects : [
                {
                    id : uuid.v4(),
                    title : 'Business Website',
                    description : 'What we did',
                }
            ]
        })
    }

    getProjectsFromFirebase () {
        Database.listenForItemsWithKeys (Database.projectsRef, (items) => {
            this.setState ({
                projects : items
            })
        })
    }

    componentWillMount () {
        this.getProjects ();
        this.getProjectsFromFirebase ();
    }

    componentDidMount () {
        this.getProjects ();
        this.getProjectsFromFirebase ();
    }
    
    render() {
        let projectItems;

        if (this.state.projects) {
            projectItems = this.state.projects.map ( project => {
                // console.log (project);
                return (
                    <ProjectItem key = { project.title } project = { project } />
                );
            });
        }

        // console.log (this.props);


        return (
            <div className = "Projects">
                <h3>Latest Projects</h3>
                { projectItems }
            </div>
        );
    }
}

Projects.propTypes = {
    projects : PropTypes.array,
    onDelete : PropTypes.func
}

export default Projects;
