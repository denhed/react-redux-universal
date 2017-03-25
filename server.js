// för att kunna läsa Components jsx
require('babel-register')({
  presets: ['react']
});

const express = require('express');
const app = express();

// static files in public directory
app.use(express.static('public'));
app.use(require('./routes/index.jsx'));


const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost: ${PORT}`));
