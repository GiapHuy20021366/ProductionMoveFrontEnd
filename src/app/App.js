import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Login from '../components/containers/Login';
import Home from '../components/containers/Home';


import '../styles/App.css';
import About from '../components/containers/About';
import { paths } from '../untils/constant';
import { userIsAuthenticated, userIsNotAuthenticated } from '../components/hoc/authentication'
import System from '../components/containers/System';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path={paths.HOME} component={Home} />

          <Route path={paths.LOGIN} component={userIsNotAuthenticated(Login)} />
          <Route path={paths.SYSTEM} component={userIsAuthenticated(System)} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
