import React from 'react';

import './App.scss';

import Portfolio from './component/portfolio/portfolio.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <main>
          <Portfolio portfolioPath='images/portfolio2/' />
        </main>
      </div>
    );
  }
}

export default App;
