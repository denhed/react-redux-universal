const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

// denna fil delas av både client och server.

// vi kollar vi vi befinner oss i browsern.
if (typeof window === 'object'){
  function createElement(Component, props) {
    return <Component {...props} {...window.PROPS} />;
  }
}


module.exports = (
  <Router history={browserHistory} createElement={createElement} >
    <Route path='/' component={require('../Component.jsx')} >

    </Route>
  </Router>
);
