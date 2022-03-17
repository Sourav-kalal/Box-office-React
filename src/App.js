import React from 'react';
import { Route, Switch } from 'react-router';
import Starred from './pages/Starred';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/starred'>
          <Starred />
        </Route>
        <Route>404 Error</Route>
      </Switch>
    </div>
  );
};

export default App;
