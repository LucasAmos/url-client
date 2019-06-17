import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './components/views/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
