import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoe: [],
    };
  }

  render() {
    return (
      <div>
        <h1> Shoes: </h1>
        {this.state.shoe.map()}
      </div>
    );
  }
}

export default App;
