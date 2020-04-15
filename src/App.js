import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './components/views/Home';
import Blog from './components/common/Blog';
import Portfolio from './components/common/Portfolio';
import Qualifications from './components/common/Qualifications';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/education" component={Qualifications} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
