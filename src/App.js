import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.scss';

import B2Buy from './component/portfolio/b2buy.component';
import FedBid from './component/portfolio/fedbid.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='app'>
        <nav className='nav'>
          <Link className='link' to='/screen-captures/b2buy'>B2Buy</Link>
          <Link className='link' to='/screen-captures/marketplace'>Marketplace</Link>
          <Link className='link' to='/screen-captures/fedboss'>FedBoss</Link>
          <Link className='link' to='/screen-captures/vao'>VAO</Link>
        </nav>
        <main>
          <Switch>
    {/*<Route exact path='/screen-captures/b2buy/' render={() => (<Portfolio portfolioPath='images/portfolio2/'/>)} />*/}
            <Route exact path='/screen-captures/b2buy/' render={() => (<B2Buy b2buyPath='images/portfolio2/'/>)} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
