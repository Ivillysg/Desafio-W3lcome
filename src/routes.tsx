import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignIn from './pages/SignIn';


const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={() => <h1>signup</h1>} />


      <Route component={() => <h1>404 not found!</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
