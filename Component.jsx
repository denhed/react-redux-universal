const React = require('react');

module.exports = React.createClass({

  _handleClick: function(){
    alert();
  },

  render: function(){
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <h1>{this.props.title}</h1>
          <p>Isn't server-side rendering remarkable?</p>
          <button onClick={this._handleClick}>Click Me</button>
          <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(this.props)
          }} />
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
});

// vi spara props i globalscope __html: 'window.PROPS=' + JSON.stringify(this.props)
// PROPS är valfritt namn, kan ha __initialState om man så vill.
// går att spara props i data attribut men med begränsad storlek
