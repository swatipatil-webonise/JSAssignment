import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewProducts from './ViewProducts';
import ShopApp from './ShopApp';

class App extends React.Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={ShopApp}/>
        <Route path="/view" component={ViewProducts} />
      </Switch>
    </Router>
    );
  }
}

export default App;
