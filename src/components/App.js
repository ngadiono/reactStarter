import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        React starter
        {this.props.children}
      </div>
    );
  }
}

export default App;
