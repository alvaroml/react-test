import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from 'Containers/Home';
import Test from 'Containers/Test';

function App() {
  return (
    <section>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={Test} />
          <Route component={Home} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
