import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/landing/Home';
import Admin from './components/admin/Dashboard';

<Route path="/" component={App} >
  <IndexRoute component={Home} />  
  <Route path="home" component={Home} />
  <Route path="admin" component={Admin} />
  <Route path='*' component={Home} />
</Route>
