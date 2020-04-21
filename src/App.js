import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './components/views/Home';
import Blog from './components/common/Blog';
import Portfolio from './components/common/Portfolio';
import Qualifications from './components/common/Qualifications';
import NavigationSuspend from './components/common/NavigationSuspend';

const Rekognition = React.lazy(() => import('./blogs/Rekognition'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<NavigationSuspend />}>
        <Switch>
          <Route path="/blog/rekognition" component={Rekognition} />
          <Route path="/blog" component={Blog} />
          <Route path="/education" component={Qualifications} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
