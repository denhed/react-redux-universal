const React = require('react');

module.exports = React.createClass({

  displayName: 'About', // för react devtools

  render: function(){
    return (
      <p>Current: <strong>About</strong></p>
    );
  }
});
