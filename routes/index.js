//serverside
const router = require('express').Router();
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Router, RouterContext, match} from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

//basic reducer
function reducer(state) { return state; }

router.get('*', (request, response) => {
  const initialState = { title: 'Universal React'};
  const store = createStore(reducer, initialState);

  match({
    routes: require('./routes.js'),
    location: request.url
  }, (error, redirectLocation, renderProps) => {

    if(renderProps) {
      let html = ReactDOMServer.renderToString(
        <Provider store={store} >
          <RouterContext {...renderProps}/>
        </Provider>
      );
      response.send(html);
    } else {
      response.status(404).send('Not Found');
    }

  });

});

module.exports = router;
