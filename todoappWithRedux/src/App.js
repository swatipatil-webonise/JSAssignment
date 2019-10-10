import React from 'react';
import './App.css';
import Todo  from './Todo';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/todo" component={Todo} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
