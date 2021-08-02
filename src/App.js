import { Route, Switch } from 'react-router-dom';

import Nav from './component/nav/nav.component'
import B2Buy from './component/portfolio/b2buy.component';
import FedBid from './component/portfolio/fedbid.component';
import VAO from './component/portfolio/vao.component';

import './app.scss';

const Home = () => (
  <div>
    <p><small>This repository is a quick way for me to throw up screen captures of present or past projects.<br />
      Hover over the links above for a brief overview of each project.</small></p>
  </div>
);

function App() {
  return (
    <div className='app'>
      <Nav />
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
