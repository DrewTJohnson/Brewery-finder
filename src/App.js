import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://api.openbrewerydb.org/breweries?by_city=boston';

class App extends Component {
  state = {
    breweries: []
  }
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ breweries: data })
      console.log(this.state.breweries)
    })
  }
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>Boston Breweries</h1>
          {this.state.breweries.map((brewery) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{brewery.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {brewery.website_url}
              </h6>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}
export default App;