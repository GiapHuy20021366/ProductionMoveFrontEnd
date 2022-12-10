import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/containers/Login';
import Home from '../components/containers/Home';
import Dashboard from '../components/containers/Dashboard';
import '../styles/App.scss';
import { paths } from '../untils/constant';
import { userIsAuthenticated, userIsNotAuthenticated } from '../components/hoc/authentication'
import System from '../components/containers/System';
import { updateToken } from './../untils/authenticate';
import { toast, ToastContainer } from 'react-toastify';
import ToastUtil from '../untils/toastUtil';
import 'react-toastify/dist/ReactToastify.css';
import { connectServer, authenticate, socket } from '../socket';
import { useRef } from 'react';
const App = () => {
  useEffect(async () => {
    const token = await updateToken()
    if (token) {
      authenticate(token)
    }

  }, [])

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path={paths.HOME} component={Home} />
          <Route path={paths.LOGIN} component={userIsNotAuthenticated(Login)} />
          <Route path={paths.SYSTEM} component={userIsAuthenticated(System)} />
          <Route path={paths.DASHBOARD} component={userIsAuthenticated(Dashboard)} />
          
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
