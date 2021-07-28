import { Route, Switch, Link } from 'react-router-dom';

import './App.scss';

import B2Buy from './component/portfolio/b2buy.component';
import FedBid from './component/portfolio/fedbid.component';

function App() {
  return (
    <div className='app'>
      <nav className='nav'>
        <Link className='link' to='/screen-captures/b2buy'>B2Buy</Link>
        <Link className='link' to='/screen-captures/fedbid'>FedBid</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/screen-captures/b2buy'>
            <B2Buy b2buyPath='images/portfolio2/' />
          </Route>
          <Route exact path='/screen-captures/fedbid'>
            <FedBid fedbidPath='images/portfolio2/' />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
