import { Route, Switch, Link } from 'react-router-dom';

import './App.scss';

import B2Buy from './component/portfolio/b2buy.component';
import FedBid from './component/portfolio/fedbid.component';
import VAO from './component/portfolio/vao.component';

const Home = () => (
  <div>
  <p><small>This repository is a quick way for me to throw up screen captures of present or past projects.<br />
    Hover over the links above for a brief overview of each project.</small></p>
  </div>
);

function App() {
  return (
    <div className='app'> 
      {/* baseurl set in BrowserRouter */}
      <nav className='nav'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/b2buy'>B2Buy</Link>
        <Link className='link' to='/fedbid'>FedBid</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/b2buy' render={() => (<B2Buy b2buyPath='images/portfolio2/' />)} />
          <Route path='/fedbid' render={() => (<FedBid fedbidPath='images/portfolio2/' />)} />
          <Route path='/vao' render={() => (<VAO vaoPath='images/portfolio2/' />)} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
