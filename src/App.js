import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BackToTopBtn from './components/BackToTopBtn';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
// const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const Publications = lazy(() => import('./pages/Publications'));
const Conference = lazy(() => import('./pages/Conference'));
// const Projects = lazy(() => import('./pages/Projects'));
const CV = lazy(() => import('./pages/CV'));
const Teaching = lazy(() => import('./pages/Teaching'));
// const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));
// const Teaching = lazy(() => import('./pages/Teaching'));

const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <>
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Switch>
          <Route exact path="/" component={Index} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/publications" component={Publications} />
          <Route path="/conference" component={Conference} />
          {/* <Route path="/projects" component={Projects} /> */}
          <Route path="/CV" component={CV} />
          <Route path="/teaching" component={Teaching} />
          {/* <Route path="/teaching" component={Teaching} /> */}
          {/* <Route path="/resume" component={Resume} /> */}
          {/* <Route path="/stats" component={Stats} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          <Route component={NotFound} status={404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
    <BackToTopBtn />
  </>
);

export default App;
