import React, { component } from 'react';
import Breweries from './containers/breweries';
import Info from './components/Info';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container mx-auto mt-8 mb-4">
        <Breweries />
      </div>
    );
  }
}

export default App;