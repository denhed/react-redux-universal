const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const Provider = require('react-redux').Provider;
const routes = require('./routes/routes.jsx');

function reducer(state) { return state; }

const store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
  <Provider store={store} >
    {routes}
  </Provider>, document
);
