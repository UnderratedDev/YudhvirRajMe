import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ProjectItem extends Component {

    render() {
        // console.log (this.props);
        return (
            <li className = "Project">
                <strong>{ this.props.project.title }</strong> : { this.props.project.description }, { this.props.project.url }, { this.props.project.role }
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project  : PropTypes.object,
    onDelete : PropTypes.func
}

export default ProjectItem;
