import React, { Component } from 'react';

import PropTypes from 'prop-types';

import uuid from 'uuid';
import $ from 'jquery';

import './App.css';

import Header from './Components/common/Header';

class App extends Component {
    constructor () {
      super ();
    }

    render() {
        return (
            <div className = "container-fluid">
                <Header />
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    children : PropTypes.object.isRequired
};

export default App;
