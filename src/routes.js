import React, { Component } from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './Components/HomePage';
import CatsPage from './Components/CatsPage';
import CatPage from './Components/CatPage';

export default (
    <Route path = "/" component = { App } >
        <IndexRoute component = { HomePage } />
        <Route path = "/cats" component = { CatsPage } />
    </Route>
)