import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';


const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/reset" exact component={ResetPassword} />



      <Route component={() => <h1>404 not found!</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
