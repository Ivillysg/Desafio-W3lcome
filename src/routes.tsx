import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import NotFoundPage from './pages/NotFoundPage';


const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/reset" exact component={ResetPassword} />



      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
