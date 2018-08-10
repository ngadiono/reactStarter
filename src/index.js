import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import routes from './routes';

import Home from './components/landing/Home';
import Admin from './components/admin/Dashboard';

render(
  <Router>
      <div>
        <Route exact path="home" component={Home} />
        <Route path="admin" component={Admin} />
        <Route path='*' component={Home} />
      </div>
  </Router>,
  document.getElementById('app')
);
