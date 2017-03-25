//serverside
const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');


router.get('*', (request, response) => {

  const props = { title: 'Universal React'};

  ReactRouter.match({
    routes: (
      <ReactRouter.Router history={ReactRouter.browserHistory} >
        <ReactRouter.Route path='/' component={require('../Component.jsx')}>

        </ReactRouter.Route>
      </ReactRouter.Router>
    ),
    location: request.url
  }, (error, redirectLocation, renderProps) => {

    if(renderProps) {
      let html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement={(Component, renderProps) => {
            return <Component {...renderProps} {...props} />
          }}
        />
      );
      response.send(html);
    } else {
      response.status(404).send('Not Found');
    }

  });

});

module.exports = router;