import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';

// COMPONENTS
import CSStransition from './components/CSStransition';
import Tgroup from './components/tgroup';
import TransitionComp from './components/Transition';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/transition">Transition</Link>
          <Link to="/csstransition">CSStransition</Link>
          <Link to="/tgroup">Transitions group</Link>
        </div>
        <Route path="/transition" component={TransitionComp}></Route>
        <Route path="/csstransition" component={CSStransition}></Route>
        <Route path="/tgroup" component={Tgroup}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
