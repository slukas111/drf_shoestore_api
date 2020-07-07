import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoe: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:8000/shoe/')
    .then(res => res.json())
    .then(data => this.setState({ shoe: data }))
  }

  render() {
    return (
      <div className="shoe-store">
        <ul>
          <h1> The Shoes: </h1>
          {this.state.shoe.map((p) => {
            return <li>
              Shoe: {p.brand_name}<br/>
              Size: {p.size}<br/>
              Color: {p.color}<br/>
              Material: {p.material}<br/>
              Manufacturer: {p.manufacturer}<br/>
              Fasten-Type: {p.fasten_type}<br/>
              <br></br>
              </li>;

          })}
        </ul>
      </div>
    );
  }
}

export default App;
