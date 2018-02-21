import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import { Router, browserHistory } from 'react-router';

import routes from './routes';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render (
    <Router history = { browserHistory } routes = { routes } />,
    document.getElementById ('root')
);

registerServiceWorker();
