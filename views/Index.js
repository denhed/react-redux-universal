import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <p>Current: <strong>Index</strong></p>;
    }
}

export default Index;






/*
const React = require('react');
import React from 'react';
module.exports = React.createClass({

  displayName: 'Index', // för react devtools

  render: function(){
    return (
      <p>Current: <strong>Index</strong></p>
    );
  }
});

*/
