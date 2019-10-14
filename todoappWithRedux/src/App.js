import React from 'react';
import './App.css';
import Todo from './Todo';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
