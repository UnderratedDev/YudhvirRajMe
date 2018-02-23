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
        Database.listenForItemsWithKeys (Database.projectsRef, (items) => {
            this.setState ({
                projects : items
            })
        })
    }

    componentWillMount () {
        this.getProjects ();
    }

    componentDidMount () {
        this.getProjects ();
    }
    
    render() {
        let projectItems;

        if (this.state.projects) {
            projectItems = this.state.projects.map ( project => {
                return (
                    <ProjectItem key = { project.id } project = { project } />
                );
            });
        }

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
