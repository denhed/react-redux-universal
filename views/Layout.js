import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Layout extends Component {
  constructor(props){
    super(props);

    console.log(this.props.custom)
  }
  _handleClick() {
    alert();
  }

  render() {
    const custom = this.props.custom;
    return (
      <html>
        <head>
          <title>{custom.title}</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <h1>{custom.title}</h1>
          <p>Isn't server-side rendering remarkable?</p>
          <button onClick={this._handleClick}>Click Me</button>
          {this.props.children}
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
          <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(custom)
          }} />
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
}

// vi spara props i globalscope __html: 'window.PROPS=' + JSON.stringify(this.props)
// PROPS är valfritt namn, kan ha __initialState om man så vill.
// går att spara props i data attribut men med begränsad storlek

function mapStateToProps(state, ownProps) {
  return {
    custom: state
  };
}

export default connect(mapStateToProps, null)(Layout);
