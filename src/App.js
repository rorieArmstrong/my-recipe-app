import React from 'react';
import HomePage from './containers/HomePage';
import Form from './containers/Form';
import Recipe from './containers/Recipe';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact  component={HomePage}/>
          <Route path='/input' component={Form} />
          <Route path='/recipe/:id' component={Recipe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
