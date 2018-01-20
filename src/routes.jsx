import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './app';
import Process from './components/process';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/process" component={Process}/>
    </div>
  </Router>
);

export default Routes;
