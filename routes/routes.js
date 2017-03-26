import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { render } from 'react-dom'

// components
import Layout from '../views/Layout.js';
import Index from '../views/Index.js';
import About from '../views/About.js';

// denna fil delas av både client och server.

module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={Layout} >
      <IndexRoute component={Index} />
      <Route path='about' component={About} />
    </Route>
  </Router>
);
