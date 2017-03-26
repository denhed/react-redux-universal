// för att kunna läsa Components jsx, samt es6 import
require('babel-register')({
  presets: ['react', 'es2015']
});
const express = require('express');
const app = express();

// static files in public directory
app.use(express.static('public'));
app.use(require('./routes/index.js'));


const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost: ${PORT}`));
