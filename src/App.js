import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
