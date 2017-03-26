//serverside
const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Redux = require('redux');
const Provider = require('react-redux').Provider;


//basic reducer
function reducer(state) { return state; }



router.get('*', (request, response) => {

  const initialState = { title: 'Universal React'};
  // props är initial values.
  const store = Redux.createStore(reducer, initialState);



  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: request.url
  }, (error, redirectLocation, renderProps) => {

    if(renderProps) {
      let html = ReactDOMServer.renderToString(
        <Provider store={store} >
          <ReactRouter.RouterContext {...renderProps}/>
        </Provider>
      );
      response.send(html);
    } else {
      response.status(404).send('Not Found');
    }

  });

});

module.exports = router;
