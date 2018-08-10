import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import routes from './routes';

import Home from './components/landing/Home';
import Admin from './components/admin/Dashboard';

render(
  <Router>
      <Switch>
        <Route exact path="home" component={Home} />
        <Route path="admin" component={Admin} />
        <Route path='*' component={Home} />
      </Switch>
  </Router>,
  document.getElementById('app')
);
