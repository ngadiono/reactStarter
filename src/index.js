import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/landing/Home';
import Admin from './components/admin/Dashboard';

const Root = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="home" component={Home} />
          <Route path="admin" component={Admin} />
          <Route path='*' component={Home} />
        </Switch>
    </Router>
  );
};

render(
  <Root />,
  document.getElementById('app')
);
