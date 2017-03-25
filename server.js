// för att kunna läsa Components jsx
require('babel-register')({
  presets: ['react']
});


const express = require('express');
const app = express();

//serverside
const React = require('react');
const ReactDOMServer = require('react-dom/server');

//App
const Component = require('./Component.jsx');

// static files in public directory
app.use(express.static('public'));

app.get('/', (request, response) => {

  const props = { title: 'Universal React'};

  let html = ReactDOMServer.renderToString(
    React.createElement(Component, props)
  );
  response.send(html);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost: ${PORT}`));
