const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;

//routes components
const Layout = require('../views/Layout.jsx');
const Index = require('../views/Index.jsx');
const About = require('../views/About.jsx');

// denna fil delas av både client och server.

// vi kollar vi befinner oss i browsern.
if (typeof window === 'object'){
  function createElement(Component, props) {
    return <Component {...props} custom={window.PROPS} />;
  }
}


module.exports = (
  <Router history={browserHistory} >
    <Route path='/' component={Layout} >
      <IndexRoute component={Index} />
      <Route path='about' component={About} />
    </Route>
  </Router>
);
