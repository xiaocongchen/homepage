import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import Teaching from './views/Teaching';
import Publication from './views/Publication';
import Professional from './views/Professional';


// All of our CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      {/*<Route path="/projects" component={Projects} />*/}
      {/*<Route path="/stats" component={Stats} />*/}
      <Route path="/Professional" component={Professional} />
      <Route path="/publication" component={Publication} />
      <Route path="/teaching" component={Teaching} />
      {/* Only useful in development mode */}
    </Switch>
  </Router>,
  document.getElementById('root'),
);
